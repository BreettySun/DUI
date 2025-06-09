import { Component, Host, h, State, Listen } from "@stencil/core";

interface Message {
    id: number;
    type: "success" | "info" | "warning" | "error";
    text: string;
    duration?: number;
    icon?: string;
}

@Component({
    tag: "d-message",
    styleUrl: "d-message.css",
    shadow: true,
})
export class DMessage {
    @State() messages: Message[] = [];

    private getIconColor(type: Message["type"]): string {
        switch (type) {
            case "success":
                return "#67C23A";
            case "warning":
                return "#E6A23C";
            case "error":
                return "#F56C6C";
            case "info":
                return "#909399";
            default:
                return "#909399";
        }
    }

    @Listen("d-message", { target: "window" })
    handleMessage(ev: CustomEvent<Message>) {
        const message = ev.detail;
        this.messages = [...this.messages, message];

        // 使用自定义显示时间或默认3秒
        const duration = message.duration || 3000;
        setTimeout(() => {
            const messageElement = this.el.shadowRoot?.querySelector(
                `[data-message-id="${message.id}"]`
            );
            if (messageElement) {
                messageElement.classList.add("removing");
                // 等待动画结束后移除消息
                setTimeout(() => {
                    this.messages = this.messages.filter(
                        (m) => m.id !== message.id
                    );
                }, 300);
            }
        }, duration);
    }

    private el: HTMLElement;

    componentDidLoad() {
        this.el = document.querySelector("d-message") as HTMLElement;
    }

    render() {
        return (
            <Host>
                <div class="d-message-container">
                    {this.messages.map((message) => (
                        <div
                            class={`d-message d-message--${message.type}`}
                            data-message-id={message.id}
                            key={message.id}>
                            <div class="d-message__content">
                                {message.icon && (
                                    <d-icon
                                        name={message.icon}
                                        color={this.getIconColor(message.type)}
                                        class="d-message__icon"></d-icon>
                                )}
                                <span>{message.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Host>
        );
    }
}

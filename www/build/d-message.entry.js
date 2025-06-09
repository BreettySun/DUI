import { r as registerInstance, h, a as Host } from './index-DV_ni1Ch.js';

const dMessageCss = ":host{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:9999}.d-message-container{display:flex;flex-direction:column;align-items:center;gap:10px}.d-message{padding:10px 20px;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);animation:message-fade-in 0.3s ease-in-out;opacity:1;transform:translateY(0);transition:all 0.3s ease-in-out}.d-message.removing{opacity:0;transform:translateY(-20px)}.d-message__content{font-size:14px;line-height:1.5;display:flex;align-items:center;gap:8px}.d-message__icon{width:16px}.d-message--success{background-color:#f0f9eb;color:#67c23a;border:1px solid #e1f3d8}.d-message--warning{background-color:#fdf6ec;color:#e6a23c;border:1px solid #faecd8}.d-message--error{background-color:#fef0f0;color:#f56c6c;border:1px solid #fde2e2}.d-message--info{background-color:#f4f4f5;color:#909399;border:1px solid #e9e9eb}@keyframes message-fade-in{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes message-fade-out{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-20px)}}";

const DMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    messages = [];
    getIconColor(type) {
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
    handleMessage(ev) {
        const message = ev.detail;
        this.messages = [...this.messages, message];
        // 使用自定义显示时间或默认3秒
        const duration = message.duration || 3000;
        setTimeout(() => {
            const messageElement = this.el.shadowRoot?.querySelector(`[data-message-id="${message.id}"]`);
            if (messageElement) {
                messageElement.classList.add("removing");
                // 等待动画结束后移除消息
                setTimeout(() => {
                    this.messages = this.messages.filter((m) => m.id !== message.id);
                }, 300);
            }
        }, duration);
    }
    el;
    componentDidLoad() {
        this.el = document.querySelector("d-message");
    }
    render() {
        return (h(Host, { key: '7af3761a3523ce4a30e9c44dd3963b1ac946170f' }, h("div", { key: '270032de24befcc132c64feb9f71e15331121bc0', class: "d-message-container" }, this.messages.map((message) => (h("div", { class: `d-message d-message--${message.type}`, "data-message-id": message.id, key: message.id }, h("div", { class: "d-message__content" }, message.icon && (h("d-icon", { name: message.icon, color: this.getIconColor(message.type), class: "d-message__icon" })), h("span", null, message.text))))))));
    }
};
DMessage.style = dMessageCss;

export { DMessage as d_message };
//# sourceMappingURL=d-message.entry.esm.js.map

//# sourceMappingURL=d-message.entry.js.map
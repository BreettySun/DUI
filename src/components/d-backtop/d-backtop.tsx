import { Component, Host, h, Prop, State, Listen } from "@stencil/core";

@Component({
    tag: "d-backtop",
    styleUrl: "d-backtop.css",
    shadow: true,
})
export class DBacktop {
    @Prop() right: string = "40px";
    @Prop() bottom: string = "40px";
    @Prop() visibilityHeight: number = 400;
    @Prop() target: string = "";

    @State() visible: boolean = false;
    private targetElement: HTMLElement | Window = window;

    componentDidLoad() {
        if (this.target) {
            const targetEl = document.querySelector(this.target);
            if (targetEl) {
                this.targetElement = targetEl as HTMLElement;
            }
        }
    }

    @Listen("scroll", { target: "window" })
    handleScroll() {
        const scrollTop =
            this.targetElement === window
                ? window.scrollY
                : (this.targetElement as HTMLElement).scrollTop;

        this.visible = scrollTop > this.visibilityHeight;
    }

    private handleClick = () => {
        if (this.targetElement === window) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            (this.targetElement as HTMLElement).scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    render() {
        return (
            <Host>
                <div
                    class={`d-backtop ${
                        this.visible ? "d-backtop--visible" : ""
                    }`}
                    style={{
                        right: this.right,
                        bottom: this.bottom,
                    }}
                    onClick={this.handleClick}>
                    <slot></slot>
                </div>
            </Host>
        );
    }
}

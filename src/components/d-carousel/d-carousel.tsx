import { Component, Host, h, State, Element, Prop, Watch } from "@stencil/core";

@Component({
    tag: "d-carousel",
    styleUrl: "d-carousel.css",
    shadow: true,
})
export class DCarousel {
    @State() currentIndex: number = 0;
    @State() itemsCount: number = 0; // 新增状态跟踪轮播项数量
    @Element() el: HTMLElement;
    @Prop() autoplay: boolean = false;
    @Prop() delay: number = 3000; // Default delay of 3 seconds
    @Prop() indicatorPosition: "top" | "bottom" | "left" | "right" = "bottom";

    private items: HTMLElement[] = [];
    private autoplayInterval: number;

    componentDidLoad() {
        // 获取所有子元素作为轮播项
        this.items = Array.from(this.el.children) as HTMLElement[];
        // 更新状态以触发重新渲染
        this.itemsCount = this.items.length;
        console.log("轮播项数量:", this.itemsCount);
        console.log("指示器位置:", this.indicatorPosition);

        // 调试信息
        setTimeout(() => {
            const indicators = this.el.shadowRoot.querySelector(
                ".carousel-indicators"
            );
            console.log("指示器元素:", indicators);
            console.log(
                "指示器类名:",
                indicators ? indicators.className : "not found"
            );

            // 检查右侧指示器的样式
            if (this.indicatorPosition === "right") {
                const computedStyle = window.getComputedStyle(indicators);
                console.log("右侧指示器样式:", {
                    display: computedStyle.display,
                    position: computedStyle.position,
                    right: computedStyle.right,
                    height: computedStyle.height,
                    flexDirection: computedStyle.flexDirection,
                });
            }
        }, 100);

        // 显示第一个轮播项
        this.showSlide(this.currentIndex);

        // 如果启用了自动播放，开始自动播放
        if (this.autoplay) {
            this.startAutoplay();
        }
    }

    disconnectedCallback() {
        this.stopAutoplay();
    }

    @Watch("autoplay")
    autoplayChanged(newValue: boolean) {
        if (newValue) {
            this.startAutoplay();
        } else {
            this.stopAutoplay();
        }
    }

    private startAutoplay() {
        this.stopAutoplay(); // 先停止之前的自动播放
        this.autoplayInterval = window.setInterval(() => {
            this.nextSlide();
        }, this.delay);
    }

    private stopAutoplay() {
        if (this.autoplayInterval) {
            window.clearInterval(this.autoplayInterval);
        }
    }

    private showSlide(index: number) {
        // 确保索引在有效范围内
        if (this.items.length === 0) return;

        this.currentIndex = index;

        // 隐藏所有轮播项，只显示当前索引的项
        this.items.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    }

    private nextSlide() {
        if (this.items.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.showSlide(this.currentIndex);
    }

    private prevSlide() {
        if (this.items.length === 0) return;
        this.currentIndex =
            (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.showSlide(this.currentIndex);
    }

    render() {
        // 确保指示器位置是有效值
        const validPosition = ["top", "bottom", "left", "right"].includes(
            this.indicatorPosition
        )
            ? this.indicatorPosition
            : "bottom";

        console.log("渲染时的指示器位置:", validPosition);

        return (
            <Host>
                <div
                    class="carousel-container"
                    part="carousel">
                    <slot></slot>
                </div>

                {this.itemsCount > 0 && (
                    <div
                        class={`carousel-indicators carousel-indicators-${validPosition}`}
                        style={{
                            // 内联样式确保位置正确
                            [validPosition]: "10px",
                            ...(validPosition === "left" ||
                            validPosition === "right"
                                ? {
                                      flexDirection: "column",
                                      height: "100%",
                                      top: "0",
                                  }
                                : {
                                      flexDirection: "row",
                                      width: "100%",
                                      left: "0",
                                  }),
                        }}>
                        {Array.from({ length: this.itemsCount }).map((_, i) => (
                            <div
                                class={`indicator ${
                                    i === this.currentIndex ? "active" : ""
                                }`}
                                onClick={() => this.showSlide(i)}
                            />
                        ))}
                    </div>
                )}

                <div class="carousel-controls">
                    <button
                        class={`arrow-control arrow-${
                            validPosition === "left" ||
                            validPosition === "right"
                                ? "up"
                                : "prev"
                        }`}
                        onClick={() => this.prevSlide()}>
                        <d-icon
                            name={
                                validPosition === "left" ||
                                validPosition === "right"
                                    ? "arrow-upward"
                                    : "arrow-back"
                            }
                            color="white"
                            size="24px"
                        />
                    </button>
                    <button
                        class={`arrow-control arrow-${
                            validPosition === "left" ||
                            validPosition === "right"
                                ? "down"
                                : "next"
                        }`}
                        onClick={() => this.nextSlide()}>
                        <d-icon
                            name={
                                validPosition === "left" ||
                                validPosition === "right"
                                    ? "arrow-downward"
                                    : "arrow-forward"
                            }
                            color="white"
                            size="24px"
                        />
                    </button>
                </div>
            </Host>
        );
    }
}

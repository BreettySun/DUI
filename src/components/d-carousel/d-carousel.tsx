import {
    Component,
    Host,
    h,
    State,
    Element,
    Prop,
    Watch,
    Method,
} from "@stencil/core";

/**
 * @slot - 默认插槽，用于放置轮播内容
 */
@Component({
    tag: "d-carousel",
    styleUrl: "d-carousel.css",
    shadow: true,
})
export class DCarousel {
    @State() currentIndex: number = 0;
    @State() itemsCount: number = 0;
    @Element() el: HTMLElement;

    /**
     * 是否自动播放
     */
    @Prop() autoplay: boolean = false;

    /**
     * 自动播放间隔时间（毫秒）
     */
    @Prop() delay: number = 3000;

    /**
     * 指示器位置，可选值：top、bottom、left、right
     */
    @Prop() indicatorPosition: "top" | "bottom" | "left" | "right" = "bottom";

    private items: HTMLElement[] = [];
    private autoplayInterval: number;

    componentDidLoad() {
        // 获取所有子元素作为轮播项
        this.items = Array.from(this.el.children) as HTMLElement[];
        // 更新状态以触发重新渲染
        this.itemsCount = this.items.length;

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

    @Watch("delay")
    delayChanged() {
        if (this.autoplay) {
            this.startAutoplay(); // 重新启动自动播放以应用新的延迟
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

    /**
     * 手动切换到下一张幻灯片
     */
    @Method()
    async nextSlide() {
        if (this.items.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.showSlide(this.currentIndex);
    }

    /**
     * 手动切换到上一张幻灯片
     */
    @Method()
    async prevSlide() {
        if (this.items.length === 0) return;
        this.currentIndex =
            (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.showSlide(this.currentIndex);
    }

    /**
     * 手动切换到指定索引的幻灯片
     * @param index 幻灯片索引
     */
    @Method()
    async goToSlide(index: number) {
        if (index >= 0 && index < this.items.length) {
            this.showSlide(index);
        }
    }

    render() {
        // 计算指示器位置的样式
        const indicatorStyle = {};

        if (this.indicatorPosition === "top") {
            Object.assign(indicatorStyle, {
                top: "10px",
                left: "0",
                width: "100%",
            });
        } else if (this.indicatorPosition === "bottom") {
            Object.assign(indicatorStyle, {
                bottom: "10px",
                left: "0",
                width: "100%",
            });
        } else if (this.indicatorPosition === "left") {
            Object.assign(indicatorStyle, {
                left: "10px",
                top: "0",
                height: "100%",
            });
        } else if (this.indicatorPosition === "right") {
            Object.assign(indicatorStyle, {
                right: "10px",
                top: "0",
                height: "100%",
            });
        }

        return (
            <Host>
                <div
                    class="carousel-container"
                    part="carousel">
                    <slot></slot>
                </div>

                {this.itemsCount > 0 && (
                    <div
                        class="carousel-indicators"
                        part="indicators"
                        style={{
                            display: "flex",
                            position: "absolute",
                            zIndex: "10",
                            flexDirection:
                                this.indicatorPosition === "left" ||
                                this.indicatorPosition === "right"
                                    ? "column"
                                    : "row",
                            justifyContent: "center",
                            ...indicatorStyle,
                        }}>
                        {Array.from({ length: this.itemsCount }).map((_, i) => (
                            <div
                                class={`indicator ${
                                    i === this.currentIndex ? "active" : ""
                                }`}
                                part={`indicator ${
                                    i === this.currentIndex
                                        ? "indicator-active"
                                        : ""
                                }`}
                                onClick={() => this.showSlide(i)}
                            />
                        ))}
                    </div>
                )}

                {/* <div
                    class="carousel-controls"
                    part="controls">
                    <button
                        class={`arrow-control arrow-${
                            this.indicatorPosition === "left" ||
                            this.indicatorPosition === "right"
                                ? "up"
                                : "prev"
                        }`}
                        part="arrow prev-arrow"
                        onClick={() => this.prevSlide()}>
                        <d-icon
                            name={
                                this.indicatorPosition === "left" ||
                                this.indicatorPosition === "right"
                                    ? "arrow-upward"
                                    : "arrow-back"
                            }
                            color="white"
                            size="24px"
                        />
                    </button>
                    <button
                        class={`arrow-control arrow-${
                            this.indicatorPosition === "left" ||
                            this.indicatorPosition === "right"
                                ? "down"
                                : "next"
                        }`}
                        part="arrow next-arrow"
                        onClick={() => this.nextSlide()}>
                        <d-icon
                            name={
                                this.indicatorPosition === "left" ||
                                this.indicatorPosition === "right"
                                    ? "arrow-downward"
                                    : "arrow-forward"
                            }
                            color="white"
                            size="24px"
                        />
                    </button>
                </div> */}
            </Host>
        );
    }
}

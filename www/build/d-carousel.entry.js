import { r as registerInstance, g as getElement, h, a as Host } from './index-B30K5aI-.js';

const dCarouselCss = ":host{display:block;position:relative}.carousel-container{width:100%;height:100%;position:relative;overflow:hidden}.carousel-controls{position:absolute;z-index:10}.arrow-control{background:rgba(0, 0, 0, 0.3);color:white;border:none;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background-color 0.3s;padding:0}.arrow-control:hover{background:rgba(0, 0, 0, 0.6)}:host([indicator-position=\"top\"]) .carousel-controls,:host([indicator-position=\"bottom\"]) .carousel-controls{display:flex;justify-content:space-between;width:100%;top:50%;transform:translateY(-50%);padding:0 10px}:host([indicator-position=\"left\"]) .carousel-controls,:host([indicator-position=\"right\"]) .carousel-controls{display:flex;flex-direction:column;height:100%;justify-content:space-between;top:0;padding:10px 0}:host([indicator-position=\"left\"]) .carousel-controls{right:10px}:host([indicator-position=\"right\"]) .carousel-controls{left:10px}:host([indicator-position=\"top\"]) .carousel-controls{bottom:10px}:host([indicator-position=\"bottom\"]) .carousel-controls{top:10px}.carousel-indicators{display:flex;position:absolute;z-index:10}.carousel-indicators-top,.carousel-indicators-bottom{flex-direction:row;justify-content:center;width:100%;left:0;}.carousel-indicators-top{top:10px}.carousel-indicators-bottom{bottom:10px}.carousel-indicators-left,.carousel-indicators-right{flex-direction:column;justify-content:center;height:100%;top:0;}.carousel-indicators-left{left:10px}.carousel-indicators-right{right:10px}.indicator{width:10px;height:10px;border-radius:50%;background-color:rgba(255, 255, 255, 0.5);margin:5px;cursor:pointer;transition:background-color 0.3s}.indicator.active{background-color:white}";

const DCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currentIndex = 0;
    itemsCount = 0;
    get el() { return getElement(this); }
    /**
     * 是否自动播放
     */
    autoplay = false;
    /**
     * 自动播放间隔时间（毫秒）
     */
    delay = 3000;
    /**
     * 指示器位置，可选值：top、bottom、left、right
     */
    indicatorPosition = "bottom";
    items = [];
    autoplayInterval;
    componentDidLoad() {
        // 获取所有子元素作为轮播项
        this.items = Array.from(this.el.children);
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
    autoplayChanged(newValue) {
        if (newValue) {
            this.startAutoplay();
        }
        else {
            this.stopAutoplay();
        }
    }
    delayChanged() {
        if (this.autoplay) {
            this.startAutoplay(); // 重新启动自动播放以应用新的延迟
        }
    }
    startAutoplay() {
        this.stopAutoplay(); // 先停止之前的自动播放
        this.autoplayInterval = window.setInterval(() => {
            this.nextSlide();
        }, this.delay);
    }
    stopAutoplay() {
        if (this.autoplayInterval) {
            window.clearInterval(this.autoplayInterval);
        }
    }
    showSlide(index) {
        // 确保索引在有效范围内
        if (this.items.length === 0)
            return;
        this.currentIndex = index;
        // 隐藏所有轮播项，只显示当前索引的项
        this.items.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    }
    /**
     * 手动切换到下一张幻灯片
     */
    async nextSlide() {
        if (this.items.length === 0)
            return;
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.showSlide(this.currentIndex);
    }
    /**
     * 手动切换到上一张幻灯片
     */
    async prevSlide() {
        if (this.items.length === 0)
            return;
        this.currentIndex =
            (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.showSlide(this.currentIndex);
    }
    /**
     * 手动切换到指定索引的幻灯片
     * @param index 幻灯片索引
     */
    async goToSlide(index) {
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
        }
        else if (this.indicatorPosition === "bottom") {
            Object.assign(indicatorStyle, {
                bottom: "10px",
                left: "0",
                width: "100%",
            });
        }
        else if (this.indicatorPosition === "left") {
            Object.assign(indicatorStyle, {
                left: "10px",
                top: "0",
                height: "100%",
            });
        }
        else if (this.indicatorPosition === "right") {
            Object.assign(indicatorStyle, {
                right: "10px",
                top: "0",
                height: "100%",
            });
        }
        return (h(Host, { key: '07a025fbb0f51f5075db213b33761db2d3dfa1b0' }, h("div", { key: '177741532c4a3c8c8b194ddb082d852e60a95ccb', class: "carousel-container", part: "carousel" }, h("slot", { key: 'bc09c8d40344a44df5713d169d5be7c1044a07d4' })), this.itemsCount > 0 && (h("div", { key: '310f38431c4c7298909251e28ead51adf48e8555', class: "carousel-indicators", part: "indicators", style: {
                display: "flex",
                position: "absolute",
                zIndex: "10",
                flexDirection: this.indicatorPosition === "left" ||
                    this.indicatorPosition === "right"
                    ? "column"
                    : "row",
                justifyContent: "center",
                ...indicatorStyle,
            } }, Array.from({ length: this.itemsCount }).map((_, i) => (h("div", { class: `indicator ${i === this.currentIndex ? "active" : ""}`, part: `indicator ${i === this.currentIndex
                ? "indicator-active"
                : ""}`, onClick: () => this.showSlide(i) })))))));
    }
    static get watchers() { return {
        "autoplay": ["autoplayChanged"],
        "delay": ["delayChanged"]
    }; }
};
DCarousel.style = dCarouselCss;

export { DCarousel as d_carousel };
//# sourceMappingURL=d-carousel.entry.esm.js.map

//# sourceMappingURL=d-carousel.entry.js.map
import { r as registerInstance, h, a as Host } from './index-DV_ni1Ch.js';

const dBacktopCss = ":host{display:block}.d-backtop{position:fixed;display:flex;align-items:center;justify-content:center;width:40px;height:40px;background-color:#fff;color:#909399;border-radius:50%;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);cursor:pointer;opacity:0;transition:opacity 0.3s;z-index:100}.d-backtop:hover{background-color:#f2f6fc;color:#409eff}.d-backtop--visible{opacity:1}";

const DBacktop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    right = "40px";
    bottom = "40px";
    visibilityHeight = 400;
    target = "";
    visible = false;
    targetElement = window;
    componentDidLoad() {
        if (this.target) {
            const targetEl = document.querySelector(this.target);
            if (targetEl) {
                this.targetElement = targetEl;
            }
        }
    }
    handleScroll() {
        const scrollTop = this.targetElement === window
            ? window.scrollY
            : this.targetElement.scrollTop;
        this.visible = scrollTop > this.visibilityHeight;
    }
    handleClick = () => {
        if (this.targetElement === window) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        else {
            this.targetElement.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };
    render() {
        return (h(Host, { key: 'f402920450b443defe942fd2a49ae114466b5a51' }, h("div", { key: '3765f13d4217cc9a55e269fd535485de82e4deed', class: `d-backtop ${this.visible ? "d-backtop--visible" : ""}`, style: {
                right: this.right,
                bottom: this.bottom,
            }, onClick: this.handleClick }, h("slot", { key: '4a509878e50f332fde7d51ab3f2e4a4f8431abbf' }))));
    }
};
DBacktop.style = dBacktopCss;

export { DBacktop as d_backtop };
//# sourceMappingURL=d-backtop.entry.esm.js.map

//# sourceMappingURL=d-backtop.entry.js.map
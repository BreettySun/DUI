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
        return (h(Host, { key: '105684e4bf7d4b730967ac0c5da07d6b027d4a2f' }, h("div", { key: '1755f039f7c35192d91ce6745ddcee58cabd50a8', class: `d-backtop ${this.visible ? "d-backtop--visible" : ""}`, style: {
                right: this.right,
                bottom: this.bottom,
            }, onClick: this.handleClick }, h("slot", { key: '1a21d042cc3d7baab1fe253a6a022ba979b1b56b' }))));
    }
};
DBacktop.style = dBacktopCss;

export { DBacktop as d_backtop };
//# sourceMappingURL=d-backtop.entry.esm.js.map

//# sourceMappingURL=d-backtop.entry.js.map
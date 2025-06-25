import { r as registerInstance, e as createEvent, h, a as Host } from './index-DV_ni1Ch.js';

const dDrawerCss = ":host{position:fixed;left:0;top:0;z-index:8000;width:100vw;height:100vh;display:none;overflow:hidden;transition:all 0.3s}.ivy-mask{position:absolute;left:0;top:0;z-index:-1;width:100%;height:100%;background-color:var(--ivy-mask-color, rgba(55, 55, 55, 0.6))}.ivy-drawer{position:absolute;z-index:1;height:100%;background-color:#ffffff}.ivy-drawer-header{padding:12px 16px;border-bottom:1px solid var(--ivy-border-color, #dcdfe6);display:none}:host([show-header]) .ivy-drawer-header{display:block}.ivy-drawer-body{padding:16px}:host([show]){display:block}:host([show]) .ivy-drawer{animation-delay:0.05s;animation-duration:0.3s;animation-fill-mode:forwards}:host([placement=\"right\"]) .ivy-drawer{right:0;top:0;transform:translate3d(100%, 0, 0)}:host([placement=\"right\"][show]) .ivy-drawer{animation-name:slideInRight}:host([placement=\"left\"]) .ivy-drawer{left:0;top:0;transform:translate3d(-100%, 0, 0)}:host([placement=\"left\"][show]) .ivy-drawer{animation-name:slideInLeft}:host([placement=\"top\"]) .ivy-drawer{left:0;top:0;transform:translate3d(0, -100%, 0)}:host([placement=\"top\"][show]) .ivy-drawer{animation-name:slideInDown}:host([placement=\"bottom\"]) .ivy-drawer{left:0;bottom:0;transform:translate3d(0, 100%, 0)}:host([placement=\"bottom\"][show]) .ivy-drawer{animation-name:slideInUp}@keyframes slideInLeft{from{transform:translate3d(-100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInRight{from{transform:translate3d(100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInDown{from{transform:translate3d(0, -100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInUp{from{transform:translate3d(0, 100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}";

const DDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closed = createEvent(this, "closed", 7);
    }
    visible = false;
    width = "36%";
    showHeader = false;
    header = "";
    maskClosable = true;
    placement = "right";
    /**监听传入的 placement 是否符合要求*/
    validateName(val) {
        const flag = ["left", "right", "top", "bottom"].includes(val);
        if (!flag) {
            throw new Error("placement 必须是 left/right/top/bottom 其中之一");
        }
    }
    renderHeader() {
        if (this.showHeader) {
            return (h("div", { class: "ivy-drawer-header" }, h("slot", { name: "header" }, this.header)));
        }
        else {
            return null;
        }
    }
    render() {
        return (h(Host, { key: '53f6a8790c716b46e857185bac5081759c21053b', show: this.visible }, h("div", { key: 'ee18d9d70f463e4681b6bed7e84a55db9f0c8f1b', class: "ivy-mask", onClick: this.maskClose.bind(this) }), h("div", { key: '37e963019c04c1333418685ba0ea41905fb4519d', class: "ivy-drawer", style: {
                width: ["left", "right"].includes(this.placement)
                    ? this.width
                    : "100%",
                height: ["top", "bottom"].includes(this.placement)
                    ? this.width
                    : "100%",
            } }, this.renderHeader(), h("div", { key: 'e0e3d1f7df86b05f2727fd404aae2d6734744281', class: "ivy-drawer-body" }, h("slot", { key: 'e67387de229fcef90c5074320942e96105056c1f' })))));
    }
    closed;
    closeHandler() {
        this.closed.emit();
    }
    async open() {
        this.visible = true;
    }
    async close() {
        this.closeHandler();
        this.visible = false;
    }
    maskClose() {
        if (this.maskClosable) {
            this.visible = false;
        }
    }
    static get watchers() { return {
        "placement": ["validateName"]
    }; }
};
DDrawer.style = dDrawerCss;

export { DDrawer as d_drawer };
//# sourceMappingURL=d-drawer.entry.esm.js.map

//# sourceMappingURL=d-drawer.entry.js.map
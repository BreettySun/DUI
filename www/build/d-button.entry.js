import { r as registerInstance, h, a as Host } from './index-B30K5aI-.js';

const dButtonCss = ":host{display:block}.btn{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:4px;cursor:pointer;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n\t\tUbuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;font-weight:500;transition:all 0.2s ease;outline:none}.btn>*{display:flex;align-items:center}.btn-primary{background-color:#1890ff;color:white}.btn-primary:hover{background-color:#40a9ff}.btn-secondary{background-color:#f0f0f0;color:rgba(0, 0, 0, 0.85)}.btn-secondary:hover{background-color:#e0e0e0}.btn-danger{background-color:#ff4d4f;color:white}.btn-danger:hover{background-color:#ff7875}.btn-text{background-color:transparent;color:rgba(0, 0, 0, 0.85)}.btn-text:hover{background-color:rgba(0, 0, 0, 0.05)}.btn-small{height:24px;padding:0 7px;font-size:12px}.btn-medium{height:32px;padding:0 15px;font-size:14px}.btn-large{height:40px;padding:0 15px;font-size:16px}.btn-disabled{opacity:0.5;cursor:not-allowed}.btn-disabled:hover{opacity:0.5}.btn-round{border-radius:50%;padding:0}.btn-round.btn-small{width:24px}.btn-round.btn-medium{width:32px}.btn-round.btn-large{width:40px}";

const DButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * 按钮类型
     */
    type = "primary";
    /**
     * 按钮尺寸
     */
    size = "medium";
    /**
     * 是否禁用
     */
    disabled = false;
    /**
     * 是否为圆形按钮
     */
    round = false;
    /**
     * 自定义类名
     */
    customClass = "";
    /**
     * 自定义内联样式
     */
    customStyle = {};
    render() {
        const classes = {
            btn: true,
            [`btn-${this.type}`]: true,
            [`btn-${this.size}`]: true,
            "btn-disabled": this.disabled,
            "btn-round": this.round,
            [this.customClass]: !!this.customClass,
        };
        // 允许外部传递style和class
        return (h(Host, { key: '21eb418112d02918a14578f9b358483128365702' }, h("button", { key: '54eb38d3eac32b349aa8593ba05b4638c7875d4b', class: classes, disabled: this.disabled, style: this.customStyle, part: "button" }, h("slot", { key: '9db3e66e9bdbbe3931f73cb2b4f0c727a8b8542b' }))));
    }
};
DButton.style = dButtonCss;

export { DButton as d_button };
//# sourceMappingURL=d-button.entry.esm.js.map

//# sourceMappingURL=d-button.entry.js.map
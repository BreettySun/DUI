import { r as registerInstance, h, a as Host } from './index-B30K5aI-.js';

const dDividerCss = ":host{display:block;--divider-color:#bbb;--divider-size:1px;--divider-margin:24px 0}:host(.divider){position:relative}:host(.divider-horizontal){display:block;clear:both;width:100%;min-width:100%;height:var(--divider-size);margin:var(--divider-margin)}:host(.divider-vertical){display:inline-block;height:1em;margin:0 8px;vertical-align:middle;width:var(--divider-size)}:host(.divider-horizontal.divider-solid){background-color:var(--divider-color)}:host(.divider-vertical.divider-solid){background-color:var(--divider-color)}:host(.divider-horizontal.divider-highDensityDashed){background-color:transparent;background-image:linear-gradient(\n\t\tto right,\n\t\tvar(--divider-color),\n\t\tvar(--divider-color) 50%,\n\t\ttransparent 50%\n\t);background-size:48px var(--divider-size);background-repeat:repeat-x}:host(.divider-horizontal.divider-lowDensityDashed){background-color:transparent;background-image:linear-gradient(\n\t\tto right,\n\t\tvar(--divider-color) 50%,\n\t\ttransparent 50%\n\t);background-size:16px var(--divider-size);background-repeat:repeat-x}";

const DDivider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * 分割线方向，可选值：horizontal、vertical
     */
    direction = "horizontal";
    /**
     * 分割线颜色
     */
    color = "#bbb";
    /**
     * 分割线粗细
     */
    size = "1px";
    /**
     * 分割线样式，可选值：solid、dashed、dotted
     */
    lineType = "solid";
    /**
     * 分割线边距
     */
    margin = "24px 0";
    render() {
        return (h(Host, { key: '5b86c36bfab05d62ac465bdea61956c8a6219985', style: {
                "--divider-color": this.color,
                "--divider-size": this.size,
                "--divider-margin": this.margin,
            }, class: {
                divider: true,
                [`divider-${this.direction}`]: true,
                [`divider-${this.lineType}`]: true,
            } }, h("slot", { key: 'c5d25221c1e17ea3e7c1aee33fb0fd7cab5d68a4' })));
    }
};
DDivider.style = dDividerCss;

export { DDivider as d_divider };
//# sourceMappingURL=d-divider.entry.esm.js.map

//# sourceMappingURL=d-divider.entry.js.map
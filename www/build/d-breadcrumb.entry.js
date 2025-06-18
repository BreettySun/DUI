import { r as registerInstance, d as getElement, h, a as Host } from './index-DV_ni1Ch.js';

const dBreadcrumbCss = ":host{display:block}.breadcrumb{display:flex;flex-wrap:wrap;padding:0.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#f8f9fa;border-radius:0.25rem}.breadcrumb-item{display:flex;align-items:center}.breadcrumb-item+.breadcrumb-item{padding-left:0.5rem}.breadcrumb-slash{margin:0 0.5rem;color:#6c757d;display:flex;align-items:center}.breadcrumb-item a{color:#007bff;text-decoration:none;display:flex;align-items:center}.breadcrumb-item a:hover{color:#0056b3;text-decoration:underline}.breadcrumb-item:last-child{color:#6c757d}.breadcrumb-item span{display:flex;align-items:center}";

const DBreadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    separator = "/";
    render() {
        return (h(Host, { key: '0605b766de7e95e92d74038ebd57a617e8c743e3' }, h("nav", { key: '5ad4c80b27f81beacbf5e197c9c1dd51058897e3', "aria-label": "breadcrumb" }, h("ul", { key: 'c98a38cb9e2a7c5006ee8acf4bbb90253c5a6218', class: "breadcrumb", itemscope: true, itemtype: "https://schema.org/BreadcrumbList" }, h("slot", { key: 'e1f33cd3b1681c5eed26790d56c08aee1c583acc' })))));
    }
};
DBreadcrumb.style = dBreadcrumbCss;

export { DBreadcrumb as d_breadcrumb };
//# sourceMappingURL=d-breadcrumb.entry.esm.js.map

//# sourceMappingURL=d-breadcrumb.entry.js.map
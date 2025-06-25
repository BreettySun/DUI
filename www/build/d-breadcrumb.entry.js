import { r as registerInstance, d as getElement, h, a as Host } from './index-DV_ni1Ch.js';

const dBreadcrumbCss = ":host{display:block}.breadcrumb{display:flex;flex-wrap:wrap;padding:0.75rem 1rem;margin-bottom:1rem;list-style:none;border-radius:0.25rem}.breadcrumb-item{display:flex;align-items:center}.breadcrumb-item+.breadcrumb-item{padding-left:0.5rem}.breadcrumb-slash{margin:0 0.5rem;color:#6c757d;display:flex;align-items:center}.breadcrumb-item a{color:#007bff;text-decoration:none;display:flex;align-items:center}.breadcrumb-item a:hover{color:#0056b3;text-decoration:underline}.breadcrumb-item:last-child{color:#6c757d}.breadcrumb-item span{display:flex;align-items:center}";

const DBreadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    separator = "/";
    render() {
        return (h(Host, { key: '8468b940e400b17a0beb1f92fd47f17c692bde58' }, h("nav", { key: '434f8ac7c78f53ba189401a5f7fc077e5476b076', "aria-label": "breadcrumb" }, h("ul", { key: '861f7499165e68feb631205a6475aa9e5246f033', class: "breadcrumb", itemscope: true, itemtype: "https://schema.org/BreadcrumbList" }, h("slot", { key: 'a266463f32e11c1a7388f5209f157816975eeb8c' })))));
    }
};
DBreadcrumb.style = dBreadcrumbCss;

export { DBreadcrumb as d_breadcrumb };
//# sourceMappingURL=d-breadcrumb.entry.esm.js.map

//# sourceMappingURL=d-breadcrumb.entry.js.map
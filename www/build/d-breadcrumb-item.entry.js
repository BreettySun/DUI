import { r as registerInstance, d as getElement, h, a as Host } from './index-DV_ni1Ch.js';

const dBreadcrumbCss = ":host{display:block}.breadcrumb{display:flex;flex-wrap:wrap;padding:0.75rem 1rem;margin-bottom:1rem;list-style:none;border-radius:0.25rem}.breadcrumb-item{display:flex;align-items:center}.breadcrumb-item+.breadcrumb-item{padding-left:0.5rem}.breadcrumb-slash{margin:0 0.5rem;color:#6c757d;display:flex;align-items:center}.breadcrumb-item a{color:#007bff;text-decoration:none;display:flex;align-items:center}.breadcrumb-item a:hover{color:#0056b3;text-decoration:underline}.breadcrumb-item:last-child{color:#6c757d}.breadcrumb-item span{display:flex;align-items:center}";

const DBreadcrumbItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    href;
    position;
    get separator() {
        const breadcrumb = this.el.closest("d-breadcrumb");
        return breadcrumb ? breadcrumb.separator : "/";
    }
    render() {
        const isFirst = !this.el.previousElementSibling;
        const content = this.el.innerHTML;
        return (h(Host, { key: '17cbb5f64eb50d969b68902275c400b99d5f3bfa' }, h("li", { key: 'ba4c934a11cec2ede26d056c2cbd672c421c401b', class: "breadcrumb-item", itemprop: "itemListElement", itemscope: true, itemtype: "https://schema.org/ListItem" }, !isFirst && h("span", { key: '52833260b8da2667113be5953b803de1504ea31a', class: "breadcrumb-slash" }, this.separator), this.href ? (h("a", { itemprop: "item", href: this.href }, h("span", { itemprop: "name", innerHTML: content }))) : (h("span", { itemprop: "name", innerHTML: content })), h("meta", { key: 'f909244b6afac07dc553372f980486d887d34f6f', itemprop: "position", content: String(this.position) }))));
    }
};
DBreadcrumbItem.style = dBreadcrumbCss;

export { DBreadcrumbItem as d_breadcrumb_item };
//# sourceMappingURL=d-breadcrumb-item.entry.esm.js.map

//# sourceMappingURL=d-breadcrumb-item.entry.js.map
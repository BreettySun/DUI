import { r as registerInstance, h } from './index-D0R0K61z.js';
import { f as format } from './utils-DhW431pq.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: 'f69a3eab25e24351c6b9a7956cd4644b41c2d7f3' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
//# sourceMappingURL=my-component.entry.esm.js.map

//# sourceMappingURL=my-component.entry.js.map
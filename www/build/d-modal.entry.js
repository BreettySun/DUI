import { r as registerInstance, e as createEvent, h, a as Host } from './index-DV_ni1Ch.js';

const dModalCss = ":host{position:fixed;left:0;top:0;z-index:8000;width:100vw;height:100vh;display:none;overflow:hidden;transition:all 0.3s}.ivy-mask{position:absolute;left:0;top:0;z-index:-1;width:100%;height:100%;background-color:var(--ivy-mask-color, rgba(55, 55, 55, 0.6))}.ivy-modal{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%) scale(0.5);z-index:1;background-color:#ffffff;border-radius:4px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);opacity:0;transition:all 0.3s ease-in-out}:host([show]){display:block}:host([show]) .ivy-modal{transform:translate(-50%, -50%) scale(1);opacity:1}.ivy-modal-header{padding:16px 24px;border-bottom:1px solid var(--ivy-border-color, #dcdfe6);display:none}:host([show-header]) .ivy-modal-header{display:flex;justify-content:space-between;align-items:center}.ivy-modal-title{font-size:16px;font-weight:500;color:rgba(0, 0, 0, 0.85)}.ivy-modal-close{font-size:20px;color:rgba(0, 0, 0, 0.45);cursor:pointer;transition:color 0.3s}.ivy-modal-close:hover{color:rgba(0, 0, 0, 0.85)}.ivy-modal-body{padding:24px;max-height:calc(100vh - 200px);overflow-y:auto}.ivy-modal-footer{padding:10px 24px;border-top:1px solid var(--ivy-border-color, #dcdfe6);text-align:right;display:none}:host([show-footer]) .ivy-modal-footer{display:block}.ivy-modal-btn{padding:4px 15px;font-size:14px;border-radius:2px;cursor:pointer;transition:all 0.3s;margin-left:8px;border:1px solid transparent}.ivy-modal-btn-cancel{background:#fff;border-color:#d9d9d9;color:rgba(0, 0, 0, 0.65)}.ivy-modal-btn-cancel:hover{color:#40a9ff;border-color:#40a9ff}.ivy-modal-btn-confirm{background:#1890ff;border-color:#1890ff;color:#fff}.ivy-modal-btn-confirm:hover{background:#40a9ff;border-color:#40a9ff}";

const DModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClose = createEvent(this, "onClose", 7);
        this.onConfirm = createEvent(this, "onConfirm", 7);
        this.onCancel = createEvent(this, "onCancel", 7);
    }
    show = false;
    width = "520px";
    showHeader = true;
    header = "";
    maskClosable = true;
    showFooter = true;
    confirmText = "确定";
    cancelText = "取消";
    renderHeader() {
        if (this.showHeader) {
            return (h("div", { class: "ivy-modal-header" }, h("div", { class: "ivy-modal-title" }, h("slot", { name: "header" }, this.header)), h("div", { class: "ivy-modal-close", onClick: this.close.bind(this) }, "\u00D7")));
        }
        else {
            return null;
        }
    }
    renderFooter() {
        if (this.showFooter) {
            return (h("div", { class: "ivy-modal-footer" }, h("button", { class: "ivy-modal-btn ivy-modal-btn-cancel", onClick: this.cancel.bind(this) }, this.cancelText), h("button", { class: "ivy-modal-btn ivy-modal-btn-confirm", onClick: this.confirm.bind(this) }, this.confirmText)));
        }
        else {
            return null;
        }
    }
    render() {
        return (h(Host, { key: '1463133c90aab44e1366b5883f8b0d215a2ec4cf', show: this.show }, h("div", { key: '00b66fa8ed7ad76cd0c20c2c8594cec7dbe57554', class: "ivy-mask", onClick: this.maskClose.bind(this) }), h("div", { key: 'e8e9077bc5491c9c4048d773f66e14de5208266d', class: "ivy-modal", style: { width: this.width } }, this.renderHeader(), h("div", { key: '9f3392e8a77576c9ea5aa541c02abafe24acf6b8', class: "ivy-modal-body" }, h("slot", { key: '422587e81bead669cac7d852a37afeb03debec8d' })), this.renderFooter())));
    }
    onClose;
    onConfirm;
    onCancel;
    closeHandler() {
        this.onClose.emit();
    }
    confirmHandler() {
        this.onConfirm.emit();
    }
    cancelHandler() {
        this.onCancel.emit();
    }
    async open() {
        this.show = true;
    }
    async close() {
        this.closeHandler();
        this.show = false;
    }
    async confirm() {
        this.confirmHandler();
        this.show = false;
    }
    async cancel() {
        this.cancelHandler();
        this.show = false;
    }
    maskClose() {
        if (this.maskClosable) {
            this.show = false;
        }
    }
};
DModal.style = dModalCss;

export { DModal as d_modal };
//# sourceMappingURL=d-modal.entry.esm.js.map

//# sourceMappingURL=d-modal.entry.js.map
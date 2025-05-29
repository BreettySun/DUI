import { r as registerInstance, d as createEvent, h, a as Host } from './index-B30K5aI-.js';

const dModalCss = ":host{display:block}.modal-mask{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;z-index:1000;opacity:0;transition:opacity 0.3s ease-in-out}.modal-mask-enter{opacity:1}.modal-container{background:#fff;border-radius:4px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);transform:scale(0.5);opacity:0;transition:all 0.3s ease-in-out}.modal-container-enter{transform:scale(1);opacity:1}.modal-header{padding:16px 24px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center}.modal-title{font-size:16px;font-weight:500;color:rgba(0, 0, 0, 0.85)}.modal-close{font-size:20px;color:rgba(0, 0, 0, 0.45);cursor:pointer;transition:color 0.3s}.modal-close:hover{color:rgba(0, 0, 0, 0.85)}.modal-content{padding:24px;max-height:calc(100vh - 200px);overflow-y:auto}.modal-footer{padding:10px 24px;border-top:1px solid #f0f0f0;text-align:right}.modal-btn{padding:4px 15px;font-size:14px;border-radius:2px;cursor:pointer;transition:all 0.3s;margin-left:8px;border:1px solid transparent}.modal-btn-cancel{background:#fff;border-color:#d9d9d9;color:rgba(0, 0, 0, 0.65)}.modal-btn-cancel:hover{color:#40a9ff;border-color:#40a9ff}.modal-btn-confirm{background:#1890ff;border-color:#1890ff;color:#fff}.modal-btn-confirm:hover{background:#40a9ff;border-color:#40a9ff}";

const DModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClose = createEvent(this, "onClose", 7);
        this.onConfirm = createEvent(this, "onConfirm", 7);
        this.onCancel = createEvent(this, "onCancel", 7);
    }
    visible = false;
    title = "";
    width = "520px";
    showClose = true;
    maskClosable = true;
    confirmText = "确定";
    cancelText = "取消";
    showFooter = true;
    isVisible = false;
    isAnimating = false;
    onClose;
    onConfirm;
    onCancel;
    watchVisible(newValue) {
        if (newValue) {
            this.isVisible = true;
            this.isAnimating = true;
            setTimeout(() => {
                this.isAnimating = false;
            }, 300);
        }
        else {
            this.isAnimating = true;
            setTimeout(() => {
                this.isVisible = false;
                this.isAnimating = false;
            }, 300);
        }
    }
    handleClose = () => {
        this.onClose.emit();
    };
    handleConfirm = () => {
        this.onConfirm.emit();
    };
    handleCancel = () => {
        this.onCancel.emit();
    };
    handleMaskClick = () => {
        if (this.maskClosable) {
            this.handleClose();
        }
    };
    render() {
        if (!this.isVisible) {
            return null;
        }
        return (h(Host, null, h("div", { class: `modal-mask ${this.isAnimating ? "modal-mask-enter" : ""}`, onClick: this.handleMaskClick }, h("div", { class: `modal-container ${this.isAnimating ? "modal-container-enter" : ""}`, style: { width: this.width } }, h("div", { class: "modal-header" }, h("div", { class: "modal-title" }, this.title), this.showClose && (h("div", { class: "modal-close", onClick: this.handleClose }, "\u00D7"))), h("div", { class: "modal-content" }, h("slot", null)), this.showFooter && (h("div", { class: "modal-footer" }, h("button", { class: "modal-btn modal-btn-cancel", onClick: this.handleCancel }, this.cancelText), h("button", { class: "modal-btn modal-btn-confirm", onClick: this.handleConfirm }, this.confirmText)))))));
    }
    static get watchers() { return {
        "visible": ["watchVisible"]
    }; }
};
DModal.style = dModalCss;

export { DModal as d_modal };
//# sourceMappingURL=d-modal.entry.esm.js.map

//# sourceMappingURL=d-modal.entry.js.map
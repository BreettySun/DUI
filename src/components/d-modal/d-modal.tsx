import {
    Component,
    Event,
    EventEmitter,
    Host,
    Method,
    Prop,
    h,
} from "@stencil/core";

@Component({
    tag: "d-modal",
    styleUrl: "d-modal.css",
    shadow: true,
})
export class DModal {
    @Prop({
        attribute: "show",
        mutable: true,
        reflect: true,
    })
    show: boolean = false;

    @Prop()
    width: string = "520px";

    @Prop({
        attribute: "show-header",
        mutable: true,
        reflect: true,
    })
    showHeader: boolean = true;

    @Prop({
        attribute: "header",
    })
    header: string = "";

    @Prop({
        attribute: "mask-closable",
        mutable: true,
        reflect: true,
    })
    maskClosable: boolean = true;

    @Prop({
        attribute: "show-footer",
        mutable: true,
        reflect: true,
    })
    showFooter: boolean = true;

    @Prop({
        attribute: "confirm-text",
    })
    confirmText: string = "确定";

    @Prop({
        attribute: "cancel-text",
    })
    cancelText: string = "取消";

    renderHeader() {
        if (this.showHeader) {
            return (
                <div class="ivy-modal-header">
                    <div class="ivy-modal-title">
                        <slot name="header">{this.header}</slot>
                    </div>
                    <div
                        class="ivy-modal-close"
                        onClick={this.close.bind(this)}>
                        ×
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    renderFooter() {
        if (this.showFooter) {
            return (
                <div class="ivy-modal-footer">
                    <button
                        class="ivy-modal-btn ivy-modal-btn-cancel"
                        onClick={this.cancel.bind(this)}>
                        {this.cancelText}
                    </button>
                    <button
                        class="ivy-modal-btn ivy-modal-btn-confirm"
                        onClick={this.confirm.bind(this)}>
                        {this.confirmText}
                    </button>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <Host show={this.show}>
                <div
                    class="ivy-mask"
                    onClick={this.maskClose.bind(this)}></div>
                <div
                    class="ivy-modal"
                    style={{ width: this.width }}>
                    {this.renderHeader()}
                    <div class="ivy-modal-body">
                        <slot></slot>
                    </div>
                    {this.renderFooter()}
                </div>
            </Host>
        );
    }

    @Event() onClose: EventEmitter;
    @Event() onConfirm: EventEmitter;
    @Event() onCancel: EventEmitter;

    closeHandler() {
        this.onClose.emit();
    }

    confirmHandler() {
        this.onConfirm.emit();
    }

    cancelHandler() {
        this.onCancel.emit();
    }

    @Method()
    async open() {
        this.show = true;
    }

    @Method()
    async close() {
        this.closeHandler();
        this.show = false;
    }

    @Method()
    async confirm() {
        this.confirmHandler();
        this.show = false;
    }

    @Method()
    async cancel() {
        this.cancelHandler();
        this.show = false;
    }

    maskClose() {
        if (this.maskClosable) {
            this.show = false;
        }
    }
}

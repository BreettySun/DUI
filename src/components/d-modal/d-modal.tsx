import {
    Component,
    Host,
    h,
    Prop,
    State,
    Watch,
    Event,
    EventEmitter,
} from "@stencil/core";

@Component({
    tag: "d-modal",
    styleUrl: "d-modal.css",
    shadow: true,
})
export class DModal {
    @Prop() visible: boolean = false;
    @Prop() title: string = "";
    @Prop() width: string = "520px";
    @Prop() showClose: boolean = true;
    @Prop() maskClosable: boolean = true;
    @Prop() confirmText: string = "确定";
    @Prop() cancelText: string = "取消";
    @Prop() showFooter: boolean = true;

    @State() isVisible: boolean = false;
    @State() isAnimating: boolean = false;

    @Event() onClose: EventEmitter<void>;
    @Event() onConfirm: EventEmitter<void>;
    @Event() onCancel: EventEmitter<void>;

    @Watch("visible")
    watchVisible(newValue: boolean) {
        if (newValue) {
            this.isVisible = true;
            this.isAnimating = true;
            setTimeout(() => {
                this.isAnimating = false;
            }, 300);
        } else {
            this.isAnimating = true;
            setTimeout(() => {
                this.isVisible = false;
                this.isAnimating = false;
            }, 300);
        }
    }

    private handleClose = () => {
        this.onClose.emit();
    };

    private handleConfirm = () => {
        this.onConfirm.emit();
    };

    private handleCancel = () => {
        this.onCancel.emit();
    };

    private handleMaskClick = () => {
        if (this.maskClosable) {
            this.handleClose();
        }
    };

    render() {
        if (!this.isVisible) {
            return null;
        }

        return (
            <Host>
                <div
                    class={`modal-mask ${
                        this.isAnimating ? "modal-mask-enter" : ""
                    }`}
                    onClick={this.handleMaskClick}>
                    <div
                        class={`modal-container ${
                            this.isAnimating ? "modal-container-enter" : ""
                        }`}
                        style={{ width: this.width }}>
                        <div class="modal-header">
                            <div class="modal-title">{this.title}</div>
                            {this.showClose && (
                                <div
                                    class="modal-close"
                                    onClick={this.handleClose}>
                                    ×
                                </div>
                            )}
                        </div>
                        <div class="modal-content">
                            <slot></slot>
                        </div>
                        {this.showFooter && (
                            <div class="modal-footer">
                                <button
                                    class="modal-btn modal-btn-cancel"
                                    onClick={this.handleCancel}>
                                    {this.cancelText}
                                </button>
                                <button
                                    class="modal-btn modal-btn-confirm"
                                    onClick={this.handleConfirm}>
                                    {this.confirmText}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </Host>
        );
    }
}

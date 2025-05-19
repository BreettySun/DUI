import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "d-button",
	styleUrl: "d-button.css",
	shadow: true,
})
export class DButton {
	/**
	 * 按钮类型
	 */
	@Prop() type: "primary" | "secondary" | "danger" | "text" = "primary";

	/**
	 * 按钮尺寸
	 */
	@Prop() size: "small" | "medium" | "large" = "medium";

	/**
	 * 是否禁用
	 */
	@Prop() disabled: boolean = false;

	/**
	 * 是否为圆形按钮
	 */
	@Prop() round: boolean = false;

	/**
	 * 自定义类名
	 */
	@Prop() customClass: string = "";

	/**
	 * 自定义内联样式
	 */
	@Prop() customStyle: { [key: string]: string } = {};

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
		return (
			<Host>
				<button
					class={classes}
					disabled={this.disabled}
					style={this.customStyle}
					part="button">
					<slot></slot>
				</button>
			</Host>
		);
	}
}

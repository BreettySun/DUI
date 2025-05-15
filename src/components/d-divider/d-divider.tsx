import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "d-divider",
	styleUrl: "d-divider.css",
	shadow: true,
})
export class DDivider {
	/**
	 * 分割线方向，可选值：horizontal、vertical
	 */
	@Prop() direction: "horizontal" | "vertical" = "horizontal";

	/**
	 * 分割线颜色
	 */
	@Prop() color: string = "#bbb";

	/**
	 * 分割线粗细
	 */
	@Prop() size: string = "1px";

	/**
	 * 分割线样式，可选值：solid、dashed、dotted
	 */
	@Prop() lineType: "solid" | "highDensityDashed" | "lowDensityDashed" =
		"solid";

	/**
	 * 分割线边距
	 */
	@Prop() margin: string = "24px 0";

	render() {
		return (
			<Host
				style={{
					"--divider-color": this.color,
					"--divider-size": this.size,
					"--divider-margin": this.margin,
				}}
				class={{
					divider: true,
					[`divider-${this.direction}`]: true,
					[`divider-${this.lineType}`]: true,
				}}>
				<slot></slot>
			</Host>
		);
	}
}

import { Component, Host, h, Prop, Element } from "@stencil/core";

@Component({
	tag: "d-breadcrumb",
	styleUrl: "d-breadcrumb.css",
	shadow: true,
})
export class DBreadcrumb {
	@Element() el: HTMLElement;
	@Prop() separator: string = "/";

	render() {
		return (
			<Host>
				<nav aria-label="breadcrumb">
					<ul
						class="breadcrumb"
						itemscope
						itemtype="https://schema.org/BreadcrumbList">
						<slot></slot>
					</ul>
				</nav>
			</Host>
		);
	}
}

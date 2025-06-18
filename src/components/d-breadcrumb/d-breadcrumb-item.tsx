import { Component, Host, h, Prop, Element } from "@stencil/core";

@Component({
	tag: "d-breadcrumb-item",
	styleUrl: "d-breadcrumb.css",
	shadow: true,
})
export class DBreadcrumbItem {
	@Element() el: HTMLElement;
	@Prop() href: string;
	@Prop() position: number;

	get separator(): string {
		const breadcrumb = this.el.closest("d-breadcrumb");
		return breadcrumb ? (breadcrumb as any).separator : "/";
	}

	render() {
		const isFirst = !this.el.previousElementSibling;
		const content = this.el.innerHTML;

		return (
			<Host>
				<li
					class="breadcrumb-item"
					itemprop="itemListElement"
					itemscope
					itemtype="https://schema.org/ListItem">
					{!isFirst && <span class="breadcrumb-slash">{this.separator}</span>}
					{this.href ? (
						<a
							itemprop="item"
							href={this.href}>
							<span
								itemprop="name"
								innerHTML={content}></span>
						</a>
					) : (
						<span
							itemprop="name"
							innerHTML={content}></span>
					)}
					<meta
						itemprop="position"
						content={String(this.position)}
					/>
				</li>
			</Host>
		);
	}
}

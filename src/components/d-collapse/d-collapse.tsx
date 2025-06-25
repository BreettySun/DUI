import {
	Component,
	Host,
	h,
	State,
	Event,
	EventEmitter,
	Prop,
	Watch,
} from "@stencil/core";

export interface CollapseItem {
	id: string;
	title: string;
	content: string;
	disabled?: boolean;
}

@Component({
	tag: "d-collapse",
	styleUrl: "d-collapse.css",
	shadow: true,
})
export class DCollapse {
	@Prop() items: string | CollapseItem[] = [];
	@Prop() accordion: boolean = false; // 手风琴模式，同时只能展开一个
	@Prop() defaultActiveKeys: string | string[] = []; // 默认展开的项

	@State() activeKeys: string[] = [];
	@State() parsedItems: CollapseItem[] = [];

	@Event() change: EventEmitter<string[]>;

	componentWillLoad() {
		this.parseProps();
	}

	@Watch("items")
	@Watch("defaultActiveKeys")
	parseProps() {
		// 解析items属性
		if (typeof this.items === "string") {
			try {
				this.parsedItems = JSON.parse(this.items);
			} catch (e) {
				console.error("Failed to parse items:", e);
				this.parsedItems = [];
			}
		} else {
			this.parsedItems = this.items || [];
		}

		// 解析defaultActiveKeys属性
		if (typeof this.defaultActiveKeys === "string") {
			try {
				this.activeKeys = JSON.parse(this.defaultActiveKeys);
			} catch (e) {
				console.error("Failed to parse defaultActiveKeys:", e);
				this.activeKeys = [];
			}
		} else {
			this.activeKeys = [...(this.defaultActiveKeys || [])];
		}
	}

	private toggleItem = (itemId: string) => {
		if (this.parsedItems.find((item) => item.id === itemId)?.disabled) {
			return;
		}

		const newActiveKeys = [...this.activeKeys];
		const index = newActiveKeys.indexOf(itemId);

		if (index > -1) {
			// 收起项
			newActiveKeys.splice(index, 1);
		} else {
			// 展开项
			if (this.accordion) {
				// 手风琴模式，先清空所有激活项
				newActiveKeys.length = 0;
			}
			newActiveKeys.push(itemId);
		}

		this.activeKeys = newActiveKeys;
		this.change.emit(newActiveKeys);
	};

	private isItemActive = (itemId: string): boolean => {
		return this.activeKeys.includes(itemId);
	};

	render() {
		return (
			<Host>
				<div class="d-collapse">
					{this.parsedItems.map((item) => (
						<div
							class={`d-collapse-item ${
								this.isItemActive(item.id) ? "active" : ""
							} ${item.disabled ? "disabled" : ""}`}>
							<div
								class="d-collapse-header"
								onClick={() => this.toggleItem(item.id)}>
								<span class="d-collapse-title">{item.title}</span>
								<span class="d-collapse-arrow">
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="currentColor">
										<path d="M8 11L3 6h10l-5 5z" />
									</svg>
								</span>
							</div>
							<div class="d-collapse-content">
								<div class="d-collapse-content-inner">{item.content}</div>
							</div>
						</div>
					))}
				</div>
				<slot></slot>
			</Host>
		);
	}
}

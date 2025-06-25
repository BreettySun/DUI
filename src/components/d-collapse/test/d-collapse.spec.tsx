import { newSpecPage } from "@stencil/core/testing";
import { DCollapse } from "../d-collapse";

describe("d-collapse", () => {
	const mockItems = [
		{
			id: "1",
			title: "面板 1",
			content: "这是第一个面板的内容",
		},
		{
			id: "2",
			title: "面板 2",
			content: "这是第二个面板的内容",
		},
		{
			id: "3",
			title: "禁用面板",
			content: "这个面板被禁用了",
			disabled: true,
		},
	];

	it("应该正确渲染折叠面板", async () => {
		const page = await newSpecPage({
			components: [DCollapse],
			html: `<d-collapse items='${JSON.stringify(mockItems)}'></d-collapse>`,
		});

		expect(page.root).toBeTruthy();
		expect(page.root.querySelectorAll(".d-collapse-item")).toHaveLength(3);
	});

	it("应该正确显示面板标题", async () => {
		const page = await newSpecPage({
			components: [DCollapse],
			html: `<d-collapse items='${JSON.stringify(mockItems)}'></d-collapse>`,
		});

		const titles = page.root.querySelectorAll(".d-collapse-title");
		expect(titles[0].textContent).toBe("面板 1");
		expect(titles[1].textContent).toBe("面板 2");
		expect(titles[2].textContent).toBe("禁用面板");
	});

	it("应该正确处理默认展开项", async () => {
		const page = await newSpecPage({
			components: [DCollapse],
			html: `<d-collapse items='${JSON.stringify(
				mockItems
			)}' default-active-keys='["1"]'></d-collapse>`,
		});

		const activeItems = page.root.querySelectorAll(".d-collapse-item.active");
		expect(activeItems).toHaveLength(1);
		expect(activeItems[0].querySelector(".d-collapse-title").textContent).toBe(
			"面板 1"
		);
	});

	it("应该正确处理手风琴模式", async () => {
		const page = await newSpecPage({
			components: [DCollapse],
			html: `<d-collapse items='${JSON.stringify(
				mockItems
			)}' accordion="true"></d-collapse>`,
		});

		const component = page.rootInstance as DCollapse;
		expect(component.accordion).toBe(true);
	});

	it("应该正确处理禁用状态", async () => {
		const page = await newSpecPage({
			components: [DCollapse],
			html: `<d-collapse items='${JSON.stringify(mockItems)}'></d-collapse>`,
		});

		const disabledItem = page.root.querySelector(".d-collapse-item.disabled");
		expect(disabledItem).toBeTruthy();
		expect(disabledItem.querySelector(".d-collapse-title").textContent).toBe(
			"禁用面板"
		);
	});

	it("应该触发change事件", async () => {
		const page = await newSpecPage({
			components: [DCollapse],
			html: `<d-collapse items='${JSON.stringify(mockItems)}'></d-collapse>`,
		});

		const component = page.rootInstance as DCollapse;
		const changeSpy = jest.fn();
		component.change.emit = changeSpy;

		// 模拟点击第一个面板
		const firstHeader = page.root.querySelector(
			".d-collapse-header"
		) as HTMLElement;
		firstHeader.click();

		expect(changeSpy).toHaveBeenCalledWith(["1"]);
	});

	it("应该正确处理面板展开/收起", async () => {
		const page = await newSpecPage({
			components: [DCollapse],
			html: `<d-collapse items='${JSON.stringify(mockItems)}'></d-collapse>`,
		});

		const component = page.rootInstance as DCollapse;
		const firstHeader = page.root.querySelector(
			".d-collapse-header"
		) as HTMLElement;

		// 初始状态应该是收起的
		expect(component.activeKeys).toEqual([]);

		// 点击展开
		firstHeader.click();
		expect(component.activeKeys).toEqual(["1"]);

		// 再次点击收起
		firstHeader.click();
		expect(component.activeKeys).toEqual([]);
	});

	it("手风琴模式下应该只保持一个面板展开", async () => {
		const page = await newSpecPage({
			components: [DCollapse],
			html: `<d-collapse items='${JSON.stringify(
				mockItems
			)}' accordion="true"></d-collapse>`,
		});

		const component = page.rootInstance as DCollapse;
		const headers = page.root.querySelectorAll(".d-collapse-header");

		// 点击第一个面板
		(headers[0] as HTMLElement).click();
		expect(component.activeKeys).toEqual(["1"]);

		// 点击第二个面板，第一个应该收起
		(headers[1] as HTMLElement).click();
		expect(component.activeKeys).toEqual(["2"]);
	});

	it("禁用面板不应该响应点击", async () => {
		const page = await newSpecPage({
			components: [DCollapse],
			html: `<d-collapse items='${JSON.stringify(mockItems)}'></d-collapse>`,
		});

		const component = page.rootInstance as DCollapse;
		const disabledHeader = page.root.querySelector(
			".d-collapse-item.disabled .d-collapse-header"
		) as HTMLElement;

		// 点击禁用面板
		disabledHeader.click();
		expect(component.activeKeys).toEqual([]);
	});
});

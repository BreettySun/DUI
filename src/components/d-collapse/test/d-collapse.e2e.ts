import { newE2EPage } from "@stencil/core/testing";

describe("d-collapse e2e", () => {
	it("应该正确渲染和交互", async () => {
		const page = await newE2EPage({
			html: `
        <d-collapse 
          items='[
            {
              "id": "1",
              "title": "面板 1",
              "content": "这是第一个面板的内容"
            },
            {
              "id": "2",
              "title": "面板 2", 
              "content": "这是第二个面板的内容"
            },
            {
              "id": "3",
              "title": "禁用面板",
              "content": "这个面板被禁用了",
              "disabled": true
            }
          ]'
        ></d-collapse>
      `,
		});

		// 等待组件加载
		await page.waitForChanges();

		// 检查初始状态
		const collapseItems = await page.findAll(".d-collapse-item");
		expect(collapseItems.length).toBe(3);

		// 检查面板标题
		const titles = await page.findAll(".d-collapse-title");
		expect(await titles[0].innerText).toBe("面板 1");
		expect(await titles[1].innerText).toBe("面板 2");
		expect(await titles[2].innerText).toBe("禁用面板");

		// 检查初始状态都是收起的
		const activeItems = await page.findAll(".d-collapse-item.active");
		expect(activeItems.length).toBe(0);

		// 点击第一个面板展开
		const firstHeader = await page.find(
			".d-collapse-item:first-child .d-collapse-header"
		);
		await firstHeader.click();
		await page.waitForChanges();

		// 检查第一个面板是否展开
		const activeItemsAfterClick = await page.findAll(".d-collapse-item.active");
		expect(activeItemsAfterClick.length).toBe(1);

		// 再次点击收起
		await firstHeader.click();
		await page.waitForChanges();

		// 检查是否收起
		const activeItemsAfterSecondClick = await page.findAll(
			".d-collapse-item.active"
		);
		expect(activeItemsAfterSecondClick.length).toBe(0);
	});

	it("手风琴模式应该正常工作", async () => {
		const page = await newE2EPage({
			html: `
        <d-collapse 
          accordion="true"
          items='[
            {
              "id": "1",
              "title": "面板 1",
              "content": "这是第一个面板的内容"
            },
            {
              "id": "2",
              "title": "面板 2",
              "content": "这是第二个面板的内容"
            },
            {
              "id": "3",
              "title": "面板 3",
              "content": "这是第三个面板的内容"
            }
          ]'
        ></d-collapse>
      `,
		});

		await page.waitForChanges();

		const headers = await page.findAll(".d-collapse-header");

		// 点击第一个面板
		await headers[0].click();
		await page.waitForChanges();

		// 检查只有第一个面板展开
		let activeItems = await page.findAll(".d-collapse-item.active");
		expect(activeItems.length).toBe(1);

		// 点击第二个面板
		await headers[1].click();
		await page.waitForChanges();

		// 检查只有第二个面板展开，第一个收起
		activeItems = await page.findAll(".d-collapse-item.active");
		expect(activeItems.length).toBe(1);

		// 检查第二个面板的标题
		const activeTitle = await page.find(
			".d-collapse-item.active .d-collapse-title"
		);
		expect(await activeTitle.innerText).toBe("面板 2");
	});

	it("默认展开项应该正确显示", async () => {
		const page = await newE2EPage({
			html: `
        <d-collapse 
          default-active-keys='["1", "3"]'
          items='[
            {
              "id": "1",
              "title": "面板 1",
              "content": "这个面板默认展开"
            },
            {
              "id": "2",
              "title": "面板 2",
              "content": "这个面板默认收起"
            },
            {
              "id": "3",
              "title": "面板 3",
              "content": "这个面板也默认展开"
            }
          ]'
        ></d-collapse>
      `,
		});

		await page.waitForChanges();

		// 检查默认展开的面板
		const activeItems = await page.findAll(".d-collapse-item.active");
		expect(activeItems.length).toBe(2);

		// 检查展开的面板标题
		const activeTitles = await page.findAll(
			".d-collapse-item.active .d-collapse-title"
		);
		const titleTexts = await Promise.all(
			activeTitles.map((title) => title.innerText)
		);
		expect(titleTexts).toContain("面板 1");
		expect(titleTexts).toContain("面板 3");
	});

	it("禁用面板不应该响应点击", async () => {
		const page = await newE2EPage({
			html: `
        <d-collapse 
          items='[
            {
              "id": "1",
              "title": "正常面板",
              "content": "这个面板可以点击"
            },
            {
              "id": "2",
              "title": "禁用面板",
              "content": "这个面板被禁用了",
              "disabled": true
            }
          ]'
        ></d-collapse>
      `,
		});

		await page.waitForChanges();

		// 检查禁用面板的样式
		const disabledItem = await page.find(".d-collapse-item.disabled");
		expect(disabledItem).toBeTruthy();

		// 点击禁用面板
		const disabledHeader = await page.find(
			".d-collapse-item.disabled .d-collapse-header"
		);
		await disabledHeader.click();
		await page.waitForChanges();

		// 检查禁用面板仍然没有展开
		const activeItems = await page.findAll(".d-collapse-item.active");
		expect(activeItems.length).toBe(0);
	});

	it("应该触发change事件", async () => {
		const page = await newE2EPage({
			html: `
        <d-collapse 
          id="testCollapse"
          items='[
            {
              "id": "1",
              "title": "面板 1",
              "content": "这是第一个面板的内容"
            }
          ]'
        ></d-collapse>
      `,
		});

		await page.waitForChanges();

		// 监听change事件
		const changeSpy = await page.spyOnEvent("change");

		// 点击面板
		const header = await page.find(".d-collapse-header");
		await header.click();
		await page.waitForChanges();

		// 检查事件是否触发
		expect(changeSpy).toHaveReceivedEventTimes(1);
		expect(changeSpy.firstEvent.detail).toEqual(["1"]);

		// 再次点击收起
		await header.click();
		await page.waitForChanges();

		// 检查事件再次触发
		expect(changeSpy).toHaveReceivedEventTimes(2);
		expect(changeSpy.lastEvent.detail).toEqual([]);
	});
});

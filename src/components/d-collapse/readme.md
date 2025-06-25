# D-Collapse 折叠面板组件

一个功能完整的折叠面板组件，支持手风琴模式、禁用状态和自定义样式。

## 基本用法

```html
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
    }
  ]'></d-collapse>
```

## 手风琴模式

```html
<d-collapse
	accordion="true"
	items='[
    {
      "id": "1",
      "title": "面板 1", 
      "content": "手风琴模式下只能展开一个面板"
    },
    {
      "id": "2",
      "title": "面板 2",
      "content": "点击其他面板会自动收起当前展开的面板"
    }
  ]'></d-collapse>
```

## 默认展开项

```html
<d-collapse
	default-active-keys='["1", "3"]'
	items='[
    {
      "id": "1",
      "title": "默认展开的面板 1",
      "content": "这个面板默认是展开的"
    },
    {
      "id": "2",
      "title": "面板 2",
      "content": "这个面板默认是收起的"
    },
    {
      "id": "3", 
      "title": "默认展开的面板 3",
      "content": "这个面板也是默认展开的"
    }
  ]'></d-collapse>
```

## 禁用状态

```html
<d-collapse
	items='[
    {
      "id": "1",
      "title": "正常面板",
      "content": "这个面板可以正常点击"
    },
    {
      "id": "2",
      "title": "禁用面板",
      "content": "这个面板被禁用了",
      "disabled": true
    }
  ]'></d-collapse>
```

## 事件监听

```html
<d-collapse
	id="myCollapse"
	items="[...]"></d-collapse>

<script>
	document.getElementById("myCollapse").addEventListener("change", (event) => {
		console.log("当前展开的面板:", event.detail);
	});
</script>
```

## 属性

| 属性名              | 类型             | 默认值  | 说明                     |
| ------------------- | ---------------- | ------- | ------------------------ |
| `items`             | `CollapseItem[]` | `[]`    | 折叠面板项数组           |
| `accordion`         | `boolean`        | `false` | 是否开启手风琴模式       |
| `defaultActiveKeys` | `string[]`       | `[]`    | 默认展开的面板项 ID 数组 |

## CollapseItem 接口

```typescript
interface CollapseItem {
	id: string; // 唯一标识符
	title: string; // 面板标题
	content: string; // 面板内容
	disabled?: boolean; // 是否禁用（可选）
}
```

## 事件

| 事件名   | 说明                        | 回调参数                            |
| -------- | --------------------------- | ----------------------------------- |
| `change` | 面板展开/收起状态改变时触发 | `string[]` - 当前展开的面板 ID 数组 |

## 样式特性

- 响应式设计，支持移动端
- 平滑的展开/收起动画
- 支持深色主题
- 悬停效果和状态反馈
- 可访问性支持

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

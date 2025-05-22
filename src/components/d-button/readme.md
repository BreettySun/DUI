# d-button

按钮组件，用于触发操作或事件。支持多种类型、尺寸和状态。

## 基本用法

```html
<d-button>默认按钮</d-button>
```

## 按钮类型

通过 `type` 属性设置按钮类型，支持 `primary`、`secondary`、`danger` 和 `text` 四种类型。

```html
<d-button type="primary">主要按钮</d-button>
<d-button type="secondary">次要按钮</d-button>
<d-button type="danger">危险按钮</d-button>
<d-button type="text">文本按钮</d-button>
```

## 按钮尺寸

通过 `size` 属性设置按钮尺寸，支持 `small`、`medium` 和 `large` 三种尺寸。

```html
<d-button size="small">小按钮</d-button>
<d-button size="medium">中按钮</d-button>
<d-button size="large">大按钮</d-button>
```

## 禁用状态

设置 `disabled` 属性禁用按钮。

```html
<d-button disabled>禁用按钮</d-button>
<d-button
    type="danger"
    disabled
    >禁用危险按钮</d-button
>
```

## 圆形按钮

设置 `round` 属性创建圆形按钮，常用于图标按钮。

```html
<d-button round>
    <d-icon
        name="heart"
        color="#fff"
        size="16px"></d-icon>
</d-button>

<d-button
    round
    type="secondary">
    <d-icon
        name="star"
        color="#333"
        size="16px"></d-icon>
</d-button>
```

## 自定义样式

### 使用 `custom-class` 和 `custom-style` 属性

```html
<d-button
    custom-class="my-custom-button"
    custom-style='{"backgroundColor": "#8e44ad", "color": "white"}'>
    自定义样式按钮
</d-button>
```

```css
.my-custom-button {
    border-radius: 8px;
    text-transform: uppercase;
}
```

### 使用 Shadow Parts

按钮组件暴露了 `button` part，可以用于自定义样式。

```html
<d-button>自定义 Part 样式按钮</d-button>
```

```css
d-button::part(button) {
    background: linear-gradient(45deg, #ff9a9e, #fad0c4);
    color: #333;
    font-weight: bold;
    border-radius: 8px;
}

d-button:hover::part(button) {
    background: linear-gradient(45deg, #fad0c4, #ff9a9e);
}
```

## 与图标组合使用

按钮可以与图标组件结合使用，创建带图标的按钮。

```html
<!-- 带前置图标的按钮 -->
<d-button>
    <d-icon
        name="search"
        color="#fff"
        size="16px"></d-icon>
    搜索
</d-button>

<!-- 带后置图标的按钮 -->
<d-button>
    下一步
    <d-icon
        name="arrow-forward"
        color="#fff"
        size="16px"></d-icon>
</d-button>

<!-- 仅图标按钮 -->
<d-button round>
    <d-icon
        name="heart"
        color="#fff"
        size="16px"></d-icon>
</d-button>
```

## 最佳实践

1. **选择合适的按钮类型**：使用 `primary` 类型表示主要操作，`secondary` 表示次要操作，`danger` 表示危险操作，`text` 表示轻量级操作。

2. **保持一致的尺寸**：在同一界面中保持按钮尺寸的一致性，除非有特殊需求。

3. **提供清晰的操作提示**：按钮文本应简洁明了，清晰表达操作意图。

4. **使用图标增强可识别性**：适当使用图标可以增强按钮的可识别性和美观度。

5. **考虑按钮状态**：为不同状态（如禁用、加载中）提供视觉反馈。

## 完整示例

```html
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
    <!-- 基本按钮类型 -->
    <d-button type="primary">主要按钮</d-button>
    <d-button type="secondary">次要按钮</d-button>
    <d-button type="danger">危险按钮</d-button>
    <d-button type="text">文本按钮</d-button>

    <!-- 不同尺寸 -->
    <d-button size="small">小按钮</d-button>
    <d-button size="medium">中按钮</d-button>
    <d-button size="large">大按钮</d-button>

    <!-- 禁用状态 -->
    <d-button disabled>禁用按钮</d-button>

    <!-- 圆形按钮 -->
    <d-button round>
        <d-icon
            name="heart"
            color="#fff"
            size="16px"></d-icon>
    </d-button>

    <!-- 自定义样式 -->
    <d-button custom-class="gradient-button"> 渐变按钮 </d-button>
</div>

<style>
    .gradient-button::part(button) {
        background: linear-gradient(45deg, #2196f3, #4caf50);
        color: white;
        font-weight: bold;
    }
</style>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                                             | Default     |
| ------------- | -------------- | ----------- | ------------------------------------------------ | ----------- |
| `customClass` | `custom-class` | 自定义类名       | `string`                                         | `""`        |
| `customStyle` | `custom-style` | 自定义内联样式     | `{ [key: string]: string; }`                     | `{}`        |
| `disabled`    | `disabled`     | 是否禁用        | `boolean`                                        | `false`     |
| `round`       | `round`        | 是否为圆形按钮     | `boolean`                                        | `false`     |
| `size`        | `size`         | 按钮尺寸        | `"large" \| "medium" \| "small"`                 | `"medium"`  |
| `type`        | `type`         | 按钮类型        | `"danger" \| "primary" \| "secondary" \| "text"` | `"primary"` |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"button"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

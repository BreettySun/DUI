# d-carousel

轮播图组件，用于循环展示图片、卡片或其他内容。支持自动播放、指示器位置自定义和导航控制。

## 基本用法

```html
<d-carousel>
    <div>内容 1</div>
    <div>内容 2</div>
    <div>内容 3</div>
</d-carousel>
```

## 自动播放

设置 `autoplay` 属性启用自动播放，可通过 `delay` 属性设置自动播放间隔时间（毫秒）。

```html
<d-carousel
    autoplay
    delay="5000">
    <div>内容 1</div>
    <div>内容 2</div>
    <div>内容 3</div>
</d-carousel>
```

## 指示器位置

通过 `indicator-position` 属性设置指示器位置，支持 `top`、`bottom`、`left` 和 `right` 四个方向。

```html
<!-- 顶部指示器 -->
<d-carousel indicator-position="top">
    <!-- 轮播内容 -->
</d-carousel>

<!-- 底部指示器（默认） -->
<d-carousel indicator-position="bottom">
    <!-- 轮播内容 -->
</d-carousel>

<!-- 左侧指示器 -->
<d-carousel indicator-position="left">
    <!-- 轮播内容 -->
</d-carousel>

<!-- 右侧指示器 -->
<d-carousel indicator-position="right">
    <!-- 轮播内容 -->
</d-carousel>
```

## 图片轮播

轮播图常用于展示图片，可以结合 `<img>` 标签或背景图片使用。

```html
<d-carousel
    autoplay
    indicator-position="bottom">
    <img
        src="/path/to/image1.jpg"
        alt="图片1" />
    <img
        src="/path/to/image2.jpg"
        alt="图片2" />
    <img
        src="/path/to/image3.jpg"
        alt="图片3" />
</d-carousel>
```

## 链接轮播

可以将轮播项包装在链接中，实现点击跳转功能。

```html
<d-carousel autoplay>
    <a href="https://example.com/page1">
        <img
            src="/path/to/image1.jpg"
            alt="图片1" />
    </a>
    <a href="https://example.com/page2">
        <img
            src="/path/to/image2.jpg"
            alt="图片2" />
    </a>
    <a href="https://example.com/page3">
        <img
            src="/path/to/image3.jpg"
            alt="图片3" />
    </a>
</d-carousel>
```

## 卡片轮播

轮播图不仅限于图片，还可以用于展示卡片、文本等内容。

```html
<d-carousel autoplay>
    <div class="card">
        <h3>卡片标题 1</h3>
        <p>卡片内容描述...</p>
    </div>
    <div class="card">
        <h3>卡片标题 2</h3>
        <p>卡片内容描述...</p>
    </div>
    <div class="card">
        <h3>卡片标题 3</h3>
        <p>卡片内容描述...</p>
    </div>
</d-carousel>

<style>
    .card {
        height: 100%;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
</style>
```

## 自定义样式

### 使用 CSS 变量

轮播图组件提供了多个 CSS 变量，可以用于自定义样式。

```css
d-carousel {
    --indicator-size: 12px;
    --indicator-color: rgba(255, 255, 255, 0.5);
    --indicator-active-color: white;
    --indicator-spacing: 8px;
    --arrow-background: rgba(0, 0, 0, 0.3);
    --arrow-hover-background: rgba(0, 0, 0, 0.6);
    --arrow-color: white;
    --arrow-size: 40px;
}
```

### 使用 Shadow Parts

轮播图组件暴露了多个 Shadow Parts，可以用于更精细的样式自定义。

```css
/* 轮播容器样式 */
d-carousel::part(carousel) {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 指示器容器样式 */
d-carousel::part(indicators) {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 16px;
}

/* 指示器点样式 */
d-carousel::part(indicator) {
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.5);
}

/* 激活的指示器点样式 */
d-carousel::part(indicator-active) {
    background-color: white;
    transform: scale(1.2);
}

/* 箭头按钮样式 */
d-carousel::part(arrow) {
    background-color: #1890ff;
    border-radius: 50%;
}

d-carousel::part(arrow):hover {
    background-color: #40a9ff;
}
```

## JavaScript 控制

轮播图组件提供了多个方法，可以通过 JavaScript 控制轮播行为。

```javascript
// 获取轮播图实例
const carousel = document.querySelector("d-carousel");

// 切换到下一张
carousel.nextSlide();

// 切换到上一张
carousel.prevSlide();

// 切换到指定索引的幻灯片
carousel.goToSlide(2); // 切换到第三张幻灯片（索引从0开始）
```

## 最佳实践

1. **设置合适的尺寸**：为轮播图设置明确的宽度和高度，确保内容正确显示。

2. **优化图片**：使用适当大小和格式的图片，避免加载过大的图片影响性能。

3. **提供替代文本**：为图片添加 `alt` 属性，提高可访问性。

4. **考虑移动设备**：确保轮播图在移动设备上有良好的表现，可以使用响应式设计。

5. **适当的自动播放速度**：如果启用自动播放，设置合适的播放间隔，通常在 3-5 秒之间。

6. **提供用户控制**：允许用户通过指示器或箭头控制轮播，提高用户体验。

## 完整示例

```html
<d-carousel
    autoplay
    delay="3000"
    indicator-position="bottom"
    style="width: 100%; max-width: 800px; height: 400px; margin: 0 auto;">
    <a
        href="https://example.com/page1"
        target="_blank">
        <img
            src="https://picsum.photos/id/1018/800/400"
            alt="山脉风景"
            style="width: 100%; height: 100%; object-fit: cover;" />
    </a>

    <a
        href="https://example.com/page2"
        target="_blank">
        <img
            src="https://picsum.photos/id/1015/800/400"
            alt="河流风景"
            style="width: 100%; height: 100%; object-fit: cover;" />
    </a>

    <a
        href="https://example.com/page3"
        target="_blank">
        <img
            src="https://picsum.photos/id/1019/800/400"
            alt="森林风景"
            style="width: 100%; height: 100%; object-fit: cover;" />
    </a>
</d-carousel>

<style>
    d-carousel {
        --indicator-size: 12px;
        --indicator-active-color: #1890ff;
        --arrow-background: rgba(0, 0, 0, 0.3);
        --arrow-hover-background: rgba(0, 0, 0, 0.6);
    }

    d-carousel::part(carousel) {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
</style>
```

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                     | Type                                     | Default    |
| ------------------- | -------------------- | ------------------------------- | ---------------------------------------- | ---------- |
| `autoplay`          | `autoplay`           | 是否自动播放                          | `boolean`                                | `false`    |
| `delay`             | `delay`              | 自动播放间隔时间（毫秒）                    | `number`                                 | `3000`     |
| `indicatorPosition` | `indicator-position` | 指示器位置，可选值：top、bottom、left、right | `"bottom" \| "left" \| "right" \| "top"` | `"bottom"` |


## Methods

### `goToSlide(index: number) => Promise<void>`

手动切换到指定索引的幻灯片

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `index` | `number` | 幻灯片索引       |

#### Returns

Type: `Promise<void>`



### `nextSlide() => Promise<void>`

手动切换到下一张幻灯片

#### Returns

Type: `Promise<void>`



### `prevSlide() => Promise<void>`

手动切换到上一张幻灯片

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description   |
| ---- | ------------- |
|      | 默认插槽，用于放置轮播内容 |


## Shadow Parts

| Part           | Description |
| -------------- | ----------- |
| `"carousel"`   |             |
| `"indicators"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

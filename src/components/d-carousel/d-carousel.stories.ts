export default {
    title: "Components/DCarousel",
    tags: ["autodocs"],
    argTypes: {
        autoplay: {
            control: "boolean",
            description: "是否自动播放轮播图",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        delay: {
            control: { type: "number", min: 1000, max: 10000, step: 500 },
            description: "自动播放的间隔时间（毫秒）",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "3000" },
            },
        },
        indicatorPosition: {
            control: { type: "select" },
            options: ["top", "bottom", "left", "right"],
            description: "指示器的位置",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "bottom" },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
轮播图组件，用于循环展示图片、卡片或其他内容。支持自动播放、指示器位置自定义和导航控制。

## 特性

- 支持自动播放和手动控制
- 可自定义指示器位置（上、下、左、右）
- 提供丰富的样式自定义选项
- 支持通过 JavaScript API 控制轮播行为
        `,
            },
        },
    },
};

// 基本轮播图示例
const Template = (args) => {
    return `
    <d-carousel
      autoplay=${args.autoplay}
      delay=${args.delay}
      indicator-position=${args.indicatorPosition}
      style="width: 100%; height: 300px; max-width: 800px; margin: 0 auto;"
    >
      <div style="height: 100%; background-color: #1890ff; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
        幻灯片 1
      </div>
      <div style="height: 100%; background-color: #52c41a; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
        幻灯片 2
      </div>
      <div style="height: 100%; background-color: #fa8c16; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
        幻灯片 3
      </div>
    </d-carousel>
  `;
};

export const Basic = Template.bind({});
Basic.args = {
    autoplay: false,
    delay: 3000,
    indicatorPosition: "bottom",
};
Basic.parameters = {
    docs: {
        description: {
            story: "基本的轮播图示例，包含三个不同颜色的幻灯片。",
        },
    },
};

// 自动播放示例
export const Autoplay = Template.bind({});
Autoplay.args = {
    autoplay: true,
    delay: 3000,
    indicatorPosition: "bottom",
};
Autoplay.parameters = {
    docs: {
        description: {
            story: "启用自动播放的轮播图，每3秒自动切换到下一张幻灯片。",
        },
    },
};

// 不同指示器位置示例
export const IndicatorPositions = (args) => {
    return `
    <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 40px;">
      <h3>顶部指示器</h3>
      <d-carousel
        autoplay=${args.autoplay}
        delay=${args.delay}
        indicator-position="top"
        style="width: 100%; height: 200px; max-width: 800px; margin: 0 auto;"
      >
        <div style="height: 100%; background-color: #1890ff; color: white; display: flex; justify-content: center; align-items: center;">顶部指示器 - 幻灯片 1</div>
        <div style="height: 100%; background-color: #52c41a; color: white; display: flex; justify-content: center; align-items: center;">顶部指示器 - 幻灯片 2</div>
        <div style="height: 100%; background-color: #fa8c16; color: white; display: flex; justify-content: center; align-items: center;">顶部指示器 - 幻灯片 3</div>
      </d-carousel>
      
      <h3>底部指示器（默认）</h3>
      <d-carousel
        autoplay=${args.autoplay}
        delay=${args.delay}
        indicator-position="bottom"
        style="width: 100%; height: 200px; max-width: 800px; margin: 0 auto;"
      >
        <div style="height: 100%; background-color: #1890ff; color: white; display: flex; justify-content: center; align-items: center;">底部指示器 - 幻灯片 1</div>
        <div style="height: 100%; background-color: #52c41a; color: white; display: flex; justify-content: center; align-items: center;">底部指示器 - 幻灯片 2</div>
        <div style="height: 100%; background-color: #fa8c16; color: white; display: flex; justify-content: center; align-items: center;">底部指示器 - 幻灯片 3</div>
      </d-carousel>
      
      <h3>左侧指示器</h3>
      <d-carousel
        autoplay=${args.autoplay}
        delay=${args.delay}
        indicator-position="left"
        style="width: 100%; height: 200px; max-width: 800px; margin: 0 auto;"
      >
        <div style="height: 100%; background-color: #1890ff; color: white; display: flex; justify-content: center; align-items: center;">左侧指示器 - 幻灯片 1</div>
        <div style="height: 100%; background-color: #52c41a; color: white; display: flex; justify-content: center; align-items: center;">左侧指示器 - 幻灯片 2</div>
        <div style="height: 100%; background-color: #fa8c16; color: white; display: flex; justify-content: center; align-items: center;">左侧指示器 - 幻灯片 3</div>
      </d-carousel>
      
      <h3>右侧指示器</h3>
      <d-carousel
        autoplay=${args.autoplay}
        delay=${args.delay}
        indicator-position="right"
        style="width: 100%; height: 200px; max-width: 800px; margin: 0 auto;"
      >
        <div style="height: 100%; background-color: #1890ff; color: white; display: flex; justify-content: center; align-items: center;">右侧指示器 - 幻灯片 1</div>
        <div style="height: 100%; background-color: #52c41a; color: white; display: flex; justify-content: center; align-items: center;">右侧指示器 - 幻灯片 2</div>
        <div style="height: 100%; background-color: #fa8c16; color: white; display: flex; justify-content: center; align-items: center;">右侧指示器 - 幻灯片 3</div>
      </d-carousel>
    </div>
  `;
};
IndicatorPositions.args = {
    autoplay: false,
    delay: 3000,
};
IndicatorPositions.parameters = {
    docs: {
        description: {
            story: "展示不同指示器位置的轮播图示例，包括顶部、底部、左侧和右侧。",
        },
    },
};

// 图片轮播示例
export const ImageCarousel = (args) => {
    return `
    <d-carousel
      autoplay=${args.autoplay}
      delay=${args.delay}
      indicator-position=${args.indicatorPosition}
      style="width: 100%; height: 400px; max-width: 800px; margin: 0 auto;"
    >
      <img 
        src="https://picsum.photos/id/1018/800/400" 
        alt="山脉风景" 
        style="width: 100%; height: 100%; object-fit: cover;"
      />
      <img 
        src="https://picsum.photos/id/1015/800/400" 
        alt="河流风景" 
        style="width: 100%; height: 100%; object-fit: cover;"
      />
      <img 
        src="https://picsum.photos/id/1019/800/400" 
        alt="森林风景" 
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    </d-carousel>
  `;
};
ImageCarousel.args = {
    autoplay: true,
    delay: 3000,
    indicatorPosition: "bottom",
};
ImageCarousel.parameters = {
    docs: {
        description: {
            story: "图片轮播示例，展示如何在轮播图中使用图片。",
        },
    },
};

// 卡片轮播示例
export const CardCarousel = (args) => {
    return `
    <style>
      .card {
        height: 100%;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .card h3 {
        margin-top: 0;
        color: #333;
      }
      .card p {
        color: #666;
      }
    </style>
    <d-carousel
      autoplay=${args.autoplay}
      delay=${args.delay}
      indicator-position=${args.indicatorPosition}
      style="width: 100%; height: 200px; max-width: 800px; margin: 0 auto;"
    >
      <div class="card">
        <h3>卡片标题 1</h3>
        <p>这是第一张卡片的内容描述。您可以在这里放置任何文本或HTML内容。</p>
      </div>
      <div class="card">
        <h3>卡片标题 2</h3>
        <p>这是第二张卡片的内容描述。轮播图不仅可以展示图片，还可以展示卡片等复杂内容。</p>
      </div>
      <div class="card">
        <h3>卡片标题 3</h3>
        <p>这是第三张卡片的内容描述。您可以根据需要自定义卡片的样式和内容。</p>
      </div>
    </d-carousel>
  `;
};
CardCarousel.args = {
    autoplay: true,
    delay: 4000,
    indicatorPosition: "bottom",
};
CardCarousel.parameters = {
    docs: {
        description: {
            story: "卡片轮播示例，展示如何在轮播图中使用卡片组件。",
        },
    },
};

// 自定义样式示例
export const CustomStyling = (args) => {
    return `
    <style>
      .custom-carousel {
        --indicator-size: 12px;
        --indicator-color: rgba(0, 0, 0, 0.3);
        --indicator-active-color: #ff4d4f;
        --indicator-spacing: 10px;
        --arrow-background: rgba(0, 0, 0, 0.2);
        --arrow-hover-background: rgba(0, 0, 0, 0.5);
        --arrow-color: white;
        --arrow-size: 36px;
      }
      
      .custom-carousel::part(carousel) {
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      }
      
      .custom-carousel::part(indicators) {
        background-color: rgba(255, 255, 255, 0.7);
        padding: 8px 12px;
        border-radius: 20px;
      }
      
      .custom-carousel::part(indicator) {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        transition: all 0.3s ease;
      }
      
      .custom-carousel::part(indicator-active) {
        width: 24px;
      }
      
      .custom-carousel::part(arrow) {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
    <d-carousel
      class="custom-carousel"
      autoplay=${args.autoplay}
      delay=${args.delay}
      indicator-position=${args.indicatorPosition}
      style="width: 100%; height: 300px; max-width: 800px; margin: 0 auto;"
    >
      <div style="height: 100%; background-color: #ff7875; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
        自定义样式 - 幻灯片 1
      </div>
      <div style="height: 100%; background-color: #95de64; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
        自定义样式 - 幻灯片 2
      </div>
      <div style="height: 100%; background-color: #69c0ff; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
        自定义样式 - 幻灯片 3
      </div>
    </d-carousel>
  `;
};
CustomStyling.args = {
    autoplay: true,
    delay: 3000,
    indicatorPosition: "bottom",
};
CustomStyling.parameters = {
    docs: {
        description: {
            story: "自定义样式示例，展示如何使用 CSS 变量和 Shadow Parts 自定义轮播图的外观。",
        },
    },
};

// JavaScript 控制示例
export const JavaScriptControl = (args) => {
    return `
    <div style="width: 100%; max-width: 800px; margin: 0 auto;">
      <d-carousel
        id="js-control-carousel"
        autoplay=${args.autoplay}
        delay=${args.delay}
        indicator-position=${args.indicatorPosition}
        style="width: 100%; height: 300px; margin-bottom: 20px;"
      >
        <div style="height: 100%; background-color: #1890ff; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
          幻灯片 1
        </div>
        <div style="height: 100%; background-color: #52c41a; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
          幻灯片 2
        </div>
        <div style="height: 100%; background-color: #fa8c16; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
          幻灯片 3
        </div>
      </d-carousel>
      
      <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
        <d-button 
          type="primary" 
          onClick="document.getElementById('js-control-carousel').prevSlide()">
          上一张
        </d-button>
        <d-button 
          type="primary" 
          onClick="document.getElementById('js-control-carousel').nextSlide()">
          下一张
        </d-button>
        <d-button 
          type="secondary" 
          onClick="document.getElementById('js-control-carousel').goToSlide(0)">
          第一张
        </d-button>
        <d-button 
          type="secondary" 
          onClick="document.getElementById('js-control-carousel').goToSlide(1)">
          第二张
        </d-button>
        <d-button 
          type="secondary" 
          onClick="document.getElementById('js-control-carousel').goToSlide(2)">
          第三张
        </d-button>
      </div>
    </div>
  `;
};
JavaScriptControl.args = {
    autoplay: false,
    delay: 3000,
    indicatorPosition: "bottom",
};
JavaScriptControl.parameters = {
    docs: {
        description: {
            story: "JavaScript 控制示例，展示如何使用 JavaScript API 控制轮播图的行为。",
        },
    },
};

// 响应式轮播示例
export const ResponsiveCarousel = (args) => {
    return `
    <style>
      .responsive-carousel {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
        max-width: 800px;
        margin: 0 auto;
      }
      
      @media (max-width: 768px) {
        .responsive-carousel {
          aspect-ratio: 4/3;
        }
      }
    </style>
    <d-carousel
      class="responsive-carousel"
      autoplay=${args.autoplay}
      delay=${args.delay}
      indicator-position=${args.indicatorPosition}
    >
      <div style="height: 100%; background-color: #1890ff; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
        响应式轮播图 - 幻灯片 1
      </div>
      <div style="height: 100%; background-color: #52c41a; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px;">
        响应式轮播图 - 幻灯片 2
      </div>
    </d-carousel>
  `;
};
ResponsiveCarousel.args = {
    autoplay: true,
    delay: 3000,
    indicatorPosition: "bottom",
};
ResponsiveCarousel.parameters = {
    docs: {
        description: {
            story: "响应式轮播示例，展示如何在不同设备上自适应轮播图的尺寸。",
        },
    },
};

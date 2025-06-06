/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DButton {
        /**
          * 自定义类名
         */
        "customClass": string;
        /**
          * 自定义内联样式
         */
        "customStyle": { [key: string]: string };
        /**
          * 是否禁用
         */
        "disabled": boolean;
        /**
          * 是否为圆形按钮
         */
        "round": boolean;
        /**
          * 按钮尺寸
         */
        "size": "small" | "medium" | "large";
        /**
          * 按钮类型
         */
        "type": "primary" | "secondary" | "danger" | "text";
    }
    interface DCarousel {
        /**
          * 是否自动播放
         */
        "autoplay": boolean;
        /**
          * 自动播放间隔时间（毫秒）
         */
        "delay": number;
        /**
          * 手动切换到指定索引的幻灯片
          * @param index 幻灯片索引
         */
        "goToSlide": (index: number) => Promise<void>;
        /**
          * 指示器位置，可选值：top、bottom、left、right
         */
        "indicatorPosition": "top" | "bottom" | "left" | "right";
        /**
          * 手动切换到下一张幻灯片
         */
        "nextSlide": () => Promise<void>;
        /**
          * 手动切换到上一张幻灯片
         */
        "prevSlide": () => Promise<void>;
    }
    interface DDivider {
        /**
          * 分割线颜色
         */
        "color": string;
        /**
          * 分割线方向，可选值：horizontal、vertical
         */
        "direction": "horizontal" | "vertical";
        /**
          * 分割线样式，可选值：solid、dashed、dotted
         */
        "lineType": "solid" | "highDensityDashed" | "lowDensityDashed";
        /**
          * 分割线边距
         */
        "margin": string;
        /**
          * 分割线粗细
         */
        "size": string;
    }
    interface DDrawer {
        "close": () => Promise<void>;
        "header": string;
        "maskClosable": boolean;
        "open": () => Promise<void>;
        "placement": string;
        "showHeader": boolean;
        "visible": Boolean;
        "width": string;
    }
    interface DIcon {
        /**
          * 图标颜色
         */
        "color": string;
        /**
          * 图标名称
         */
        "name": string;
        /**
          * 旋转角度（度数）
         */
        "rotate": number;
        /**
          * 图标大小
         */
        "size": string;
        /**
          * 是否启用旋转动画
         */
        "spin": boolean;
    }
    interface DMessage {
    }
    interface DModal {
        "cancel": () => Promise<void>;
        "cancelText": string;
        "close": () => Promise<void>;
        "confirm": () => Promise<void>;
        "confirmText": string;
        "header": string;
        "maskClosable": boolean;
        "open": () => Promise<void>;
        "show": boolean;
        "showFooter": boolean;
        "showHeader": boolean;
        "width": string;
    }
}
export interface DDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDDrawerElement;
}
export interface DIconCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDIconElement;
}
export interface DModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDModalElement;
}
declare global {
    interface HTMLDButtonElement extends Components.DButton, HTMLStencilElement {
    }
    var HTMLDButtonElement: {
        prototype: HTMLDButtonElement;
        new (): HTMLDButtonElement;
    };
    interface HTMLDCarouselElement extends Components.DCarousel, HTMLStencilElement {
    }
    var HTMLDCarouselElement: {
        prototype: HTMLDCarouselElement;
        new (): HTMLDCarouselElement;
    };
    interface HTMLDDividerElement extends Components.DDivider, HTMLStencilElement {
    }
    var HTMLDDividerElement: {
        prototype: HTMLDDividerElement;
        new (): HTMLDDividerElement;
    };
    interface HTMLDDrawerElementEventMap {
        "closed": any;
    }
    interface HTMLDDrawerElement extends Components.DDrawer, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDDrawerElementEventMap>(type: K, listener: (this: HTMLDDrawerElement, ev: DDrawerCustomEvent<HTMLDDrawerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDDrawerElementEventMap>(type: K, listener: (this: HTMLDDrawerElement, ev: DDrawerCustomEvent<HTMLDDrawerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDDrawerElement: {
        prototype: HTMLDDrawerElement;
        new (): HTMLDDrawerElement;
    };
    interface HTMLDIconElementEventMap {
        "iconClick": MouseEvent;
    }
    interface HTMLDIconElement extends Components.DIcon, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDIconElementEventMap>(type: K, listener: (this: HTMLDIconElement, ev: DIconCustomEvent<HTMLDIconElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDIconElementEventMap>(type: K, listener: (this: HTMLDIconElement, ev: DIconCustomEvent<HTMLDIconElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDIconElement: {
        prototype: HTMLDIconElement;
        new (): HTMLDIconElement;
    };
    interface HTMLDMessageElement extends Components.DMessage, HTMLStencilElement {
    }
    var HTMLDMessageElement: {
        prototype: HTMLDMessageElement;
        new (): HTMLDMessageElement;
    };
    interface HTMLDModalElementEventMap {
        "onClose": any;
        "onConfirm": any;
        "onCancel": any;
    }
    interface HTMLDModalElement extends Components.DModal, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDModalElementEventMap>(type: K, listener: (this: HTMLDModalElement, ev: DModalCustomEvent<HTMLDModalElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDModalElementEventMap>(type: K, listener: (this: HTMLDModalElement, ev: DModalCustomEvent<HTMLDModalElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDModalElement: {
        prototype: HTMLDModalElement;
        new (): HTMLDModalElement;
    };
    interface HTMLElementTagNameMap {
        "d-button": HTMLDButtonElement;
        "d-carousel": HTMLDCarouselElement;
        "d-divider": HTMLDDividerElement;
        "d-drawer": HTMLDDrawerElement;
        "d-icon": HTMLDIconElement;
        "d-message": HTMLDMessageElement;
        "d-modal": HTMLDModalElement;
    }
}
declare namespace LocalJSX {
    interface DButton {
        /**
          * 自定义类名
         */
        "customClass"?: string;
        /**
          * 自定义内联样式
         */
        "customStyle"?: { [key: string]: string };
        /**
          * 是否禁用
         */
        "disabled"?: boolean;
        /**
          * 是否为圆形按钮
         */
        "round"?: boolean;
        /**
          * 按钮尺寸
         */
        "size"?: "small" | "medium" | "large";
        /**
          * 按钮类型
         */
        "type"?: "primary" | "secondary" | "danger" | "text";
    }
    interface DCarousel {
        /**
          * 是否自动播放
         */
        "autoplay"?: boolean;
        /**
          * 自动播放间隔时间（毫秒）
         */
        "delay"?: number;
        /**
          * 指示器位置，可选值：top、bottom、left、right
         */
        "indicatorPosition"?: "top" | "bottom" | "left" | "right";
    }
    interface DDivider {
        /**
          * 分割线颜色
         */
        "color"?: string;
        /**
          * 分割线方向，可选值：horizontal、vertical
         */
        "direction"?: "horizontal" | "vertical";
        /**
          * 分割线样式，可选值：solid、dashed、dotted
         */
        "lineType"?: "solid" | "highDensityDashed" | "lowDensityDashed";
        /**
          * 分割线边距
         */
        "margin"?: string;
        /**
          * 分割线粗细
         */
        "size"?: string;
    }
    interface DDrawer {
        "header"?: string;
        "maskClosable"?: boolean;
        "onClosed"?: (event: DDrawerCustomEvent<any>) => void;
        "placement"?: string;
        "showHeader"?: boolean;
        "visible"?: Boolean;
        "width"?: string;
    }
    interface DIcon {
        /**
          * 图标颜色
         */
        "color"?: string;
        /**
          * 图标名称
         */
        "name"?: string;
        /**
          * 点击事件
         */
        "onIconClick"?: (event: DIconCustomEvent<MouseEvent>) => void;
        /**
          * 旋转角度（度数）
         */
        "rotate"?: number;
        /**
          * 图标大小
         */
        "size"?: string;
        /**
          * 是否启用旋转动画
         */
        "spin"?: boolean;
    }
    interface DMessage {
    }
    interface DModal {
        "cancelText"?: string;
        "confirmText"?: string;
        "header"?: string;
        "maskClosable"?: boolean;
        "onOnCancel"?: (event: DModalCustomEvent<any>) => void;
        "onOnClose"?: (event: DModalCustomEvent<any>) => void;
        "onOnConfirm"?: (event: DModalCustomEvent<any>) => void;
        "show"?: boolean;
        "showFooter"?: boolean;
        "showHeader"?: boolean;
        "width"?: string;
    }
    interface IntrinsicElements {
        "d-button": DButton;
        "d-carousel": DCarousel;
        "d-divider": DDivider;
        "d-drawer": DDrawer;
        "d-icon": DIcon;
        "d-message": DMessage;
        "d-modal": DModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "d-button": LocalJSX.DButton & JSXBase.HTMLAttributes<HTMLDButtonElement>;
            "d-carousel": LocalJSX.DCarousel & JSXBase.HTMLAttributes<HTMLDCarouselElement>;
            "d-divider": LocalJSX.DDivider & JSXBase.HTMLAttributes<HTMLDDividerElement>;
            "d-drawer": LocalJSX.DDrawer & JSXBase.HTMLAttributes<HTMLDDrawerElement>;
            "d-icon": LocalJSX.DIcon & JSXBase.HTMLAttributes<HTMLDIconElement>;
            "d-message": LocalJSX.DMessage & JSXBase.HTMLAttributes<HTMLDMessageElement>;
            "d-modal": LocalJSX.DModal & JSXBase.HTMLAttributes<HTMLDModalElement>;
        }
    }
}

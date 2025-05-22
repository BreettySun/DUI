export default {
    title: "Components/DButton",
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["primary", "secondary", "danger", "text"],
            description: "按钮类型",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "primary" },
            },
        },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
            description: "按钮尺寸",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "medium" },
            },
        },
        disabled: {
            control: "boolean",
            description: "是否禁用",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false },
            },
        },
        round: {
            control: "boolean",
            description: "是否为圆形按钮",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false },
            },
        },
        customClass: {
            control: "text",
            description: "自定义类名",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "" },
            },
        },
        customStyle: {
            control: "object",
            description: "自定义内联样式",
            table: {
                type: { summary: "object" },
                defaultValue: { summary: "{}" },
            },
        },
    },
};

const Template = (args) => `
    <d-button 
        type="${args.type}" 
        size="${args.size}" 
        ${args.disabled ? "disabled" : ""} 
        ${args.round ? "round" : ""} 
        custom-class="${args.customClass}"
        custom-style='${JSON.stringify(args.customStyle)}'>
        ${args.label}
    </d-button>
`;

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
    size: "medium",
    disabled: false,
    round: false,
    customClass: "",
    customStyle: {},
    label: "主要按钮",
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
    size: "medium",
    disabled: false,
    round: false,
    customClass: "",
    customStyle: {},
    label: "次要按钮",
};

export const Danger = Template.bind({});
Danger.args = {
    type: "danger",
    size: "medium",
    disabled: false,
    round: false,
    customClass: "",
    customStyle: {},
    label: "危险按钮",
};

export const Text = Template.bind({});
Text.args = {
    type: "text",
    size: "medium",
    disabled: false,
    round: false,
    customClass: "",
    customStyle: {},
    label: "文本按钮",
};

export const Small = Template.bind({});
Small.args = {
    type: "primary",
    size: "small",
    disabled: false,
    round: false,
    customClass: "",
    customStyle: {},
    label: "小按钮",
};

export const Large = Template.bind({});
Large.args = {
    type: "primary",
    size: "large",
    disabled: false,
    round: false,
    customClass: "",
    customStyle: {},
    label: "大按钮",
};

export const Disabled = Template.bind({});
Disabled.args = {
    type: "primary",
    size: "medium",
    disabled: true,
    round: false,
    customClass: "",
    customStyle: {},
    label: "禁用按钮",
};

export const Round = Template.bind({});
Round.args = {
    type: "primary",
    size: "medium",
    disabled: false,
    round: true,
    customClass: "",
    customStyle: {},
    label: "A",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
    type: "primary",
    size: "medium",
    disabled: false,
    round: false,
    customClass: "custom-button",
    customStyle: {
        backgroundColor: "#8e44ad",
        color: "white",
        borderRadius: "8px",
    },
    label: "自定义样式",
};

// 带图标的按钮示例
const IconButtonTemplate = (args) => `
    <d-button 
        type="${args.type}" 
        size="${args.size}" 
        ${args.disabled ? "disabled" : ""} 
        ${args.round ? "round" : ""}>
        <d-icon name="${args.iconName}" color="${args.iconColor}" size="${
    args.iconSize
}"></d-icon>
        ${args.showLabel ? `<span>${args.label}</span>` : ""}
    </d-button>
`;

export const WithIcon = IconButtonTemplate.bind({});
WithIcon.args = {
    type: "primary",
    size: "medium",
    disabled: false,
    round: false,
    iconName: "search",
    iconColor: "white",
    iconSize: "16px",
    showLabel: true,
    label: "搜索",
};

export const IconOnly = IconButtonTemplate.bind({});
IconOnly.args = {
    type: "primary",
    size: "medium",
    disabled: false,
    round: true,
    iconName: "heart",
    iconColor: "white",
    iconSize: "16px",
    showLabel: false,
    label: "",
};

export default {
    title: "Components/DButton",
    tags: ["autodocs"],
};

const Template = () => `
    <d-button>Button</d-button>
`;

export const Default = Template.bind({});

Default.args = {
    type: "primary",
    size: "medium",
    disabled: false,
    round: false,
    customClass: "",
    customStyle: {},
};

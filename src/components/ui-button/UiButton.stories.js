import UiButton from "./UiButton.vue";

export default {
  title: "Components/Button",
  component: UiButton,
  tags: ["autodocs"],

  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["l", "m", "s", "xs"],
    },
    color: {
      control: { type: "inline-radio" },
      options: ["accent", "primary", "secondary", "negative", "positive"],
    },

    to: { table: { disable: true } },
    type: { table: { disable: true } },
    default: { table: { disable: true } },
    target: { table: { disable: true } },
    href: { table: { disable: true } },
    dataTestId: { table: { disable: true } },
  },
  args: {
    size: "m",
    color: "accent",
    href: "",
    target: "",
    label: "Текст",
    loading: false,
    disabled: false,
    fullWidth: false,
  },
};

export const Default = {
  args: {
    label: "Текст",
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { label: "Button", variant: "Primary", size: "Small" },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };

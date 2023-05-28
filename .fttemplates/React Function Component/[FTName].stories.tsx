import { [FTName] } from "./[FTName]";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof [FTName]> = {
    title: "Components/[FTName]",
    component: [FTName],
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof [FTName]>;

export const Default: Story = {
    args: {},
}
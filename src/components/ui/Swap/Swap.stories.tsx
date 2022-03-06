import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Swap } from "./index"

export default {
  title: "UI/Swap",
  component: Swap,
} as ComponentMeta<typeof Swap>;

const Template: ComponentStory<typeof Swap> = (args) => (
  <Swap {...args} />
)

export const Default = Template.bind({})
Default.args = {}
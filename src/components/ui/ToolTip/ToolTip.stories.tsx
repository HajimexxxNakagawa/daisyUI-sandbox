import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { ToolTip } from "./index"

export default {
  title: "UI/ToolTip",
  component: ToolTip,
} as ComponentMeta<typeof ToolTip>;

const Template: ComponentStory<typeof ToolTip> = (args) => (
  <ToolTip {...args} />
)

export const Default = Template.bind({})
Default.args = {}
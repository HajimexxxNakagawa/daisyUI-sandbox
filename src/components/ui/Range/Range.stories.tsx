import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Range } from "./index"

export default {
  title: "UI/Range",
  component: Range,
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => (
  <Range {...args} />
)

export const Default = Template.bind({})
Default.args = {}
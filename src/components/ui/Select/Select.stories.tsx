import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Select } from "./index"

export default {
  title: "UI/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
)

export const Default = Template.bind({})
Default.args = {}
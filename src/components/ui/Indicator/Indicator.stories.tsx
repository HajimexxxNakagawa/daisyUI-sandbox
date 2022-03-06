import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Indicator } from "./index"

export default {
  title: "UI/Indicator",
  component: Indicator,
} as ComponentMeta<typeof Indicator>;

const Template: ComponentStory<typeof Indicator> = (args) => (
  <Indicator {...args} />
)

export const Default = Template.bind({})
Default.args = {}
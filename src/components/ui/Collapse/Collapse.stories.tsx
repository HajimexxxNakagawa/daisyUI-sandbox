import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Collapse } from "./index"

export default {
  title: "UI/Collapse",
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args} />
)

export const Default = Template.bind({})
Default.args = {}
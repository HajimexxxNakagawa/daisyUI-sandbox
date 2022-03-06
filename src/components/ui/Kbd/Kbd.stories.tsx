import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Kbd } from "./index"

export default {
  title: "UI/Kbd",
  component: Kbd,
} as ComponentMeta<typeof Kbd>;

const Template: ComponentStory<typeof Kbd> = (args) => (
  <Kbd {...args} />
)

export const Default = Template.bind({})
Default.args = {}
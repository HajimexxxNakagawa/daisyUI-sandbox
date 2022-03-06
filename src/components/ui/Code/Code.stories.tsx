import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Code } from "./index"

export default {
  title: "UI/Code",
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
  <Code {...args} />
)

export const Default = Template.bind({})
Default.args = {}
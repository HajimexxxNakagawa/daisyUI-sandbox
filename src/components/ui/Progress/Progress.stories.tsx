import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Progress } from "./index"

export default {
  title: "UI/Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
)

export const Default = Template.bind({})
Default.args = {}
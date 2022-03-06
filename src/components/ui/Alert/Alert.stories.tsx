import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Alert } from "./index"

export default {
  title: "UI/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args} />
)

export const Default = Template.bind({})
Default.args = {}
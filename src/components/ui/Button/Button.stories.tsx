import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Button } from "./index"

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Neutral = Template.bind({})
Neutral.args = {}

export const Primary = Template.bind({})
Primary.args = {
  className: "btn-primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  className: "btn-secondary",
}

export const Accent = Template.bind({})
Accent.args = {
  className: "btn-accent",
}

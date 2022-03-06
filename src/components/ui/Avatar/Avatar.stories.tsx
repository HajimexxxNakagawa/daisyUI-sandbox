import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Avatar } from "./index"

export default {
  title: "UI/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
)

export const Default = Template.bind({})
Default.args = {}
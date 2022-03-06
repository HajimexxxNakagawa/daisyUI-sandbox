import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Badge } from "./index"

export default {
  title: "UI/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args} />
)

export const Default = Template.bind({})
Default.args = {}
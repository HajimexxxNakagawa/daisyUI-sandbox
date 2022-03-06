import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Card } from "./index"

export default {
  title: "UI/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
)

export const Default = Template.bind({})
Default.args = {}
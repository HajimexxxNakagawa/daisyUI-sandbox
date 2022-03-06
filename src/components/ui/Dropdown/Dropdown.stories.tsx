import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Dropdown } from "./index"

export default {
  title: "UI/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Default = Template.bind({})
Default.args = {}
import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Breadcrumbs } from "./index"

export default {
  title: "UI/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
)

export const Default = Template.bind({})
Default.args = {}
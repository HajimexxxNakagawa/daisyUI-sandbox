import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Carousel } from "./index"

export default {
  title: "UI/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
)

export const Default = Template.bind({})
Default.args = {}
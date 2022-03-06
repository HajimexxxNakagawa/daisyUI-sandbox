import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Modal } from "./index"

export default {
  title: "UI/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
)

export const Default = Template.bind({})
Default.args = {}
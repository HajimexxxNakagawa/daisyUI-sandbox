import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Table } from "./index"

export default {
  title: "UI/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
)

export const Default = Template.bind({})
Default.args = {}
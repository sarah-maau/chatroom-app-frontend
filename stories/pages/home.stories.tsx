import Home from "../../pages/index";
import {ComponentMeta, Story} from "@storybook/react";
import {ComponentProps} from "react";

export default {
  title: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>

const Template:Story<ComponentProps<typeof Home>> = () => (
    <Home/>
)


export const Default = Template.bind({})

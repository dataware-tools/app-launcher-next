import { Story, Meta } from "@storybook/react";
import { SamplePresentation, SamplePresentationProps } from "./Sample";

export default {
  component: SamplePresentation,
  title: "Sample",
} as Meta;

const Template: Story<SamplePresentationProps> = (args) => (
  <SamplePresentation {...args} />
);
export const Default = Template.bind({});
Default.args = {
  user: { name: "test" },
  onClick: () => window.alert("click!"),
  data: "test",
};

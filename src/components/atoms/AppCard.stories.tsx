import { Story, Meta } from "@storybook/react";
import { AppCard, AppCardProps } from "./AppCard";

export default {
  component: AppCard,
  title: "AppCard",
} as Meta;

const Template: Story<AppCardProps> = (args) => <AppCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  url: "https://google.com",
  icon: "storage",
  name: "Test",
  description: "Description",
};

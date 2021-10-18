import { Story, Meta } from "@storybook/react";
import { AppCardList, AppCardListProps } from "./AppCardList";

export default {
  component: AppCardList,
  title: "AppCardList",
} as Meta;

const Template: Story<AppCardListProps> = (args) => <AppCardList {...args} />;
export const Default = Template.bind({});

const apps = {
  webviz: {
    id: "webviz",
    icon: "https://webviz.io/favicon.ico",
    name: "WebViz",
    description: "Modern rosbag player",
    url: "http://webviz.hdwlab.co.jp/",
    visibility: "public",
    location: "external",
  },
  docs: {
    id: "docs",
    icon: "book",
    name: "Documents",
    description: "Read documents",
    url: "https://dataware-tools.gitbook.io/dataware-tools/",
    visibility: "public",
    location: "internal",
  },
  dataBrowser: {
    id: "data_browser",
    icon: "database",
    name: "Data browser",
    description: "Explore data",
    url: "/data-browser",
    visibility: "private",
    location: "internal",
  },
  userManager: {
    id: "user-manager",
    icon: "users",
    name: "User manager",
    description: "authorize user",
    url: "/user-manager",
    visibility: "private",
    location: "internal",
  },
};

Default.args = {
  apps: apps,
  location: "internal",
};
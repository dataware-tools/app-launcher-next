export type AppType = {
  id: string;
  icon: string;
  name: string;
  description: string;
  url: string;
  visibility: string;
  location: string;
};

export type AppListType = {
  [key: string]: AppType;
};

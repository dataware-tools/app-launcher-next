import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import { AppCardProps, AppCard } from "../atoms/AppCard";
import { AppListType } from "utils/types";

export type AppCardListProps = {
  apps: AppListType;
  location: "internal" | "external";
  publicOnly?: boolean;
};

export const AppCardList = ({
  apps,
  location,
  publicOnly,
}: AppCardListProps): JSX.Element => {
  const GridAppCard = ({ app }: { app: AppCardProps }) => (
    <Grid item xs={1} md={1} lg={1} xl={1}>
      <AppCard {...app} />
    </Grid>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        columns={{ xs: 2, md: 3, lg: 4, xl: 5 }}
        spacing={{ xs: 1, md: 2, lg: 4 }}
      >
        {publicOnly
          ? Object.values(apps)
              .filter(
                (app) =>
                  app.location === location && app.visibility === "public"
              )
              .map((app) => <GridAppCard key={app.id} app={app} />)
          : Object.values(apps)
              .filter((app) => app.location === location)
              .map((app) => <GridAppCard key={app.id} app={app} />)}
      </Grid>
    </Box>
  );
};

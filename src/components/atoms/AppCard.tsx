import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Icon from "@mui/material/Icon";
import Box from "@mui/system/Box";
import { AppType } from "utils/types";

export type AppCardProps = Pick<
  AppType,
  "icon" | "name" | "description" | "url"
>;

export const AppCard = ({
  icon,
  name,
  description,
  url,
}: AppCardProps): JSX.Element => {
  return (
    <Card
      variant="outlined"
      onClick={() => {
        window.location.href = url;
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ":hover": { cursor: "pointer" },
      }}
    >
      {icon.startsWith("http") ? (
        <Box
          sx={{
            minWidth: "100px",
            minHeight: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element  */}
          <img src={icon} alt={`Icon of ${name}`} />
        </Box>
      ) : (
        <Icon
          sx={{
            fontSize: "100px !important",
          }}
        >
          {icon}
        </Icon>
      )}
      <CardHeader title={name} sx={{ padding: 1 }} />
      <CardContent sx={{ padding: 1 }}>{description}</CardContent>
    </Card>
  );
};

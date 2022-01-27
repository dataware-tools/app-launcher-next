import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Icon from "@mui/material/Icon";
import Box from "@mui/system/Box";
import { AppType } from "utils/types";

export type AppCardProps = Pick<
  AppType,
  "icon" | "name" | "description" | "url"
> & { disable?: boolean };

export const AppCard = ({
  icon,
  name,
  description,
  url,
  disable,
}: AppCardProps): JSX.Element => {
  return (
    <Card
      variant="outlined"
      onClick={
        disable
          ? undefined
          : () => {
              window.location.href = url;
            }
      }
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ":hover": { cursor: disable ? undefined : "pointer" },
        opacity: disable ? "50%" : undefined,
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

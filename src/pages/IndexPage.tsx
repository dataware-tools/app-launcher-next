import { useAuth0 } from "@auth0/auth0-react";
import {
  NoticeableLetters,
  PageBody,
  PageContainer,
  PageMain,
} from "@dataware-tools/app-common";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import packageInfo from "../../package.json";
import {
  AppCardList,
  AppCardListProps,
} from "../components/molecules/AppCardList";

export type IndexPagePresentationProps = {
  apps: AppCardListProps["apps"];
  isAuthenticated: boolean;
};

export const IndexPagePresentation = ({
  apps,
  isAuthenticated,
}: IndexPagePresentationProps): JSX.Element => {
  const Title = ({ children }: { children: string }): JSX.Element => (
    <Typography variant="h3" sx={{ paddingTop: 1, paddingBottom: 1 }}>
      <NoticeableLetters>{children}</NoticeableLetters>
    </Typography>
  );

  return (
    <PageContainer>
      <PageBody>
        <PageMain sx={{ padding: 2 }}>
          {apps && (
            <>
              {!isAuthenticated && (
                <Typography variant="caption">
                  Please login to see all of the available tools.
                </Typography>
              )}
              <Title>Internal tools</Title>
              <AppCardList
                apps={apps}
                location="internal"
                publicOnly={!isAuthenticated}
              />
              <Divider
                variant="middle"
                sx={{ paddingTop: 1, paddingBottom: 1 }}
              />
              <Title>External tools</Title>
              <AppCardList
                apps={apps}
                location="external"
                publicOnly={!isAuthenticated}
              />
            </>
          )}
        </PageMain>
      </PageBody>
    </PageContainer>
  );
};

export const IndexPage = (): JSX.Element => {
  const { isAuthenticated } = useAuth0();
  const { data: apps, error } = useSWR(packageInfo.basePath + "/apps.json");

  useEffect(() => {
    error && toast(JSON.stringify(error));
  }, [error]);

  return (
    <IndexPagePresentation apps={apps} isAuthenticated={isAuthenticated} />
  );
};

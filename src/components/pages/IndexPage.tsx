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
import packageInfo from "../../../package.json";
import { AppCardList } from "../molecules/AppCardList";

const Page = (): JSX.Element => {
  const { isAuthenticated } = useAuth0();
  const { data, error } = useSWR(packageInfo.homepage + "/api/apps");

  useEffect(() => {
    error && toast(JSON.stringify(error));
  }, [error]);

  const Title = ({ children }: { children: string }): JSX.Element => (
    <Typography variant="h3" sx={{ paddingTop: 1, paddingBottom: 1 }}>
      <NoticeableLetters>{children}</NoticeableLetters>
    </Typography>
  );

  return (
    <PageContainer>
      <PageBody>
        <PageMain sx={{ padding: 2 }}>
          {data && (
            <>
              {!isAuthenticated && (
                <Typography variant="caption">
                  Please login to see all of the available tools.
                </Typography>
              )}
              <Title>Internal tools</Title>
              <AppCardList
                apps={data}
                location="internal"
                publicOnly={!isAuthenticated}
              />
              <Divider
                variant="middle"
                sx={{ paddingTop: 1, paddingBottom: 1 }}
              />
              <Title>External tools</Title>
              <AppCardList
                apps={data}
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

export { Page as IndexPage };

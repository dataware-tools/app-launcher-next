import { AUTH_CONFIG } from "@dataware-tools/app-common";

const APP_ROUTE = {
  HOME: "/",
};

const SwrOptions = {
  errorRetryCount: 1,
  fetcher: (resource: any, init: any) =>
    fetch(resource, init).then((res) => res.json()),
};

const authConfig = {
  domain: AUTH_CONFIG.domain,
  clientId: AUTH_CONFIG.clientId,
  apiUrl: AUTH_CONFIG.apiUrl,
};

const redirectUri =
  typeof window === "undefined" ? null : `${window.location.origin}/callback`;

export { APP_ROUTE, SwrOptions, authConfig, redirectUri };

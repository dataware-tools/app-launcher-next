import { useAuth0 } from "@auth0/auth0-react";
import { databaseStore } from "@dataware-tools/app-common";
import Button from "@mui/material/Button";
import useSWR, { mutate } from "swr";

const apiUrlBase = process.env.NEXT_PUBLIC_BACKEND_API_PREFIX || "/api/latest";

export type SamplePresentationProps = {
  user: any;
  onClick: () => void;
  error: any;
  data: any;
};
export const SamplePresentation = ({
  user,
  onClick,
  error,
  data,
}: SamplePresentationProps): JSX.Element => {
  return (
    <div>
      <h1>Hello {user ? user.name : "world"}</h1>
      <Button onClick={onClick}>revalidate API</Button>
      {error ? (
        <div>error: {JSON.stringify(error)}</div>
      ) : data ? (
        <div>data: {JSON.stringify(data)}</div>
      ) : null}
    </div>
  );
};

export const Sample = (): JSX.Element => {
  const { user, getAccessTokenSilently } = useAuth0();
  const fetchAPI = async () => {
    databaseStore.OpenAPI.TOKEN = await getAccessTokenSilently();
    databaseStore.OpenAPI.BASE = apiUrlBase;
    const Res = await databaseStore.DatabaseService.listDatabases({});
    return Res;
  };
  const URL = `${apiUrlBase}/databases`;
  const { data, error } = useSWR(URL, fetchAPI);

  return (
    <SamplePresentation
      user={user}
      data={data}
      error={error}
      onClick={() => mutate(URL)}
    />
  );
};

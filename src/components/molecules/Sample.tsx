import Button from "@mui/material/Button";

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
  const data = "this is sample";
  const error = undefined;
  const user = { name: "sample" };

  return (
    <SamplePresentation
      user={user}
      data={data}
      error={error}
      onClick={() => console.log("test")}
    />
  );
};

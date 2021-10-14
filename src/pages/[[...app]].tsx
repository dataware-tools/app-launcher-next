import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import packageInfo from "../../package.json";
import { IndexPage } from "components/pages/IndexPage";
import { APP_ROUTE } from "utils/index";

const Page = (): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Router basename={packageInfo.homepage}>
      <Switch>
        <Route exact path={APP_ROUTE.HOME}>
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Page;

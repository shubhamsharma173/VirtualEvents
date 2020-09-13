import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Faq = React.lazy(() =>
  import(/* webpackChunkName: "faq" */ './faq')
);
const Help = React.lazy(() =>
  import(/* webpackChunkName: "help" */ './help')
);

const UI = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/faq`} />
      <Route
        path={`${match.url}/faq`}
        render={(props) => <Faq {...props} />}
      />
      <Route
        path={`${match.url}/help`}
        render={(props) => <Help {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default UI;

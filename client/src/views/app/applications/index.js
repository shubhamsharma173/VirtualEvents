import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Todo = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './todo')
);
const Conference = React.lazy(() =>
  import(/* webpackChunkName: "application-conference" */ './conference')
);
const Speaker = React.lazy(() =>
  import(/* webpackChunkName: "application-speaker" */ './speaker')
);

const Applications = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/todo`} />
      <Route
        path={`${match.url}/todo`}
        render={(props) => <Todo {...props} />}
      />
      <Route
        path={`${match.url}/conference`}
        render={(props) => <Conference {...props} />}
        isExact
      />
      <Route
        path={`${match.url}/speaker`}
        render={(props) => <Speaker {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Applications;

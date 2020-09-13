import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const BlogList = React.lazy(() =>
  import(/* webpackChunkName: "blog-list" */ './doc-lib')
);
const BlogList2 = React.lazy(() =>
  import(/* webpackChunkName: "blog-list" */ './video-lib')
);

const PagesBlog = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/blog-list`} />
      <Route
        path={`${match.url}/doc-lib`}
        render={(props) => <BlogList {...props} />}
      />
      <Route
        path={`${match.url}/video-lib`}
        render={(props) => <BlogList2 {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default PagesBlog;

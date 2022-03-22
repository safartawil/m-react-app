import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Dashboards = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/admins`} />
        <Route path={`${requestedUrl}/admins`} component={lazy(() => import('./Admins'))} />
        {/* <Route path={`${requestedUrl}/clients`} component={lazy(() => import('./Clients'))} /> */}
        
      </Switch>
    </Suspense>
  );
};

export default Dashboards;
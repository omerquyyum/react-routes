import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// routes
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TeamRoutes from './teams/App';
import UserRoutes from './users/App';

const routes = [...TeamRoutes, ...UserRoutes];

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {routes.map((r,i) => {
      return <Route key={i} path={`${r.path}`} render={() =>
        <AppRoute Component={r.component} Layout={r.layout}  />}
      />
    })}
    <Route component={NotFound} />
  </Switch>
);

const AppRoute = ({Component, Layout}) => {
  if (Layout) {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  } else {
    return <Component />
  }
}

export default withRouter(App);

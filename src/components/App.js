import React from 'react';
// necesario para hacer rutas con router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home'
import BadgeEdit from '../pages/BadgeEdit';

function App() {
  return (
    <BrowserRouter>
      <Layout>

      {/* switch renderizar solo una ruta */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
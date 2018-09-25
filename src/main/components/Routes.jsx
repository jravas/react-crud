import React from 'react';
import { Switch, Route } from 'react-router-dom';

// router paths
import { HOME, ITEMS, ITEM } from '../constants/routes';

// router views
import { HomeView } from '../views/HomeView';
import { Items, ItemSingle } from '../../modules/';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={HOME} component={HomeView} />
        <Route path={ITEMS} component={Items} />
        <Route path={ITEM} component={ItemSingle} />
      </Switch>
    </div>
  );
};

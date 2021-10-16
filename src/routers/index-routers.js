import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routerIndex from './index-routes';
const RouterIndex = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    {routerIndex.map((router, index) => {
                        return (
                            <Route
                                exact={router.exact}
                                path={router.path}
                                component={router.components}
                                key={index}
                            />
                        )
                    })}
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default RouterIndex;
import React, { FunctionComponent } from 'react';

import { BrowserRouter as Router, Switch, Route, RouteProps } from 'react-router-dom';

type TRouterModuleProps = {
    routes: RouteProps[]
}

export const RouterModule: FunctionComponent<TRouterModuleProps> = ({routes}) => {

    return (
        <Router>
            <Switch>
                {
                    routes.map( (_, index) => (
                        <Route {..._} key={index}/>
                    ))
                }
            </Switch>
        </Router>
    )

}
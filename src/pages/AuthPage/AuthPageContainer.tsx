import React, { FunctionComponent } from 'react';
import { RouteProps, useRouteMatch, Redirect } from 'react-router-dom';

import { AuthLoginCardComponent } from './components/AuthLoginCard';
import { AuthRegisterCardComponent } from './components/AuthRegisterCard';
import { RouterModule } from '../../core/components/Router/RouterModule';
import { FOFPageContainer } from '../FOFPage/FOFContainer';

type TAuthPageContainerProps = {
}


export const AuthPageContainer: FunctionComponent<TAuthPageContainerProps> = () => {

    const match = useRouteMatch();
    
    const ROUTES: RouteProps[] = [
        {
            path: `${match.path}/`,
            render: () => (<Redirect to={`${match.path}/login`} />),
            exact: true
        },
        {
            path: `${match.path}/login`,
            component: AuthLoginCardComponent,
            exact: true
        },
        {
            path: `${match.path}/signup`,
            component: AuthRegisterCardComponent,
            exact: true
        },
        {
            path: '',
            component: FOFPageContainer
        }
    ]

    return (
        <RouterModule routes={ROUTES} />
    )
}
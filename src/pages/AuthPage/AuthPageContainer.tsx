import React, { FunctionComponent } from 'react';
import { RouteProps, useRouteMatch, Redirect } from 'react-router-dom';

import { AuthLoginCardComponent } from './components/AuthLoginCard';
import { AuthRegisterCardComponent } from './components/AuthRegisterCard';
import { RouterModule } from '../../core/components/Router/RouterModule';
import { FOFPageContainer } from '../FOFPage/FOFContainer';
import { Row, Col } from 'react-bootstrap';

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
        <div className="d-flex flex-column justify-content-center h-100 w-100">
            <Row className="justify-content-center">
                <Col xs={10} md={8} lg={6} xl={3}> 
                    <RouterModule routes={ROUTES} />
                </Col>
            </Row>
        </div>
    )
}
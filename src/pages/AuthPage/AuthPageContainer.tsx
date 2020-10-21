import React, { FunctionComponent } from 'react';
import { RouteProps, useRouteMatch, Redirect } from 'react-router-dom';

import { AuthLoginCardComponent } from './components/AuthLoginCard';
import { AuthRegisterCardComponent } from './components/AuthRegisterCard';
import { RouterModule } from '../../core/components/Router/RouterModule';
import { FOFPageContainer } from '../FOFPage/FOFContainer';
import { Row, Col } from 'react-bootstrap';
import { LayoutComponent } from '../../core/components/Layout/LayoutComponent';

type TAuthPageContainerProps = {
}

export const AuthPageContainer: FunctionComponent<TAuthPageContainerProps> = ({children}) => {

    return (
        <LayoutComponent>
            <div className="d-flex flex-column justify-content-center h-100 w-100">
                <Row className="justify-content-center">
                    <Col xs={10} md={8} lg={6} xl={3}> 
                        {children}
                    </Col>
                </Row>
            </div>
        </LayoutComponent>
    )
}
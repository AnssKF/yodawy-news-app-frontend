import React, { FunctionComponent, Fragment } from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
  
import { useAuth } from '../../services/auth/store'


type TNavBarComponentProps = {
}

export const NavBarComponent: FunctionComponent<TNavBarComponentProps> = () => {

    const routeHistory = useHistory();
    const [authState, setAuthState] = useAuth()

    const navigate = (route: string) => routeHistory.push(route)
    const logout = () => setAuthState({
        access_token: '',
        user: null
    })

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>NewsFeed</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => navigate('/headlines')}>Headlines</Nav.Link>

                    {
                        !authState.access_token?
                            <Nav.Link onClick={() => navigate('/auth/login')}>
                                Login/Signup
                            </Nav.Link>
                        : 
                        <Fragment>
                            <Navbar.Text>
                                Signed in as: {authState.user?.name}
                            </Navbar.Text>
                            <Nav.Link onClick={logout}>
                                Logout
                            </Nav.Link>
                        </Fragment>
                    }

                </Nav>
            </Container>
        </Navbar>
    )
}
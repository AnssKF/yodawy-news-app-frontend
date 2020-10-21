import React, { FunctionComponent } from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
  
import { useAuth } from '../../services/auth/store'


type TNavBarComponentProps = {
}

export const NavBarComponent: FunctionComponent<TNavBarComponentProps> = () => {

    const routeHistory = useHistory();
    const [authState, setAuthState] = useAuth()

    const navigate = (route: string) => routeHistory.push(route)

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
                            <Navbar.Text>
                                Signed in as: {authState.user?.name}
                            </Navbar.Text>
                    }

                </Nav>
            </Container>
        </Navbar>
    )
}
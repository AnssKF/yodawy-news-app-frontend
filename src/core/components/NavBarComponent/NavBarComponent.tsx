import React, { FunctionComponent } from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'


type TNavBarComponentProps = {
}

export const NavBarComponent: FunctionComponent<TNavBarComponentProps> = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>NewsFeed</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
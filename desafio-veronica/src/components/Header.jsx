import React from 'react'
import { Container, Image, Nav, Navbar, NavbarBrand} from 'react-bootstrap'


const Header = () => {
  return (
    
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
            <Container>
                <NavbarBrand>
                    <Image src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254' alt='logo' width='100px'/>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="https://www.starwars.com/" target={'_blank'} rel="noreferrer">Site Oficial</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
  )
}

export default Header
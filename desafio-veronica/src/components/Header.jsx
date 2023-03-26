import React from 'react'
import { Container, Image, Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/coordinator'


const Header = () => {

    const navigate = useNavigate()
    
  return (
    
        <Navbar bg="dark" expand="lg" variant="dark" style={{width: "100%"}}>
            <Container>
                <NavbarBrand>
                    <Image src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254' alt='logo' width='100px'/>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={() => {goToHomePage(navigate)}}>Home</Nav.Link>
                        <Nav.Link href="https://www.starwars.com/" target={'_blank'} rel="noreferrer">Site Oficial</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
  )
}

export default Header
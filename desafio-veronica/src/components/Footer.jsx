import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
        <Container style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Navbar.Text>Dev. Veronica R.</Navbar.Text>
            <Nav.Link href="https://www.linkedin.com/in/veronica-rubim-0b0b87169/" target={'_blank'} rel="noreferrer" style={{color: "gray"}}>Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/veronicarubim" target={'_blank'} rel="noreferrer" style={{color: "gray"}}>Github</Nav.Link>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Footer
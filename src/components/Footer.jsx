import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
        <Container>
            <Navbar.Text>Dev. Veronica R. | </Navbar.Text>
            <Nav className="me-auto">
              <Nav.Link href="https://www.linkedin.com/in/veronica-rubim-0b0b87169/" target={'_blank'} rel="noreferrer">Linkedin</Nav.Link>
              <Nav.Link href="https://github.com/veronicarubim" target={'_blank'} rel="noreferrer">Github</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </Container>
  )
}

export default Footer
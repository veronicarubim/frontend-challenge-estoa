import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
        <Container>
          <Navbar.Brand href="#">By: Veronica Rubim</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Footer
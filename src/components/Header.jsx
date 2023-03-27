import React, { useContext } from 'react'
import { Container, Form, Image, Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import { goToHomePage } from '../routes/coordinator'


const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const handleFilm = (e) => {
        setFilterFilm(e.target.value)}
    const context = useContext(GlobalContext)
    const {films, filterFilm, setFilterFilm} = context    
    
  return (
    
        <Navbar bg="dark" expand="lg" variant="dark" fixed='top' className='d-flex justify-content-end'>
            <Container>
                <NavbarBrand>
                    <Nav.Link href="#home" onClick={() => {goToHomePage(navigate)}}>
                    <Image src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254' alt='logo' width='100px'/>
                    </Nav.Link>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={() => {goToHomePage(navigate)}}>Home</Nav.Link>
                        <Nav.Link href="https://www.disneyplus.com/pt-br/brand/star-wars" target={'_blank'} rel="noreferrer">Assista</Nav.Link>
                        <Nav.Link href="https://www.starwars.com/" target={'_blank'} rel="noreferrer">Site Oficial</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
             {
                location.pathname === "/" ? 
                <div className='pt-2 mx-auto' >
                    <Form.Group 
                    bg="dark"
                    style={{
                        color: "black",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Form.Select
                            style={{ width: "18rem" }}
                            value={filterFilm}
                            onChange={handleFilm}>
                            <option value="">Select by movie...</option>
                            {films &&
                            films.map((film) => (
                                <option key={film.url} value={film.url}>
                                {film.title}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </div> 
                : null}
        </Navbar>
    
  )
}

export default Header
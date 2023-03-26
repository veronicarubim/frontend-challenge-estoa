import React from 'react'
import { Container } from 'react-bootstrap'
import Character from '../../components/Character'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const HomePage = () => {
  return (
        <Container>
            <Header></Header>
            <Character></Character>
            <Footer></Footer>
        </Container>
  )
}

export default HomePage
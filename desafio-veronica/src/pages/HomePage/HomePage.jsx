import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Character from '../../components/Character'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { GlobalContext } from '../../contexts/GlobalContext'

const HomePage = () => {

  const context = useContext(GlobalContext)
  const {characters, filterFilm} = context

  return (
        <Container>
            <Header/>
            <Container style={{
              display: "flex",
              marginTop: "9rem",
              marginBottom: "8rem",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap", 
              gap: "2rem"}}
              
              >
              {characters
                .filter((character) => {
                if (filterFilm) {
                  return character.films.includes(filterFilm);
                }
                return true;
                })
                .map((character) => (
                  <Character 
                  key={character.name}
                  character={character}
                  species={character.species}/>
                ))}
            </Container>
            <Footer></Footer>
        </Container>
  )
}

export default HomePage
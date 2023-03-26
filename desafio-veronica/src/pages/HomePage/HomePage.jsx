import React, { useContext } from 'react'
import { Container, Form } from 'react-bootstrap'
import Character from '../../components/Character'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { GlobalContext } from '../../contexts/GlobalContext'

const HomePage = () => {

  const context = useContext(GlobalContext)
  const {characters, films, filterFilm, setFilterFilm} = context

  const handleFilm = (e) => {
    setFilterFilm(e.target.value)
  }
  

  return (
        <Container>
            <Header/>
            <Form.Group
              className="mb-3"
              bg="dark"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form.Label style={{ color: "black" }}>
                Filter your characters by movie!
              </Form.Label>
              <Form.Select
                style={{ width: "18rem" }}
                value={filterFilm}
                onChange={handleFilm}
              >
                <option value="">All Films</option>
                {films &&
                  films.map((film) => (
                    <option key={film.url} value={film.url}>
                      {film.title}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>

            <Container style={{
              display: "flex",
              marginTop: "5rem",
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
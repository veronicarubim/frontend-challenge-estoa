import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { GlobalContext } from '../../contexts/GlobalContext'
import { getImage } from '../../utils/ReturnImage'

const DetailPage = () => {

  const [character, setCharacter] = useState('')
  const [species, setSpecies] = useState('')
  const [films, setFilms] = useState([])
  const [homeWorld, setHomeWorld] = useState([])
  const {name} = useParams()

  const context = useContext(GlobalContext)
  const {BASE_URL} = context

  useEffect(() => {
    axios.get(`${BASE_URL}/?search=${name}`)
      .then((response) => {
        setCharacter(response.data.results[0])
    axios.get(response.data.results[0].homeworld)
      .then((response) => setHomeWorld(response.data.name))
      .catch((error) => console.log(error));
    Promise.all(
      response.data.results[0].films.map((film) => axios.get(film))
    )
      .then((responses) =>
        setFilms(responses.map((response) => response.data.title))
      )
      .catch((error) => console.log(error));
    axios
      .get(response.data.results[0].species)
      .then((response) => setSpecies(response.data.name))
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));
}, [name]);
  
  return (
    <Container>
        <Header/>
        <Container
          style={{marginTop: "5rem",
            marginBottom: "5rem"}}>
           <Card bg="dark">
            <Card.Header className="text-light bg-dark h3">{character.name}</Card.Header>
            <Card.Body className="text-light bg-dark">
              <Card.Img src={getImage(character.name? character.name : null)} alt="imagem"/>
              <hr/>
              <Card.Subtitle >{homeWorld}</Card.Subtitle>
              <hr></hr>
              <Card.Text>{species? species : "Human"}</Card.Text>
              <Card.Text>Birth Year: {character.birth_year}</Card.Text>
              <Card.Text>Hair Color: {character.hair_color}</Card.Text>
              <Card.Text>Skin Color: {character.skin_color}</Card.Text>
              <Card.Text>Eye Color: {character.eye_color}</Card.Text>
              <Card.Text>Height: {character.height}</Card.Text>
              <Card.Text>Mass: {character.mass}</Card.Text>
              <Card.Text>Gender: {character.gender}</Card.Text>
              <hr></hr>
              <Button variant="btn btn-outline-warning" className="accordion-button" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseOne" 
                aria-expanded="false" 
                aria-controls="collapseOne">
                Featuring movies:
              </Button>
              <Card.Text style={{marginTop: "1rem"}} id="collapseOne" className="accordion-collapse collapse">
                {films.map((film) => (
                  <Card.Text>
                    {film}
                  </Card.Text>
                ))}
              </Card.Text>
            </Card.Body> 
          </Card> 

          
              
    

        </Container >
        <Footer/>
    </Container>
  )
}

export default DetailPage
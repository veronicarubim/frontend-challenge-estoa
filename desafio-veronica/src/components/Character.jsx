import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  { Card,  Button, CardImg } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { goToDetail } from '../routes/coordinator'
import { getImage } from '../utils/ReturnImage'

const Character = ({character, species}) => {
    
    const navigate = useNavigate()
    const [specie, setSpecie] = useState([])

    useEffect(() => {
      getSpecie();
    }, []);

    // Requisição do array de species dentro do objeto "people"

    const getSpecie = () => {
      axios.get(species)
      .then((response) => {
        setSpecie(response.data)
      })
      .catch((error) => {
        console.log(error.response)
      })
    };

  return (
    <Card bg="dark"
      style={{
        width: "18rem",
      }}>
        <Card.Header className="text-light bg-dark h3">{character.name}</Card.Header>
        <CardImg src={getImage(character.name? character.name : null)} alt="imagem"></CardImg>
        <Card.Body bg="dark">
            <Card.Text className="text-light bg-dark">Espécie: {specie.name? specie.name : "Humano"}</Card.Text>
            <Card.Text className="text-light bg-dark">Nascimento: {character.birth_year}</Card.Text>
            <Button variant="btn btn-outline-warning" onClick={() => {goToDetail(navigate, character.name)}}>Detalhes</Button>
        </Card.Body>
    </Card>
  )
}

export default Character
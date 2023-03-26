import React from 'react'
import  { Card,  Button } from 'react-bootstrap'

const Character = () => {
  return (
    <Card bg="dark">
        <Card.Header className="text-light bg-dark h3">Personagem</Card.Header>
        <Card.Body bg="dark">
            <Card.Text className="text-light bg-dark">Specie</Card.Text>
            <Card.Text className="text-light bg-dark">Aniversario</Card.Text>
            <Card.Text className="text-light bg-dark">Filmes</Card.Text>
            <Button variant="btn btn-outline-warning">Detalhes</Button>
        </Card.Body>
    </Card>
  )
}

export default Character
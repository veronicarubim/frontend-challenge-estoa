import { useEffect, useState } from "react";
import axios from "axios"
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {

  const [characters, setCharacters] = useState([])
  const [films, setFilms] = useState(null);
  const [filterFilm, setFilterFilm] = useState('')

  const BASE_URL = "https://swapi.dev/api/people"

  const context = {
    characters,
    films,
    BASE_URL,
    filterFilm, 
    setFilterFilm
  }

  // Requisição de todos os personagens da API:

  useEffect(() => {
    
    const getCharacters = async (page, allCharacters) => {
      
      const response = await axios.get(`${BASE_URL}/?page=${page}`)
      const nextCharacters = allCharacters.concat(response.data.results)

      if (response.data.next) {
        return getCharacters(page +1, nextCharacters)
      } else {
        setCharacters(nextCharacters)
      }
    }

  getCharacters(1,[])
  }, [])


  // Requisição da propriedade objeto "films" dentro de cada objeto "people":
  
  useEffect(() => {
    axios.get("https://swapi.dev/api/films")
      .then((response) => {
        setFilms(response.data.results);
        console.log(films);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div >
      <GlobalContext.Provider value={context}>
        <Router/>
      </GlobalContext.Provider>    
    </div>
  );
}

export default App;

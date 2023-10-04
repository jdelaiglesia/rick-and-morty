import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return setCharacter({});
  }, [params.id]);
  if (character.name) {
    return (
      <div class="d-flex justify-content-center align-items-center">
        <img src={character.image} alt="" class="img-thumbnail" />
        <div class="px-3">
          <h2>{character.name}</h2>
          <h3>{character.status}</h3>
          <h3>{character.species}</h3>
          <h3>{character.gender}</h3>
          <h3>{character.origin?.name}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Cargando...</h2>
      </div>
    );
  }
};

export default Detail;

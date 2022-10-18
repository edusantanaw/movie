import { Container } from "./styles";
import { useApi } from "../../../hooks/useApi";
import { useState } from "react";

export function Categories({ handleFilter }) {

  const [active, setActive] = useState(false)

  const { data, error, loading } = useApi(
    "/genre/movie/list?api_key=043e103cadfe2f7c14e3ddb1f9b8d861&language=pt-BR"
  );
  let genres = [];
  if (data) {
    genres = data.genres;
  }
  const addGenrer = (id) => {
    handleFilter(id);
  };

  return (
    <Container>
      <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já</h1>
      <span>Filtre por:</span>
      <ul>
        {genres &&
          genres.map((gender) => (
            <li
              onClick={(e) => {
                addGenrer(gender.id);
              }}
              key={gender.id}
            >
              {gender.name}
            </li>
          ))}
      </ul>
    </Container>
  );
}

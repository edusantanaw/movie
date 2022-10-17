import { Container } from "./styles";
import { Categories } from "./categories/Categories";
import { Movies } from "./movies/Movies";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { api } from "../../services/api";

export function Home() {
  const [page, setPage] = useState(1);
  const [filterMovies, setFilterMovies] = useState([]);

  const { data, error, loading } = useApi(
    `/movie/popular?api_key=043e103cadfe2f7c14e3ddb1f9b8d861&language=pt-BR&page=${page}`,
    filterMovies
  );

  const handlePage = (page) => {
    setPage(page);
  };

  const handleFilter = async (id) => {
      await api
      .get(
        `/discover/movie?api_key=043e103cadfe2f7c14e3ddb1f9b8d861&language=pt-BR&with_genres=${id}&page=${page}`
      )
      .then((response) => {
          setFilterMovies(response.data.results);
        })
        .catch((err) => {
        console.log(err);
    });
  };

  console.log(page)
  return (
    <Container>
      <Categories handleFilter={handleFilter} />
      <Movies
        handlePage={handlePage}
        results={filterMovies.length ? filterMovies : data.results}
      />
    </Container>
  );
}

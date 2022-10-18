import { Container } from "./styles";
import { Categories } from "./categories/Categories";
import { Movies } from "./movies/Movies";
import { useEffect, useState } from "react";
import { useApi, useApiWithFilter } from "../../hooks/useApi";
import { api } from "../../services/api";

export function Home() {
  const [page, setPage] = useState(1);
  const [id, setId] = useState('')
 
  const {filterMovies } = useApiWithFilter('/', id, page)

 

  const handlePage = (page) => {
    setPage(page);
  };

  const handleFilter = (genrerId) => {
    setId(genrerId)
  }


  console.log(page)
  return (
    <Container>
      <Categories handleFilter={handleFilter} />
      <Movies
        handlePage={handlePage}
        results={ filterMovies }
      />
    </Container>
  );
}

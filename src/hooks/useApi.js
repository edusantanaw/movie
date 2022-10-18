import { api } from "../services/api";
import { useState, useEffect } from "react";


export const useApi = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };

};


export const useApiWithFilter = (url, id, page) => {
  const [filterMovies, setFilterMovies] = useState([]);
  useEffect(()=>{
    api
      .get(
        `/discover/movie?api_key=043e103cadfe2f7c14e3ddb1f9b8d861&language=pt-BR&with_genres=${id}&page=${page}`
      )
      .then((response) => {
          setFilterMovies(response.data.results);
        })
        .catch((err) => {
        console.log(err);
    });
  }, [url, id, page])

  return {filterMovies}
}
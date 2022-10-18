import { useApi } from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function MovieDetail() {
  const [realese, setRealese] = useState({});

  const id = useParams();
  const { data, loading } = useApi(
    `/movie/${id.id}?api_key=043e103cadfe2f7c14e3ddb1f9b8d861&language=pt-BR`
  );
  useEffect(() => {
    api
      .get(
        `/movie/${id.id}/release_dates?api_key=043e103cadfe2f7c14e3ddb1f9b8d861`
      )
      .then((response) => {
        const data = response.data.results;
        const dataFiltered = data.filter((e) => {
          return e.iso_3166_1 === "BR";
        });
       
        const {certification, release_date} =  dataFiltered[0].release_dates[0]
        const newRelease = release_date.split('T')
        const newObejct = {
            certification: certification,
            release_date: newRelease[0]

        }
        setRealese(newObejct );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let genres = ''
  let duration = 0
  if(data){
    genres = data.genres
    duration = `${(parseInt(data.runtime / 60))}h ${(data.runtime % 60)}m`
  }


  console.log(data)
  return (
    <Container>
      {loading && <span>Carregando...</span>}
      <div className="top">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=""
        />
        <div >
          <h1>{data.title}</h1>
          <div>
          {realese && (
            <>
            <span>{realese.certification}</span>
            <span>{realese.release_date}(BR)</span>
            </>
          )
          }
          {genres && genres.map(( genre, i)=>(
             i === 0 ?<span>{genre.name}</span> : <span>,{genre.name}</span>
          ))}
          <span>{duration}</span>
          </div>
          <div className="average">
            {parseInt(data.vote_average*10)}
          </div>
        </div>
      </div>
    </Container>
  );
}

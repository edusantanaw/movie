import { useApi } from "../../../hooks/useApi";
import { Container } from "./styles";
import { Card } from "../../partials/CardMovie/Card";

export function Movies(){

    const { data, error, loading} = useApi('/movie/popular?api_key=043e103cadfe2f7c14e3ddb1f9b8d861&language=pt-BR&page=1')
    let results = []
    console.log(data)
    if(data){
        results = data.results
    }
    return(
        <Container>
            <ul>
                {results && results.map((movie)=>(
                <Card key={movie.id} image= {movie.poster_path} title = {movie.title} release ={movie.release_date}               />
                ))}
            </ul>
        </Container>
    )
}
import { CardContainer } from "./stylles";
import { Link } from "react-router-dom";

function Card({ image, title, release, id }) {
  return (
    <CardContainer>
      <Link to={`/movie/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" />
      </Link>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <span>{release}</span>
    </CardContainer>
  );
}

export { Card };

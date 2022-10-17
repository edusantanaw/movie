import { CardContainer } from "./stylles";


 function Card({ image, title,release }) {

  return (
  <CardContainer>
    <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" />
    <h2>{title}</h2>
    <span>{release}</span>
  </CardContainer>
  );
}

export {Card}
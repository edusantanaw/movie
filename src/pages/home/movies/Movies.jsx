import { Container } from "./styles";
import { Card } from "../../partials/CardMovie/Card";

export function Movies({ handlePage, results }) {
  return (
    <Container>
      <ul>
        {results &&
          results.map((movie) => (
            <Card
              key={movie.id}
              image={movie.poster_path}
              title={movie.title}
              release={movie.release_date}
              id={movie.id}
            />
          ))}
      </ul>
      <div className="pagination">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <button key={i} onClick={() => handlePage(i + 1)}>
              {i + 1}
            </button>
          ))}
      </div>
    </Container>
  );
}

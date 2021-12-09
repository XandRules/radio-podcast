import { IPodcast } from "../../types/podcast";
import { Container } from "./style";

interface Props {
  favorites: IPodcast[];
}

export function Favorites({ favorites }: Props) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Frequência</th>
            <th>Titulo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((f) => (
            <>
              <tr>
                <td>{f.id}</td>
                <td>{f.title}</td>
                <td>{f.description}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

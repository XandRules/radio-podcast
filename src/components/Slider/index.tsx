import React, { useState } from "react";
import { IPodcast } from "../../types/podcast";
import { Container } from "./style";

interface Props {
  podcastList: IPodcast[];
  setFavorites: React.Dispatch<React.SetStateAction<IPodcast[]>>;
}

function Slider({ podcastList, setFavorites }: Props) {

  const [podcast, setPodcast] = useState<IPodcast>({
    id: "87",
    title: "",
    description: "",
    img: "",
  });

  function adicionarFavorito(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    
    const data = podcastList.filter((p) => (
      p.id === podcast.id 
      )
    );
     
     setPodcast(data[0])


    setFavorites((oldFavorites) => [...oldFavorites, { ...podcast }]);
    console.log(podcast);
  }

  return (
    <Container>
      <div className="card">
        <form onSubmit={adicionarFavorito}>
          <div className="topCard">
            <h2>SINTONIZE SUA FREQUÊNICIA</h2>
          </div>
          <div className="mediaCard">
            <input
              type="range"
              min={87}
              max={107.9}
              value={podcast.id}
              step="0.1"
              className="slider"
              onChange={(evento) => {
                setPodcast({
                  id: evento.target.value,
                  title: "descrição",
                  description: "DESCRIÇÃO DO PODCAST 1",
                  img: "",
                });
                
              }}
            />
            <div className="value">{podcast.id}</div>

            <div className="img-bottom">
              {podcastList.find((p) => p.id === podcast.id) ? (
                <ul className="list" key={podcast.id}>
                  {podcastList
                    .filter((p) => p.id === podcast.id)
                    .map((p) => (
                    
                      <>
                        <li key={p.id} id="title-podcast">
                          <strong>{p.title}</strong>
                        </li>
                        <li>
                          <img
                            src={p.img}
                            className="img-podcast"
                            alt="hipsters"
                          />
                        </li>
                      </>
                    ))}

                  <div className="bottomCard">
                    <button type="submit">ADICIONAR FAVORITO</button>
                  </div>
                </ul>
              ) : (
                <div>
                  <br />
                  <p>Nenhuma rádio sintonizada.</p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Slider;

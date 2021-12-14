import { useEffect, useState } from "react";
import { IPodcast } from "./types/podcast";
import axios from "axios";
import Slider from "./components/Slider";
import "./miragejs";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Favorites } from "./components/Favorites";


function App() {
  const [favorites, setFavorites] = useState<IPodcast[]>([]);
  const [podcastList, setPodcastList] = useState<IPodcast[]>([]);

  useEffect(() => {
    (() => {
      axios
        .get<any>("/api/podcasts")
        .then(function (response) {
          const data = response.data.podcasts;
          console.log(data);
          setPodcastList(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Slider podcastList={podcastList} setFavorites={setFavorites} favorites={favorites}></Slider>
      <Favorites favorites={favorites} />
    </>
  );
}

export default App;

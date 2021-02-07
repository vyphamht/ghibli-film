import React, { useState, useEffect } from "react";
import Film from "../Film/Film";
import axios from "axios";
import "./Films.css";
const Films = () => {
  const [films, setFilms] = useState("");

  let getList = "https://ghibliapi.herokuapp.com/films";
  useEffect(() => {
    axios.get(getList).then((res) => {
      console.log(res.data);
      const filmList = res.data.map((film) => (
        <Film
          key={film.id}
          title={film.title}
          description={film.description}
          director={film.director}
          producer={film.producer}
          releaseDate={film.release_date}
          rate={film.rt_score}
        />
      ));

      setFilms(filmList);
    });
  }, []);

  return (
    <div>
      <h1>Most famous Ghibli films</h1>
      <div className="film_list">{films}</div>
    </div>
  );
};

export default Films;

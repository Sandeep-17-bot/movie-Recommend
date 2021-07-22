import React, { useState } from "react";
import "./styles.css";

var database = {
  SCIFI: [
    { movie: "Inception", Imdb: "8.8" },
    { movie: "The Matrix", Imdb: "8.7" },
    { movie: "Intersteller", Imdb: "8.6" }
  ],
  MYSTERY: [
    { movie: "Oldboy", Imdb: "8.4" },
    { movie: "Shutter Island", Imdb: "8.2" },
    { movie: "Memories Of Murder", Imdb: "8.1" }
  ],
  ANIME: [
    { movie: "Spirited Away", Imdb: "8.6" },
    { movie: "Grave of the FireFLies", Imdb: "8.5" },
    { movie: "A Slient Voice: The Movie", Imdb: "8.2" }
  ]
};

var data = Object.keys(database);
export default function App() {
  const [meaning, setMeaning] = useState("SCIFI");

  function animeClickHandler(inde) {
    //  var meaning = data[index]
    setMeaning(inde);
  }

  return (
    <div className="App">
      <h1 className="movi">M O V i E </h1>
      <h1 className="recom">Recommendation</h1>
      <h2> </h2>
      <ul>
        {data.map(function (inde) {
          return (
            <li
              className="clickhandler"
              onClick={() => animeClickHandler(inde)}
              keys={inde}
            >
              <div>{inde}</div>
            </li>
          );
        })}
      </ul>
      {database[meaning].map(function (inde) {
        return (
          <li className="mov">
            <div className="movie">
              Movie:<span className="mvi">{inde.movie}</span>
            </div>
            <div classNam="rating">
              Imdb Rating: <span className="mvi">{inde.Imdb}</span>
            </div>
          </li>
        );
      })}
    </div>
  );
}

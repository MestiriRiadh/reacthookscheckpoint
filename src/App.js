import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddMovie from "./componment/AddMovie";
import Filter from "./componment/Filter";
import MovieList from "./componment/MovieListe";
function App() {
  const [view, setView] = useState(false);
  const [stars, setStars] = useState(1);
  const starschange = (num) => {
    setStars(num);
  };
  const [text, setText] = useState("");
  const handelchange = (title) => {
    setText(title);
  };
  const [movies, setMovies] = useState([
    {
      overview:
        "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      poster_path:
        "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:600/h:888/q:75/https://bleedingcool.com/wp-content/uploads/2021/03/godzilla_vs_kong_ver12_xlg.jpg",
      title: "Godzilla vs. Kong",
      vote_average: 5,
    },
    {
      overview:
        "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      poster_path:
        "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      title: "Zack Snyder's Justice League",
      vote_average: 4,
    },
    {
      overview:
        "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
      poster_path:
        "https://static.wikia.nocookie.net/rayaandthelastdragon/images/c/c3/Raya_%26_The_Last_Dragon_Premier_%26_Theater_Poster.jpg",
      title: "Raya and the Last Dragon",
      vote_average: 3,
    },
    {
      overview:
        "Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.",
      poster_path:
        "https://i0.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2021/02/Jonas.jpeg",
      title: "Chaos Walking",
      vote_average: 5,
    },
    {
      overview:
        "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
      poster_path:
        "https://comic.systems/images/WarnerBros/TomEtJerryLeFilm/TomEtJerryLeFilm-affiche-12671",
      title: "Tom & Jerry",
      vote_average: 5,
    },
    {
      overview:
        "Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.",
      poster_path:
        "https://m.media-amazon.com/images/M/MV5BOTZkMzlkYmItZDAyNy00NmZhLWE3MWItMzQyNDhkYzcwMTFmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      title: "Cherry",
      vote_average: 1,
    },
    {
      overview:
        "A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",
      poster_path:
        "https://amc-theatres-res.cloudinary.com/v1611925488/amc-cdn/production/2/movies/59500/59534/Poster/p_800x1200_AMC_MonsterHunter_01282021.jpg",
      title: "Monster Hunter",
      vote_average: 2,
    },
    {
      overview:
        "Transferred home after a traumatizing combat mission, a highly trained French soldier uses her lethal skills to hunt down the man who hurt her sister.",
      poster_path:
        "http://www.onrembobine.fr/wp-content/uploads/2015/07/La-Sentinelle-Dying-of-the-light-poster.jpg",
      title: "Sentinelle",
      vote_average: 3,
    },
    {
      overview:
        "A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.",
      poster_path:
        "https://comic.systems/images/WarnerBros/WW84/WW84-affiche-12581.jpg",
      title: "Wonder Woman 1984",
      vote_average: 3,
    },
    {
      overview:
        "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.",
      poster_path:
        "https://m.media-amazon.com/images/M/MV5BOTc3YzQxODMtOTIzYy00M2NlLTlmNGEtNWVhYjc4MzBkNjg4XkEyXkFqcGdeQXVyMTk1NzA1NDc@._V1_UY1200_CR99,0,630,1200_AL_.jpg",
      title: "Below Zero",
      vote_average: 5,
    },
    {
      overview:
        "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
      poster_path:
        "https://i2.wp.com/www.naijaprey.com/wp-content/uploads/2021/02/Space-Sweepers.jpg",
      title: "Space Sweepers",
      vote_average: 2,
    },
  ]);

  const addNewMovie = (movie) => {
    // setMovies(movies.concat(movie));
    setMovies([movie, ...movies]);
  };
  return (
    <div>
      {view ? (
        <AddMovie addNewMovie={addNewMovie} setView={setView} />
      ) : (
        <>
          <Filter
            handelchange={handelchange}
            starschange={starschange}
            stars={stars}
          />
          <button onClick={() => setView(!view)}>ADD NEW MOVIE</button>
          <MovieList
            movies={movies.filter(
              (el) =>
                el.vote_average >= stars &&
                el.title.toLowerCase().includes(text.toLowerCase().trim())
            )}
          />
        </>
      )}
    </div>
  );
}

export default App;

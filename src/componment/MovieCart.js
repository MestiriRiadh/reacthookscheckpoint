import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
function MovieCart(props) {
  const [isImage, setIsImage] = useState(true);

  useEffect(() => {
    setIsImage(props.movie.poster_path.match(/\.(jpg|jpeg|gif|png)/));
  }, []);

  return (
    <div className="movie col-4">
      <img
        src={
          isImage
            ? props.movie.poster_path
            : "https://critics.io/img/movies/poster-placeholder.png"
        }
        width="200"
      ></img>
      <h1>{props.movie.title}</h1>
      <ReactStars
        value={props.movie.vote_average}
        key={props.movie.title}
        count={5}
        size={25}
        edit={false}
        activeColor="#ffd700"
      />
    </div>
  );
}

export default MovieCart;

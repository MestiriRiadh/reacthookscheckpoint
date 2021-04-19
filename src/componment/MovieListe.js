import MovieCart from "./MovieCart";

function MovieList(props) {
  return (
    <div className="row">
      {props.movies.map((el, i) => (
        <MovieCart movie={el} key={i} />
      ))}
    </div>
  );
}

export default MovieList;

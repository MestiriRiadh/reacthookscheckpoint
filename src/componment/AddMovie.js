import { useState } from "react";

function AddMovie(props) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    overview: "",
    poster_path: "",
    vote_average: "",
  });
  const handelChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1>Movie Title</h1>
      <input type="text" name="title" onChange={handelChange} />
      <h1>Description</h1>
      <input type="text" name="overview" onChange={handelChange} />
      <h1>Poster URL</h1>
      <input type="text" name="poster_path" onChange={handelChange} />
      <h1>Rating</h1>
      <input type="number" name="vote_average" onChange={handelChange} />
      <button
        onClick={() => {
          props.addNewMovie(newMovie);
          props.setView(false);
        }}
      >
        Confirm
      </button>
      <button>Cancel</button>
    </div>
  );
}

export default AddMovie;

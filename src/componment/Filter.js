import ReactStars from "react-rating-stars-component";
function Filter(props) {
  return (
    <div>
      <input onChange={(e) => props.handelchange(e.target.value)} />
      <ReactStars
        count={5}
        size={25}
        value={props.stars}
        activeColor="#ffd700"
        onChange={(x) => props.starschange(x)}
      />
    </div>
  );
}

export default Filter;

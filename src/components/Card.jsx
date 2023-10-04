import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <button
        class="btn btn-danger"
        onClick={() => {
          props.onClose(props.id);
        }}
      >
        X
      </button>
      <NavLink to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </NavLink>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}

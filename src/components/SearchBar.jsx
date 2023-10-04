import { useState } from "react";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  const handleChange = (id) => {
    setSearch(id);
  };

  return (
    <div class="">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            ID
          </span>
        </div>
        <input
          type="text"
          value={search}
          class="form-control"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          class="btn btn-outline-primary"
          onClick={() => {
            props.onSearch(search);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

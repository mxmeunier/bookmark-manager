import React from "react";

function Keywords({ name, remove }) {
  return (
    <button
      onClick={() => remove(name)}
      type="button"
      className="btn btn-sm btn-outline-success"
    >
      {name}
    </button>
  );
}

export default Keywords;

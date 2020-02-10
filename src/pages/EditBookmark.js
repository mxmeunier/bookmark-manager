import React from "react";
import InputForm from "../components/InputForm";

const EditBookmark = ({ index = 0, get, update }) => {
  var bookmark = get(index);
  // Makes bookmark Object iterable with key/value
  var tupleBookmark = [];
  for (let property in bookmark) {
    tupleBookmark.push([property, bookmark[property]]);
  }

  function handleChange(e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    bookmark = Object.assign(bookmark, { [name]: value });
  }

  return (
    <form>
      {tupleBookmark.map((tuple, index) => {
        return (
          <InputForm
            key={index}
            name={tuple[0]}
            placeholder={tuple[1]}
            handler={handleChange}
          />
        );
      })}
      <button
        onClick={() => update(index, bookmark)}
        className="btn btn-primary"
      >
        Edit
      </button>
    </form>
  );
};

export default EditBookmark;

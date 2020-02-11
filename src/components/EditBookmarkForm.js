import React, { useState } from "react";
import InputForm from "./InputForm";
import Bookmark from "../services/bookmark";
import { navigate } from "@reach/router";

const EditBookmarkForm = ({ index = 0, get, update }) => {
  var [bookmark, setBookmark] = useState(get(index));
  // Makes bookmark Object iterable with key/value
  var tupleBookmark = Bookmark.transformToIterable(bookmark);

  function handleInputChange(e) {
    var { name, value } = e.target;
    setBookmark({ ...bookmark, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    update(index, bookmark);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      {tupleBookmark.map((tuple, index) => {
        return (
          <InputForm
            key={index}
            name={tuple[0]}
            placeholder={tuple[1]}
            handler={handleInputChange}
          />
        );
      })}
      <button className="btn btn-primary">Edit</button>
    </form>
  );
};

export default EditBookmarkForm;

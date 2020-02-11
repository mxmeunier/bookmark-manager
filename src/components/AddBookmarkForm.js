import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import Bookmark from "../services/bookmark";
import { navigate } from "@reach/router";

const AddBookmarkForm = ({ add }) => {
  var [type, setType] = useState("image");
  var [bookmark, setBookmark] = useState(Bookmark.createImageBookmark());
  // Makes bookmark Object iterable with key/value
  var [tuplesBookmark, setTuplesBookmark] = useState(Object.entries(bookmark));

  useEffect(() => {
    if (type == "image") setBookmark(Bookmark.createImageBookmark());
    else setBookmark(Bookmark.createVideoBookmark());
  }, [type]);

  useEffect(() => {
    setTuplesBookmark(Object.entries(bookmark));
  }, [bookmark]);

  function handleInputChange(e) {
    var { name, value } = e.target;
    setBookmark({ ...bookmark, [name]: value });
  }

  function HandleSelectChange(e) {
    setType(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    add(bookmark);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputType">type</label>
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select
          value={type}
          onChange={HandleSelectChange}
          id="inputType"
          className="form-control"
        >
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      {tuplesBookmark.map((tuple, index) => {
        return (
          <InputForm
            key={index}
            name={tuple[0]}
            placeholder={tuple[1]}
            handler={handleInputChange}
          />
        );
      })}
      <button className="btn btn-success">Add</button>
    </form>
  );
};

export default AddBookmarkForm;

import React, { useState } from "react";
import { navigate } from "@reach/router";
import InputForm from "./InputForm";
import Keywords from "./Keywords";

const EditBookmarkForm = ({ index = 0, get, update }) => {
  var [bookmark, setBookmark] = useState(get(index));
  console.log(bookmark);
  var [keyword, setKeyword] = useState("");
  // Makes bookmark Object iterable with key/value
  var tupleBookmark = Object.entries(bookmark);
  var keywords = bookmark.keywords || [];

  function handleInputChange(e) {
    var { name, value } = e.target;
    setBookmark({ ...bookmark, [name]: value });
  }

  function handleKeywordChange(e) {
    var { value } = e.target;
    setKeyword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    update(index, bookmark);
    navigate("/");
  }

  function addKeyword() {
    if (bookmark.keywords)
      setBookmark({ ...bookmark, keywords: [...bookmark.keywords, keyword] });
    else setBookmark({ ...bookmark, keywords: [keyword] });
  }

  function removeKeyword(name) {
    function filterOutByName(v) {
      return v != name;
    }

    setBookmark({
      ...bookmark,
      keywords: bookmark.keywords.filter(filterOutByName)
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {tupleBookmark.map((tuple, index) => {
        // Keywords display is handle seperatly
        if (tuple[0] == "keywords") return;
        return (
          <InputForm
            key={index}
            name={tuple[0]}
            placeholder={tuple[1]}
            handler={handleInputChange}
          />
        );
      })}
      <div className="form-group">
        {keywords.length > 0 ? (
          <label htmlFor="keywords">Click on a keyword to remove it : </label>
        ) : null}
        <div>
          {keywords.map((keyword, index) => {
            return (
              <Keywords key={index} name={keyword} remove={removeKeyword} />
            );
          })}
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add a keyword ..."
            aria-label="Keyword"
            value={keyword}
            onChange={handleKeywordChange}
          />
          <div className="input-group-append">
            <button
              onClick={addKeyword}
              className="btn btn-success"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-primary">Edit</button>
      <button onClick={() => navigate("/")} className="btn btn-light">
        Cancel
      </button>
    </form>
  );
};

export default EditBookmarkForm;

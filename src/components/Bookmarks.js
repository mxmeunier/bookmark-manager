import React from "react";
import { Link } from "@reach/router";

const Bookmarks = ({ bookmarks, remove }) => {
  return (
    <div>
      <ul className="list-group">
        {bookmarks.map((bookmark, index) => (
          <li key={index} className="list-group-item">
            <a href={bookmark.url}>{bookmark.title}</a>
            {`, ${bookmark.author} , ${bookmark.addedDate.toLocaleString()} `}
            <Link to={`/edit/${index}`}>
              <button className="btn btn-light">Edit</button>
            </Link>
            <button className="btn btn-danger" onClick={() => remove(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <Link to={`/create`}>
        <button className="btn btn-success">Create</button>
      </Link>
    </div>
  );
};

export default Bookmarks;

import React, { useState } from "react";
import { Link } from "@reach/router";
import Pagination from "./Pagination";

const Bookmarks = ({ bookmarks, remove }) => {
  const BOOKMARKS_PER_PAGE = 2;
  var [currentPage, setCurrentPage] = useState(1);

  var indexOfLastBookmark = currentPage * BOOKMARKS_PER_PAGE;
  var indexOfFirstBookmark = indexOfLastBookmark - BOOKMARKS_PER_PAGE;
  var currentBookmarks = bookmarks.slice(
    indexOfFirstBookmark,
    indexOfLastBookmark
  );

  return (
    <div>
      <ul className="list-group">
        {currentBookmarks.map((bookmark, index) => (
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
      <Pagination
        bookmarksPerPage={BOOKMARKS_PER_PAGE}
        totalBookmarks={bookmarks.length}
        paginate={setCurrentPage}
      />
      <Link to={`/create`}>
        <button className="btn btn-success">Create</button>
      </Link>
    </div>
  );
};

export default Bookmarks;

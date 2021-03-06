import React, { useState } from "react";
import { Link } from "@reach/router";
import Pagination from "./Pagination";
import Video from "./Video";
import Photo from "./Photo";

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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Added Date</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {currentBookmarks.map((bookmark, index) => (
            <tr key={index}>
              <td>
                {bookmark.hasOwnProperty("duration") ? (
                  <Video
                    url={bookmark.url}
                    title={bookmark.title}
                    width={bookmark.width}
                    height={bookmark.height}
                  />
                ) : (
                  <Photo
                    url={bookmark.url}
                    alt={bookmark.title}
                    width={bookmark.width}
                    height={bookmark.height}
                  />
                )}
              </td>
              <td>{bookmark.title}</td>
              <td>{bookmark.author}</td>
              <td>{bookmark.addedDate}</td>
              <td>
                <Link to={`/edit/${index}`}>
                  <button className="btn btn-light">Edit</button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    remove(index + BOOKMARKS_PER_PAGE * (currentPage - 1))
                  }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

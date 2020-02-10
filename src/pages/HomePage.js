import React, { useState } from "react";
import { Router } from "@reach/router";
import EditBookmark from "./EditBookmark";
import Header from "./Header";
import Bookmarks from "../components/Bookmarks";
import Footer from "./Footer";
import getLinks from "../services/mock-links";

const HomePage = () => {
  var [bookmarks, setBookmarks] = useState(getLinks());
  // const [currentPage, setCurrentPage] = useState(1);
  // const [BookmarksPerPage, setBookmarksPerPage] = useState(10);

  function getBookmark(index) {
    return bookmarks[index];
  }

  function addBookmark(bookmark) {
    bookmarks.push(bookmark);
  }

  function removeBookmark(index) {
    if (bookmarks.length == 1) return setBookmarks([]);
    return setBookmarks(bookmarks.splice(index - 1));
  }

  function updateBookmark({ index, bookmark }) {
    var [updateBookmarks] = [...bookmarks];
    updateBookmarks[index] = bookmark;
  }

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <Router>
          <Bookmarks
            path="/"
            bookmarks={bookmarks}
            remove={removeBookmark}
            add={addBookmark}
          />
          {/* I'm using the array index instead of the usual id in real app CRUD */}
          <EditBookmark
            path="/edit/:index"
            get={getBookmark}
            update={updateBookmark}
          />
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

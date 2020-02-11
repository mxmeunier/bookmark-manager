import React, { useState } from "react";
import { Router } from "@reach/router";
import Header from "./Header";
import Bookmarks from "../components/Bookmarks";
import EditBookmarkForm from "../components/EditBookmarkForm";
import AddBookmarkForm from "../components/AddBookmarkForm";
import Footer from "./Footer";
import getLinks from "../services/mock-links";

const HomePage = () => {
  var [bookmarks, setBookmarks] = useState(getLinks());

  function getBookmark(index) {
    return bookmarks[index];
  }

  function addBookmark(bookmark) {
    return setBookmarks([...bookmarks, bookmark]);
  }

  function removeBookmark(index) {
    if (bookmarks.length == 1) return setBookmarks([]);
    return setBookmarks(bookmarks.splice(index, 1));
  }

  function updateBookmark(index, bookmark) {
    var newBookmarks = bookmarks;
    newBookmarks[index] = bookmark;
    return setBookmarks(newBookmarks);
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
          <EditBookmarkForm
            path="/edit/:index"
            get={getBookmark}
            update={updateBookmark}
          />
          <AddBookmarkForm path="/create" add={addBookmark} />
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

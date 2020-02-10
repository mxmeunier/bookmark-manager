// var linkObject = {
//   url: null,
//   title: null,
//   author: null,
//   addedDate: null
// };

// var videoObject = Object.assign(Object.create(linkObject), {
//   with: null,
//   height: null,
//   duration: null
// });

// var imageObject = Object.assign(Object.create(linkObject), {
//   with: null,
//   height: null
// });

// function createLink({ url, title, author, addedDate }) {
//   return {
//     url: url,
//     title: title,
//     author: author,
//     addedDate: addedDate
//   };
// }

var mockVideo = {
  url: "https://vimeo.com/241891603",
  title: "Bon Voyage",
  author: "Fabio Friedli",
  addedDate: "08/11/2017"
};

var mockImage = {
  url:
    "https://www.flickr.com/photos/lordseixas/49491667983/in/explore-2020-02-05/",
  title: "The rescue",
  author: "Lord Seixas",
  addedDate: "15/01/2020"
};

function mockLinks() {
  return [mockVideo, mockImage];
}

export default mockLinks;

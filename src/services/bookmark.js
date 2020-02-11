var factory = {
  createVideoBookmark,
  createImageBookmark
};

var common = {
  url: null,
  title: null,
  author: null,
  addedDate: null
};

var image = {
  with: null,
  height: null
};
var video = {
  with: null,
  height: null,
  duration: null
};

function createVideoBookmark() {
  return Object.assign({ ...common }, video);
}

function createImageBookmark() {
  return Object.assign({ ...common }, image);
}

export default factory;

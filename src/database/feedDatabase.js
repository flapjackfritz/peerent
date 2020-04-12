import { KEYS } from "./keys";
import { getTimestamp } from "../util";

const localStorageObjects = Object.freeze({
  save: function saveToStorage(key, obj) {
    return localStorage.setItem(key, JSON.stringify(obj));
  },
  load: function loadFromStorage(key) {
    const loadedObj = localStorage.getItem(key) ?? "{}";
    return JSON.parse(loadedObj);
  },
});

export const FeedDatabase = {
  postToFeed: function postToFeed(post) {
    const timestamp = getTimestamp();
    const myFeed = localStorageObjects.load(KEYS.myFeed);
    myFeed[timestamp] = { ...post, comments: {}, timestamp };
    localStorageObjects.save(KEYS.myFeed, myFeed);
    return myFeed;
  },
  loadMyFeed: function loadMyFeed() {
    return localStorageObjects.load(KEYS.myFeed);
  },
  commentOnPost: function addCommentToPost(postId, comment) {
    const myFeed = this.loadMyFeed();
    if (!myFeed[postId]) throw new Error(`Post not found for Post${postId}`);
    myFeed[postId].comments[comment.id] = comment;
    localStorageObjects.save(KEYS.myFeed, myFeed);
    return myFeed;
  },
};

export { FeedDatabase } from "./feedDatabase";
export { KEYS, generateKey } from "./keys";
export { IdentityDatabase } from "./identityDatabase";

export const localStorageObjects = Object.freeze({
  save: function saveToStorage(key, obj) {
    return localStorage.setItem(key, JSON.stringify(obj));
  },
  load: function loadFromStorage(key) {
    const loadedObj = localStorage.getItem(key) ?? "{}";
    return JSON.parse(loadedObj);
  },
});

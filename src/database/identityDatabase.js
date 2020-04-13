import { localStorageObjects, KEYS, generateKey } from "./";

export const IdentityDatabase = Object.freeze({
  getMyIdentity: function getMyIdentityFromStorage() {
    let myIdentity = localStorageObjects.load(KEYS.identity);
    if (myIdentity.key === undefined) {
      myIdentity = { key: generateKey(), other: {} };
      localStorageObjects.save(KEYS.identity, myIdentity);
    }
    return myIdentity;
  },
  updateMyIdentity: function updateMyIdentity(updatedIdentity) {
    if (!updatedIdentity || typeof updatedIdentity !== "object")
      throw new Error("You didn't provide an updated identity");

    // prevent updating the key
    if (Object.prototype.hasOwnProperty.call(updatedIdentity, "key"))
      delete updatedIdentity.key;

    const myIdentity = this.getMyIdentity();
    const newIdentity = { ...myIdentity, ...updatedIdentity };
    localStorageObjects.save(KEYS.identity, newIdentity);
    return newIdentity;
  },
});

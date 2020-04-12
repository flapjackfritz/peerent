import crypto from "crypto";

const generateKey = function generateKey256() {
  return crypto.randomBytes(32).toString("hex");
};

export const KEYS = Object.freeze({
  identity: "MY-IDENTITY-KEY",
  myFeed: "MY-FEED",
});

export const getMyIdentity = function getMyIdentity() {
  let myIdentity = localStorage.getItem(KEYS.identity);
  if (myIdentity === null) {
    myIdentity = { key: generateKey(), name: "", other: {} };
    localStorage.setItem(KEYS.identity, myIdentity);
  }
};

export const updateMyIdentity = function updateMyIdentity(updatedIdentity) {
  if (!updatedIdentity || typeof updatedIdentity !== "object")
    throw new Error("You didn't provide an updated identity");
  if (Object.prototype.hasOwnProperty.call(updatedIdentity, "key"))
    throw new Error("You cannot update your identity key");

  const myIdentity = getMyIdentity();
  const newIdentity = { ...myIdentity, ...updatedIdentity };
  localStorage.setItem(KEYS.identity, newIdentity);
  return newIdentity;
};

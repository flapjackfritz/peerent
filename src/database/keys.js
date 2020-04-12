import crypto from "crypto";

export const generateKey = function generateKey256() {
  return crypto.randomBytes(32).toString("hex");
};

export const KEYS = Object.freeze({
  identity: "MY-IDENTITY-KEY",
  myFeed: "MY-FEED",
});

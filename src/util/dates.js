export const getTimestamp = function getTimeUtcSinceEpochInSeconds() {
  const now = new Date();
  return Math.round(now.getTime() / 1000); //seconds since epoch
};

import WebTorrent from "webtorrent";

let client;
if (WebTorrent.WEBRTC_SUPPORT) {
  client = new WebTorrent();
  console.log("WebTorrent client has loaded.");
} else {
  console.error(
    "RTC is UNSUPPORTED, THUS THIS APP IS NOT AVAILABLE. Use a good browser, not whatever this is."
  );
  client = false;
}
export default client;
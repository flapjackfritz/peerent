import WebTorrent from "webtorrent";
import { IdentityDatabase } from "../database";
let webTorrentClient;

if (WebTorrent.WEBRTC_SUPPORT) {
  webTorrentClient = new WebTorrent();
} else {
  console.error(
    "RTC is UNSUPPORTED, THUS THIS APP IS NOT AVAILABLE. Use a good browser, not whatever this is."
  );
  webTorrentClient = false;
}

export function IdentityStore() {
  const identityStore = IdentityDatabase.getMyIdentity();

  let _torrentFile = identityStore.torrentFile;
  let _magnetURI = identityStore.magnetURI;
  let _identityTorrent = null;
  let peerTorrents = [];
  window.torrents = webTorrentClient.torrents;

  // If there's no torrent file, create one, and seed
  if (_torrentFile === undefined) {
    const buf = new Buffer(JSON.stringify(identityStore));
    buf.name = "peerent_identity";
    webTorrentClient.seed(buf, { name: identityStore.key }, (torrent) => {
      _identityTorrent = torrent;
      window.torrent = torrent;
      identityStore.magnetURI = torrent.magnetURI;
      identityStore.torrentFile = torrent.torrentFile;
      _torrentFile = torrent.torrentFile;
      IdentityDatabase.updateMyIdentity(identityStore);
    });
  } else {
    const buf = new Buffer(_torrentFile);
    webTorrentClient.add(buf, {}, (torrent) => {
      // Torrents can contain many files. Let's use the .mp4 file
      const file = torrent.files[0];
      file.appendTo("#temp");
      const _identityFile = (_identityTorrent = torrent);
    });
  }

  identityStore.addPeer = function addPeerFromMagnetURI(magnetURI) {
    webTorrentClient.add(magnetURI, {}, (torrent) => {
      const files = torrent.files;
      console.log(files);
      peerTorrents.push(torrent);
    });
  };

  identityStore.progress = function displayProgress() {
    return webTorrentClient.progress;
  };

  window.identityStore = identityStore;

  return identityStore;
}

export default webTorrentClient;

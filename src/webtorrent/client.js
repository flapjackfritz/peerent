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
  let _torrent = null;

  // If there's no torrent file, create one, and seed
  if (_torrentFile === undefined) {
    const buf = new Buffer(JSON.stringify(identityStore));
    buf.name = "peerent_identity";
    webTorrentClient.seed(
      buf,
      { name: identityStore.key, announceList: [] },
      (torrent) => {
        _torrent = torrent;
        window.torrent = torrent;
        identityStore.magnetURI = torrent.magnetURI;
        identityStore.torrentFile = torrent.torrentFile;
        _torrentFile = torrent.torrentFile;
        IdentityDatabase.updateMyIdentity(identityStore);
      }
    );
  } else {
    const buf = new Buffer(_torrentFile);
    webTorrentClient.add(buf, {}, (torrent) => {
      console.log(torrent);
      console.log(torrent.pieces);
      _torrent = torrent;
    });
  }

  window.identityStore = identityStore;
  window.torrents = webTorrentClient.torrents;

  return identityStore;
}

export default webTorrentClient;

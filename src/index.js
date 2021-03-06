import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppFailed from "./components/AppFailed";
import * as serviceWorker from "./serviceWorker";
import webTorrentClient from "./webtorrent/client";
import { IdentityStore } from "./webtorrent";
// BEGIN TEST AREA
// END TEST AREA
const identityStore = new IdentityStore();

if (webTorrentClient) {
  ReactDOM.render(
    <App identityStore={identityStore} />,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(<AppFailed />, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

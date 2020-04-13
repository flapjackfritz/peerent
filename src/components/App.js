import React, { useEffect, useState } from "react";
import { AppBar, PeersFeed, SideBar } from "./";
import { FeedDatabase, IdentityDatabase } from "../database";
import {
  Box,
  Button,
  Heading,
  Grommet,
  Main,
  ResponsiveContext,
} from "grommet";
import { Menu } from "grommet-icons";
const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App({ identityStore }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [myFeed, setMyFeed] = useState([]);

  useEffect(() => {
    const loadedFeed = FeedDatabase.loadMyFeed();
    const orderedFeed = Object.keys(loadedFeed)
      .sort()
      .map((feedKey) => loadedFeed[feedKey]);
    setMyFeed(orderedFeed);
  }, []);

  const postToFeed = function postToFeedAndStore(post) {
    const updatedFeed = FeedDatabase.postToFeed(post);
    const orderedFeed = Object.keys(updatedFeed)
      .sort()
      .map((feedKey) => updatedFeed[feedKey]);
    setMyFeed(orderedFeed);
  };

  const updateIdentity = function saveIdentityUpdate(identity) {
    IdentityDatabase.updateMyIdentity(identity);
  };

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                Peerent
              </Heading>
              <div id="temp" />
              <Button
                icon={<Menu />}
                onClick={() => setShowSideBar(!showSideBar)}
              />
            </AppBar>
            <Main flex direction="row" justify="around" background="light-1">
              <Box id="asdf" fill="horizontal" align="center" margin="medium">
                <PeersFeed peerPosts={myFeed} />
              </Box>
              <SideBar
                identity={identityStore}
                postToFeed={postToFeed}
                updateIdentity={updateIdentity}
                setShowSideBar={setShowSideBar}
                showSideBar={showSideBar}
                size={size}
              />
            </Main>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;

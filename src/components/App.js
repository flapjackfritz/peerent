import React, { useState } from "react";
import { AppBar, PeersFeed, SideBar } from "./";
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

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const body =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamfacilisis porttitor orci sit amet semper. Nulla laoreet diam nec lacusporta faucibus a nec ipsum. Vestibulum rhoncus diam eget loremplacerat iaculis. Vestibulum condimentum arcu eget libero commodo, etfinibus erat rhoncus. Praesent id pharetra nisl. Suspendisse nec exvel libero aliquam luctus vitae ornare tellus. Integer non facilisisipsum, venenatis posuere risus. Praesent posuere augue ac lectusfinibus interdum. Donec fermentum nulla at odio aliquam blandit.Aenean luctus egestas eleifend. Nullam scelerisque malesuada augue, utposuere sem luctus vitae. Phasellus eu felis tellus. Donec sed lorempretium mi lobortis laoreet eu ut nunc. Mauris non fermentum diam.";
  const comments = [
    { name: "Kelly", body: "Varius sit amet mattis vulputate enim. " },
    {
      name: "Scott",
      body:
        "Diam in arcu cursus euismod quis viverra. Pretium vulputate sapien nec sagittis.",
    },
    {
      name: "Robert",
      body:
        "Phasellus eu felis tellus. Donec sed lorempretium mi lobortis laoreet eu ut nunc.",
    },
  ];
  const peerPost = { name: "Tommy", body, comments };
  const peerPosts = [peerPost, peerPost, peerPost];
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                Peerent
              </Heading>
              <Button
                icon={<Menu />}
                onClick={() => setShowSideBar(!showSideBar)}
              />
            </AppBar>
            <Main flex direction="row" justify="around" background="light-1">
              <Box align="center" margin="medium">
                <PeersFeed peerPosts={peerPosts} />
              </Box>
              <SideBar
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

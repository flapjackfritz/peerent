import React from "react";
import { NewPost, Identity } from "./";
import { Box, Button, Layer } from "grommet";
import { FormClose } from "grommet-icons";

export const SideBar = ({
  postToFeed,
  showSideBar,
  setShowSideBar,
  size,
  identity,
  updateIdentity,
}) => {
  const handleSubmit = function handleSubmitPost({ value }) {
    if (value !== "") postToFeed({ name: "Tommy Fritz", body: value });
  };

  const hideSideBar = function hideSideBar() {
    setShowSideBar(false);
  };
  return size !== "small" ? (
    <Box width="medium" margin="medium" pad="medium" background="light-2">
      <Identity
        name={identity.name}
        addPeer={identity.addPeer}
        identityKey={identity.key}
        updateIdentity={updateIdentity}
        magnetURI={identity.magnetURI}
      />
      <NewPost handler={handleSubmit} />
    </Box>
  ) : (
    showSideBar && (
      <Layer>
        <Box background="light-2" tag="header" align="center" direction="row">
          <Button icon={<FormClose />} onClick={hideSideBar} />
        </Box>
        <Identity identity={identity} />
        <NewPost handler={handleSubmit} />
      </Layer>
    )
  );
};

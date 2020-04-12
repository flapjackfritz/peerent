import React from "react";
import { PeerPost } from "./PeerPost";
import { Box, Paragraph } from "grommet";

export const PeersFeed = ({ peerPosts }) => {
  if (peerPosts.length === 0)
    return (
      <Box pad="medium" background="light-2">
        <Paragraph>You have no posts to view</Paragraph>
      </Box>
    );
  return peerPosts.map((peerPost) => {
    return (
      <Box fill="horizontal" key={peerPost.timestamp}>
        <PeerPost
          name={peerPost.name}
          body={peerPost.body}
          responses=""
          comments={peerPost.comments ?? []}
        />
      </Box>
    );
  });
};

import React from "react";
import { PeerPost } from "./PeerPost";

export const PeersFeed = ({ peerPosts }) => {
  return peerPosts.map((peerPost, index) => {
    return (
      <PeerPost
        key={index}
        name={peerPost.name}
        body={peerPost.body}
        responses=""
        comments={peerPost.comments}
      />
    );
  });
};

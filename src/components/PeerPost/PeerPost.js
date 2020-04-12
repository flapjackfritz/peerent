import React from "react";
import { PostComments } from "./";
import { Box, Grid, Paragraph } from "grommet";
import { Like, Dislike, Favorite } from "grommet-icons";

export const PeerPost = ({ name, body, comments, responses }) => {
  return (
    <Grid
      rows={["xxsmall", "flex", "flex"]}
      columns={["xxsmall", "flex", "flex"]}
      gap="xsmall"
      areas={[
        { name: "header", start: [0, 0], end: [2, 0] },
        { name: "nav", start: [0, 1], end: [0, 1] },
        { name: "main", start: [1, 1], end: [2, 1] },
        { name: "comments", start: [0, 2], end: [2, 2] },
      ]}
      margin={{ vertical: "small" }}
    >
      <Box pad="small" gridArea="header" background="brand">
        {name} wrote:
      </Box>
      <Box gap="medium" pad="small" gridArea="nav" background="light-5">
        <Favorite size="medium" />
        <Like size="medium" />
        <Dislike size="medium" />
      </Box>
      <Box pad="xsmall" gridArea="main" background="light-2">
        <Paragraph>{body}</Paragraph>
      </Box>
      <PostComments gridArea="comments" comments={comments} />
    </Grid>
  );
};

import React, { useState } from "react";
import { PostComment } from "./";

import { Box, Collapsible, Grid, Text } from "grommet";
import { Up, Down } from "grommet-icons";

export const PostComments = ({ comments, ...rest }) => {
  const [showComments, setShowComments] = useState(false);
  const toggleSidebar = function handleToggleSidebar() {
    setShowComments(!showComments);
  };
  const orderedComments = Object.keys(comments).map(
    (commentId) => comments[commentId]
  );

  return (
    <Box {...rest}>
      <Box onClick={toggleSidebar}>
        {showComments ? (
          <Box direction="row">
            <Box margin={{ right: "small" }}>
              <Up pad="xsmall" />
            </Box>
            <Text>Hide Comments</Text>
          </Box>
        ) : (
          <Box direction="row">
            <Box margin={{ right: "small" }}>
              <Down pad="xsmall" />
            </Box>
            <Text>Show Comments</Text>
          </Box>
        )}
      </Box>
      <Collapsible direction="vertical" open={showComments}>
        <Grid rows="auto" columns={["auto"]}>
          {orderedComments.map((comment) => (
            <PostComment key={comment.name} comment={comment} />
          ))}
        </Grid>
      </Collapsible>
    </Box>
  );
};

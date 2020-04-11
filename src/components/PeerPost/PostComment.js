import React from "react";
import { Box, Text, Paragraph } from "grommet";

export const PostComment = ({ comment }) => {
  return (
    <Box margin={{ vertical: "xxsmall" }}>
      <Box pad="xsmall" background="brand">
        <Text>{comment.name}:</Text>
      </Box>
      <Box pad="xsmall" background="light-3">
        <Paragraph>{comment.body}</Paragraph>
      </Box>
    </Box>
  );
};

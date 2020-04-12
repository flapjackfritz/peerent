import React from "react";
import { Box, Form, FormField, Button, TextArea } from "grommet";

export const NewPost = ({ handler }) => {
  const [value, setValue] = React.useState("");
  const handleSubmit = function handleSubmitPost() {
    handler({ value });
    setValue("");
  };
  const handleChange = function handleChangePost({ target: { value } }) {
    setValue(value);
  };

  return (
    <Box flex align="center">
      <Form onReset={() => setValue("")} onSubmit={handleSubmit}>
        <FormField name="write" label="Write">
          <TextArea
            placeholder="write what you want to say here"
            value={value}
            onChange={handleChange}
          />
        </FormField>
        <Box direction="row" gap="medium">
          <Button
            disabled={value === ""}
            type="submit"
            primary
            label="Submit"
          />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
    </Box>
  );
};

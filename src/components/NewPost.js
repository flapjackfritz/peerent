import React from "react";
import { Box, Form, FormField, Button, TextArea } from "grommet";

export const NewPost = ({ handler }) => {
  const [value, setValue] = React.useState("");
  const handleSubmit = function handleSubmitWriting() {
    handler({ value });
    setValue("");
  };
  const handleChange = function handleChangeWriting({ target: { value } }) {
    setValue(value);
  };

  return (
    <Box background="light-2" flex align="center" justify="center">
      <Form onReset={() => setValue("")} onSubmit={handleSubmit}>
        <FormField name="write" label="Write">
          <TextArea
            placeholder="write what you want to say here"
            value={value}
            onChange={handleChange}
          />
        </FormField>
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
    </Box>
  );
};

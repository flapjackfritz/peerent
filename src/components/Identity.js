import React, { useState } from "react";
import { Box, Button, Form, FormField, Layer, Text, TextInput } from "grommet";
import { View } from "grommet-icons";

export const Identity = ({ name, identityKey, updateIdentity }) => {
  const [value, setValue] = useState("");
  const handleSubmit = function handleSubmitName() {
    if (value !== "") {
      updateIdentity({ name: value });
      setValue("");
    }
  };
  const handleChange = function handleChangeWriting({ target: { value } }) {
    setValue(value);
  };

  const [showKey, setShowKey] = React.useState(false);

  return (
    <Box flex align="center">
      <Text>{name ?? "Please set your name."}</Text>
      <Box pad="small">
        {showKey && (
          <Layer
            onEsc={() => setShowKey(false)}
            onClickOutside={() => setShowKey(false)}
          >
            <Box margin="medium">
              <Text>Your Identity: {identityKey}</Text>
              <Button
                margin="small"
                label="close"
                onClick={() => setShowKey(false)}
              />
            </Box>
          </Layer>
        )}

        <Button
          onClick={() => setShowKey(true)}
          icon={<View />}
          label="Identity Key"
        />
      </Box>
      <Form onReset={() => setValue("")} onSubmit={handleSubmit}>
        <FormField name="name">
          <TextInput
            placeholder="Set name here"
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

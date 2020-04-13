import React, { useState } from "react";
import { Box, Button, Form, FormField, Layer, Text, TextInput } from "grommet";
import { View, UserAdd } from "grommet-icons";

export const Identity = ({
  name,
  identityKey,
  updateIdentity,
  magnetURI,
  addPeer,
}) => {
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

  const [peerValue, setPeerValue] = useState("");
  const handleChangePeer = function handleChangePeer({ target: { value } }) {
    setPeerValue(value);
  };
  const handleAddPeer = function handleAddPeer() {
    if (peerValue !== "") {
      addPeer(peerValue);
      setPeerValue("");
      setShowAddPeer(false);
    }
  };
  const resetHandlePeer = function resetHandlePeer() {
    setPeerValue("");
    setShowAddPeer(false);
  };

  const [showKey, setShowKey] = React.useState(false);
  const [showAddPeer, setShowAddPeer] = React.useState(false);

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
              <Text>MagnetURI: {magnetURI}</Text>
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
      <Box pad="small">
        {showAddPeer && (
          <Layer
            onEsc={() => setShowAddPeer(false)}
            onClickOutside={() => setShowAddPeer(false)}
          >
            <Box margin="medium">
              <Form onReset={resetHandlePeer} onSubmit={handleAddPeer}>
                <FormField name="name">
                  <TextInput
                    placeholder="Paste MagnetURI here"
                    value={peerValue}
                    onChange={handleChangePeer}
                  />
                </FormField>
                <Box direction="row" gap="medium">
                  <Button
                    disabled={peerValue === ""}
                    type="submit"
                    primary
                    label="Submit"
                  />
                  <Button type="reset" label="Reset" />
                </Box>
              </Form>
            </Box>
          </Layer>
        )}
        <Button
          onClick={() => setShowAddPeer(true)}
          icon={<UserAdd />}
          label="Add Peer"
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

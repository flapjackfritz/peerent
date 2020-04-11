import React from "react";
import { List } from "grommet";

export const PeersList = ({ peers }) => <List primaryKey="name" data={peers} />;

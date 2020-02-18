import React from "react";
import { List } from "semantic-ui-react";
import { toTitleCase } from "../../../../utils/utils";

const DietLabelsItem = ({ item }) => {
  return <List.Item>{toTitleCase(item)}</List.Item>;
};

export default DietLabelsItem;

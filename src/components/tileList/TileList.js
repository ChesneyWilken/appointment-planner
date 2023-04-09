import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  // this will access the data for any arry passed as an argument to this component
  const { data } = props;

  // map extracts contact information from the data.
  // the first argument of map represents the current object and transforms each element to a tile component
  // the second represents the index of the current object because I am using this as a key. There is a better way to do this using UUID 
  let contactList = data.map((item, index) => {
    return  <Tile key={index} item={item}/>;
  });

  return (
    <div>
      {contactList}
    </div>
  );
};

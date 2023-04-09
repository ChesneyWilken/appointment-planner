import React from "react";

export const Tile = (props) => {

  const { item } = props; // item represents an object being passed in from TileList

  const information = Object.values(item); 
  console.log(information);

  // the values method will return an array containing only the values of the properties of the object passed in as a prop in this case data which is item
  const renderedInfo = information.map((value, index) => {
    return <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>{value}</p>;
  });

  
  return (
    <div className="tile-container">
      {renderedInfo}     
    </div>
  );
};

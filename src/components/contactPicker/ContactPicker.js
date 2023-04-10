import React from "react";

export const ContactPicker = ({contacts, handleContact}) => {
  return (
    <input type="select" onChange={handleContact}/>
  );
};

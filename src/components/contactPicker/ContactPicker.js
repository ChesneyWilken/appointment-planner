import React from "react";

export const ContactPicker = ({contacts, handleContact}) => {

  const information = Object.values(contacts);

  const contactOptions = information.map((value, index) => {
    return (
      <option value={value.name} key={index}>{value.name}</option>
    )
  });

  return (
    <select name="contact-select" onChange={handleContact}>
      <option value="" defaultValue="selected"></option>
      {contactOptions}
    </select>
  );
};

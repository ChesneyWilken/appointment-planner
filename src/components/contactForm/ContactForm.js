import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleName = (event) => {
    setName(event.target.value);

  }

  const handlePhone = (event) => {
    setPhone(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}> 
      <label htmlFor="name">Name:</label>
      <input type="text" value={name} onChange={handleName} placeholder="Contact Name"/>
      <label htmlFor="phone">Phone:</label>
      <input type="tel" value={phone} onChange={handlePhone} placeholder="Phone Number" pattern="[0-9]\d+" />
      <label htmlFor="email">Email:</label>
      <input type="emal" value={email} onChange={handleEmail} placeholder="Email"/>
      <input type="submit" value={'Add Contact'} />
    </form>
  );
};

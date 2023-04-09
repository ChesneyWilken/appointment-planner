import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-GB")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle = (event) =>{
    setTitle(event.target.value);
  }

  const handleContact = (event) =>{
    setContact(event.target.value);
  }

  const handleDate = (event) =>{
    setDate(event.target.value);
  }

  const handleTime = (event) =>{
    setTime(event.target.value);
  }



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Title">Title:</label>
      <input type="text" value={title} onChnage={handleTitle} placeholder="Title"/>

      <label htmlFor="Contact">Contact:</label>
      <input type="text" value={contact} onChange={handleContact} placeholder="change me to the component once it's built"/>

      <label htmlFor="Date">Date:</label>
      <input type="date" value={date} onChange={handleDate}/>

      <label htmlFor="Time">Time:</label>
      <input type="time" value={time} onChange={handleTime} min={getTodayString}/>

      <input type="submit" value={'Add Appointment'} />
    </form>
  );
};

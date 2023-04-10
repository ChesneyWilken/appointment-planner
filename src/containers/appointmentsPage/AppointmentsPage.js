import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, addAppointments, contacts }) => {
  //Define state variables for appointment info

  /*
  The callback functions (setTile, setContact ect.) below need to be passed to the
  <AppointmentForm /> component in the return statement so that they can be accessed
  by the by the event handler functions within AppointmentForm.js
  */
  const [title, setTitle] = useState();
  const [contact, setContact] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState(); 
  

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents page reload

    // Add contact info and clear data  
    addAppointments(prevAppointments => {
      return [{title: title, contact: contact, date: date, time: time}, ...prevAppointments];
    });

    // Clears the input fields after form submission 
    setTitle('');
    setContact('');
    setDate('');
    setTime('');   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments}/>
      </section>
    </div>
  );
};

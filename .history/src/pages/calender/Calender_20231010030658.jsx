import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
const Calender = () => {
  return (
<FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
  );
}

export default Calender;

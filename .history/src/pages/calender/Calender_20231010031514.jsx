import React from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'



const Calender = () => {
  return (
<FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
  );
}

export default Calender;

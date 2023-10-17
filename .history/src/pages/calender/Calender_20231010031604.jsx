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



handleWeekendsToggle = () => {
  this.setState({
    weekendsVisible: !this.state.weekendsVisible
  })
}

handleDateSelect = (selectInfo) => {
  let title = prompt('Please enter a new title for your event')
  let calendarApi = selectInfo.view.calendar

  calendarApi.unselect() // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    })
  }
}

handleEventClick = (clickInfo) => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}

handleEvents = (events) => {
  this.setState({
    currentEvents: events
  })
}

}

function renderEventContent(eventInfo) {
return (
  <>
    <b>{eventInfo.timeText}</b>
    <i>{eventInfo.event.title}</i>
  </>
)
}

function renderSidebarEvent(event) {
return (
  <li key={event.id}>
    <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
    <i>{event.title}</i>
  </li>
)
}

export default Calender;

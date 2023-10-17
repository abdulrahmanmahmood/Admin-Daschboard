import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
const Calender = () => {
  return (
    <FullCalendar
    plugins={[ dayGridPlugin, interactionPlugin ]}
    dateClick={this.handleDateClick}
  />
  );
}

export default Calender;

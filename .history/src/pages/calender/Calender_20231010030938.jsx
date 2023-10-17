import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const Calender = () => {
 const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
  return (
    <FullCalendar
    plugins={[ dayGridPlugin, interactionPlugin ]}
    dateClick={this.handleDateClick}
  />
  );
}

export default Calender;

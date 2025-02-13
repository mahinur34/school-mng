import React from 'react'
import { Container } from 'react-bootstrap'
import SectionHeader from '../common/section-header';
import { UpcommingEventsCarousel } from './upcomming-events-carousel';
import events from "@/helpers/data/events.json";

export const UpcommingEvents = () => {

    const upcomingEvents = events.filter((event)=> new Date(`${event.date} ${event.time}`)> new Date);


  return (
    <Container>
       <SectionHeader title="Upcoming Events" />
       <UpcommingEventsCarousel data={upcomingEvents} />
    </Container>
  )
}

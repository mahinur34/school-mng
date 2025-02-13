"use client"
import React from 'react'
import { EventCard } from '../events/event-card'
import { Carousel } from 'primereact/carousel';

export const UpcommingEventsCarousel = ({data}) => {

    const responsiveOptions = [
        {
            breakpoint: "1600px",
            numVisible: 4,
            numScroll: 2,
        },
        {
            breakpoint: "1200px",
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: "992px",
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: "768px",
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: "576px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const itemTemplate = (item) => {
        return (
            <EventCard {...item} />
        )
    }
  return (
    <Carousel
    value={data}
    numVisible={4}
    numScroll={1}
    responsiveOptions={responsiveOptions}
    itemTemplate={itemTemplate}/>
  )
}

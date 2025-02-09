
import { Instructors } from '@/components/about/instructors'
import PageHeader from '@/components/common/page-header'
import React from 'react'

export const metadata = {

    title: "About Us",
    description: "Learn more about School Mng, our mission and vision",
}

 export const Page = () => {
  return (
    <>
    <PageHeader title="About Us"/>
    <Instructors/>
    
    </>
  )
}

export default Page
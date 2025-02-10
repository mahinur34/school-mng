
import { Instructors } from '@/components/about/instructors'
import PageHeader from '@/components/common/page-header'
import { Spacer } from '@/components/common/spacer'
import React from 'react'

export const metadata = {

    title: "About Us",
    description: "Learn more about School Mng, our mission and vision",
}

 export const Page = () => {
  return (
    <>
    <PageHeader title="About Us"/>
    <Spacer/>
    <Instructors/>
    
    </>
  )
}

export default Page
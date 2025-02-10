import PageHeader from '@/components/common/page-header'
import { Courses } from '@/components/courses/courses'
import React from 'react'

export const metadata= {
    title: "Courses",
    description: 
     "Explore the variety of courses offered by our educationa institution",
}

const Page = () => {
  return (
    <>
    <PageHeader/>
    <Spacer/>
    <Courses/>
    <Spacer/>

    </>
  )
}

export default Page
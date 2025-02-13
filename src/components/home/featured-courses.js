import React from 'react'
import SectionHeader from '../common/section-header'
import { Courses } from '../courses/courses'

export const FeaturedCourses = () => {
  return (
    <div className='content-section bg'>
      <SectionHeader title="Featured Courses"/>
      <Courses featured={true}/>
    </div>
  )
}

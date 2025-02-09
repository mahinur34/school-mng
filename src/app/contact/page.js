import PageHeader from '@/components/common/page-header'
import Contact from '@/components/contact/contact'
import React from 'react'

export const metadata = {
    title: "Contact Us",
    description : "Get in touch with School Mng for any inquiries or feedback",
}

const Page = () => {
  return (
   <>
   <PageHeader title="Contact Us"/>
   <Contact/>
   </>
  )
}

export default Page
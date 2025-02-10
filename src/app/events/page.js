import PageHeader from '@/components/common/page-header'
import React from 'react'

export const metadata = {
    title:"Events",
    description:
       "Discover the exciting events and activities happening at our educational institution.",
}

const Page = () => {
  return (
    <>
    <PageHeader title="Events" />
    <Spacer/>
    </>
  )
}

export default Page
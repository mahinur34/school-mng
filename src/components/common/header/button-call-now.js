import { appConfig } from '@/helpers/config'
import React from 'react'

const ButtonCallNow = () => {
  return (
    <a href={`tel:${appConfig.contact.info.phone1.value}`} className='btn btn-outline-secondary mt-4 mt-lg-0'>CALL NOW</a>
  )
}

export default ButtonCallNow
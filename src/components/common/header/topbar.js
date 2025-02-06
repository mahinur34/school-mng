import React from 'react'
import "./topbar.scss";
import { Container } from 'react-bootstrap';
import { appConfig } from '@/helpers/config';

const Topbar = () => {
  return (
    <div className='topbar'>
        <Container>
            <div className='slogan'>
                <i className='pi pi-megaphone'></i> {appConfig.project.slogan}
            </div>
            <div>
                <i className='pi pi-user'></i>
            </div>
        </Container>
    </div>
  )
}

export default Topbar
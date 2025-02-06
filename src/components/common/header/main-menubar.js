"use client"
import { appConfig } from '@/helpers/config'
import Image from 'next/image'
import React from 'react'
import { Container, Navbar, Offcanvas } from 'react-bootstrap'

const MainMenubar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top"> {/* sticky ile üst tarafa yapıştırdık */}
			<Container>
				
				<Navbar.Toggle aria-controls="main-menubar" />
				<Navbar.Offcanvas
					id="main-menubar"
					aria-labelledby="main-menubar-title"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="main-menubar-title">
							<Image 
							src="/img/logos/logo-short.png" 
							width="208" 
							height="29" 
							alt={appConfig.project.name} />
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						
						
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
  )
}

export default MainMenubar
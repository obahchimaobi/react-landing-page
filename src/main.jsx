import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Component } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { Feature } from './components/Feature.jsx'
import { Pricing } from './components/Pricing.jsx'
import { Teams } from './components/Teams.jsx'
import { Footer } from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Component />
        <Hero />
        <Feature />
        <Pricing />
        <Teams />
        <Footer />
    </StrictMode>,
)

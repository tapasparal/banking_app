import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import Footer from '../components/Footer'
import TopInfoBar from '../components/TopInfoBar'
import LocatorFinder from './LocatorFinder'


export default function Home() {
    return (
        <>
            <TopInfoBar />
            <Header />
            <Navbar />
            <HeroSlider />
            <LocatorFinder />
            <Footer />
        </>
    )
}

import React from 'react'
import Layout from '../Components/layout/Layout'
import Banner from '../Components/Sections/Banner'
import Cards from '../Components/Sections/Cards'
import Title from '../shared/Title'
import Treding_Product from '../Components/Sections/Treding_Product'
import Sales_Product from '../Components/Sections/Sales_Product'
import Phone_Product from '../Components/Sections/Phone_Product'
import Popular_Product from '../Components/Sections/Popular_Product'
import Offer_Banner from '../Components/Sections/Offer_Banner'

function Home() {
    return (
        <>
            <Banner />
            <Cards />
            <Treding_Product />
            <Sales_Product />
            <Offer_Banner />
            <Phone_Product />
            <Popular_Product />
        </>
    )
}

export default Home

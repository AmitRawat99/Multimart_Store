import React, { Children } from 'react'
import Footer from '../Footers/Footer'
import Header from '../Headers/Header'

function Layout({ children }) {
    return (
        <>
            <Header />
            <section>
                {children}
            </section>
            <Footer />
        </>
    )
}

export default Layout

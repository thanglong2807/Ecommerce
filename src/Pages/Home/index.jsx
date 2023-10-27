import React from 'react'
import Banner from './components/Banner'
import Features from './components/Features'
import Product from './components/Product'
import TodayBestDeals from './components/TodayBestDeals'

const Home = () => {
    return (
        <div className='text-center mt-8'>
            <Banner />

            <Features />
            <TodayBestDeals />
            <Product />
        </div>
    )
}

export default Home
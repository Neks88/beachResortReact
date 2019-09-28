import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";




const Home = () => {
    return (
        <React.Fragment>

            <div>
                <Hero hero="defaultHero" >
                    <Banner title='Luxurious Rooms' subtitle="deluxe rooms starting from 299$" >
                        <Link to="/rooms" className='btn-primary ' >Our Rooms</Link>
                    </Banner>
                </Hero>
            </div>
            <Services />
            <FeaturedRooms />

        </React.Fragment>
    )
}

export default Home

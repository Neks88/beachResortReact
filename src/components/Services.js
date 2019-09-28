import React, { Component } from 'react';
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaArrowAltCircleDown } from "react-icons/fa";

export default class Services extends Component {

    state = {
        services: [{
            icon: <FaCocktail />,
            title: "free coktails",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, expedita'
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, expedita'
        },
        {
            icon: <FaShuttleVan />,
            title: "Driving in a van",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, expedita'
        },
        {
            icon: <FaBeer />,
            title: "Drink All You Can",
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, expedita'
        }]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />

                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

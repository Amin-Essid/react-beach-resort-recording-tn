import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"

export default class services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, totam!"
            },
            {
                icon:<FaHiking/>,
                title:"Hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, totam!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Shuttel",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, totam!"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, totam!"
            }
        ]
    }
    render() {
        
        return (
            <section className="services">
               <Title title="services" />
               <div className="services-center">
                {this.state.services.map((item,index) => {
                    return ( 
                        <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    );
                })}   
                </div> 
            </section>
        )
    }
}

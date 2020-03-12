import React from 'react'
import { Link } from 'react-router-dom'
import listOfActors from '../data/actors'

const Actors = (props) => {
    console.log(props)
    let articles = listOfActors.map( (actor, index) => {
        return (
            <div key={index} className="actor-container">
                <Link to = {`/Actors/${actor.url}`}>
                    <div className="actor-image" style={{ backgroundImage: "url("+actor.img_src+")" }}></div>
                </Link>
                    <h3>{actor.name}</h3>
            </div> 
        )
    })
    return(
        <div className="main-content">
            <div> <Link className="back" to="/Actors" > Retour </Link> </div>
            <h2>{props.title}</h2>
            <div className="container">
                <h2> {articles} </h2>
                
            </div>
        </div>
    ) ;
}

export default Actors ;

import React from 'react'

const Home = (props) => {
    return(
        <div className="main-content">
            <div className="container">
                <h2> {props.title} </h2>
                <div className="home-image"></div>
                <div className="thumbnail-container">
                    <div className="thumbnail-1"></div>
                    <div className="thumbnail-2"></div>
                    <div className="thumbnail-3"></div>
                </div>
            </div>
        </div>
    ) ;
}

export default Home ;
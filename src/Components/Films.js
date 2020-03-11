import React from 'react';
import listOfFilms from '../data/films';

const Films = (props) => {
    let films = listOfFilms.map((film, index) => {
      return (
            <div key={index} className="actor-container">
                <a href="/">
                    <div className="actor-image" style={{ backgroundImage: "url("+film.img_src+")" }}></div>
                </a>
                    <h3>{film.name}</h3>
                    <h4> {film.position} </h4>
        </div> 
      );
    });
    return (
      <div className="main-content">
        <h2>{props.title}</h2>
        <div className="container">
          {films}    
        </div>
      </div>
    );
}

export default Films;
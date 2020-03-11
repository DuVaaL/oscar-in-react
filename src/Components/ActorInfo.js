import React from 'react'
import listOfActors from '../data/actors';
import Actor from './Actor' ; 
import Actors from './Actors'
import { Route} from 'react-router-dom' ;

const ActorInfo = (props) => {
    let actorsInfos = listOfActors.map((actor, index) => {
        return (
            <Route key={index} path={`/Actors/${actor.url}`} render={() => <Actor name={actor.name} details={actor.description} image={actor.profile_img} />} />
        );
    });

    return(
            <div>
                <Route exact path="/Actors" render={ () => <Actors title="Meilleurs Acteurs 2019" /> }  />
                 {actorsInfos}
             </div>
              
    );
}

export default ActorInfo ;


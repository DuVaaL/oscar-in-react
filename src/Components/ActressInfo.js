import React from 'react'
import listOfActress from '../data/actress';
import Actress from './Actress';
import Actresses from './Actresses' ;
import { Route} from 'react-router-dom' ;

const ActressInfo = (props) => {
    let actressInfos = listOfActress.map((actor, index) => {
        console.log(actor);
        return (
            <Route key={index} path={`/Actress/${actor.url}`} render={() => <Actress name={actor.name} details={actor.description} image={actor.profile_img} />} />
        );
    });

    return(
            <div>
                <Route exact path="/Actress" render={ () => <Actresses title="Meilleurs Actrices 2019" /> }  />
                 {actressInfos}
             </div>
              
    );
}

export default ActressInfo;


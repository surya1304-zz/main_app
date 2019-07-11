import React from 'react';
import { withRouter } from 'react-router-dom';

const PlantTiles = ({match}) =>{
    return(
        <div>
            This is {match.params.plantname} plant page;
        </div>
    );
};

export default withRouter(PlantTiles);
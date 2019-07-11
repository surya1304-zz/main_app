import React from 'react';
import LargeTiles from '../Card/largeCard.component';
import SmallTiles from '../Card/smallCard.component';
import './tiles.component.styles.css';
import MiniDrawer from '../Sidebar/sidebar.component'

const Tiles = () => {
    return (
        <div className='menu'>
            <MiniDrawer/>
            <LargeTiles first="Actual Export Daily" second="Estimated Export Daily"/>
            <div className='tiles'>
                <SmallTiles first="Actual Daily Export" second="Estimated Daily Export" />
                <SmallTiles first="Actual Monthly Export" second="Estimated Monthly Export" />
                <SmallTiles first="Actual Contractual Export" second="Estimated Contractual Export" />
            </div>
            <LargeTiles first="Plant Availability" second="Grid Availability"/>
            <LargeTiles first="Energy Index" second="Solar Index"/>
            <LargeTiles first="PR" second="Grid Corrected PR"/>
        </div>
    );
};

export default Tiles;
import React from 'react';

import LargeTiles from '../Card/largeCard.component';
import LargeTileBars from '../Card/largebar.component';
import SmallTiles from '../Card/smallCard.component';
import MiniDrawer from '../Sidebar/sidebar.component'

import './tiles.component.styles.css';

const Tiles = () => {

    const SidebarHandler = () => {
        document.getElementById('menu').style.paddingLeft = '250px';
    };

    const SidebarHandler1 = () => {
        document.getElementById('menu').style.paddingLeft = '60px';
    };

    return (
        <div id='menu'>
            <MiniDrawer sidebarhandler={SidebarHandler} sidebarhandler1={SidebarHandler1} />
            <div>
                <LargeTileBars first="Actual Export Daily" second="Estimated Export Daily"/>
                <div className='tiles'>
                    <SmallTiles first="Actual Daily Export" second="Estimated Daily Export" />
                    <SmallTiles first="Actual Monthly Export" second="Estimated Monthly Export" />
                    <SmallTiles first="Actual Contractual Export" second="Estimated Contractual Export" />
                </div>
                <LargeTileBars first="Plant Availability" second="Grid Availability"/>
                <LargeTileBars first="Energy Index" second="Solar Index"/>
                <LargeTiles first="PR" second="Grid Corrected PR"/>
            </div>
        </div>
    );
};


export default Tiles;
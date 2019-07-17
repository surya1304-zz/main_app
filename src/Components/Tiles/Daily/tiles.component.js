import React, {useEffect} from 'react';
import {connect} from "react-redux";

import DatePicker from '../../DatePicker.component';
import LargeTileBars from '../../Card/largebar.component';
import SmallTiles from '../../Card/smallCard.component';
import MiniDrawer from '../../Sidebar/sidebar.component'

import './tiles.component.styles.css';

import {setActual, setEstimated, setInvData} from "../../../Redux/Graphs/graphs.actions";

const Tiles = ({ actual,est,inv,setActual,setEstimated,setInvData }) => {

    useEffect(() => {
        fetch('http://localhost:3000/daily/actualdatadaily', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                plant: 'kothagadi',
                date: '2018-08-01'
            })
        })
            .then(res => res.json())
            .then(resd => {
                    const {est, actual, invdata} = resd;
                    sessionStorage.setItem('actual', JSON.stringify(actual));
                    sessionStorage.setItem('inv', JSON.stringify(invdata));
                    sessionStorage.setItem('est', JSON.stringify(est));
                    setActual(actual);
                    setEstimated(est);
                    setInvData(invdata);
                }
            )
    },[setActual, setEstimated, setInvData]);

    console.log(actual);
    console.log(est);
    console.log(inv);

    const SidebarHandler = () => {
        document.getElementById('menu').style.paddingLeft = '250px';
    };

    const SidebarHandler1 = () => {
        document.getElementById('menu').style.paddingLeft = '60px';
    };

    const data1 = JSON.parse(sessionStorage.getItem('inv'));
    const l = Object.keys(data1[0])[0];
    const k = Object.keys(data1[0])[1];

    const data12 = JSON.parse(sessionStorage.getItem('actual'));
    const data123 = JSON.parse(sessionStorage.getItem('est'));

    const j = [{
        name : 'Export',
        Actual : data12[0].dayExport,
        Estimated : data123[0].export,
    }];
    const j1 = [{
        name : 'Availability',
        PlantAvailability : data12[0].plantAvail,
        GridAvailability : data12[0].gridAvail,
    }];
    const j2 = [{
        name : 'Indices',
        SolarIndex : data12[0].dayExport/data123[0].export,
        EnergyIndex : data12[0].corrInsolation/data123[0].insolation,
    }];
    const j3 = [{
        name : 'PR',
        PR : data12[0].PR,
        GridCorrectedPR : data12[0].gridCorrectedPR,
    }];

    const j4 = [{
        name : 'Insolation',
        Actual : data12[0].corrInsolation,
        Estimated : data123[0].insolation,
    }];

        return (
            <div id='menu'>
                <DatePicker/>
                <MiniDrawer sidebarhandler={SidebarHandler} sidebarhandler1={SidebarHandler1}/>
                <div>
                    <LargeTileBars first="InverterData" data1={data1} dataKey={l} dataKey1={k}/>
                    <div className='tiles'>
                        <SmallTiles first="Actual Daily Export" second="Estimated Daily Export" data={j} Actual='Actual'
                                    Estimated='Estimated'/>
                        <SmallTiles first="Plant Availability" second="Grid Availability" data={j1}
                                    Actual='PlantAvailability' Estimated='GridAvailability'/>
                        <SmallTiles first="Energy Index" second="Solar Index" data={j2} Actual='SolarIndex'
                                    Estimated='EnergyIndex'/>
                        <SmallTiles first="PR" second="Grid Corrected PR" data={j3} Actual='PR'
                                    Estimated='GridCorrectedPR'/>
                        <SmallTiles first="Actual Insolation" second="Estimated Insolation" data={j4} Actual='Actual'
                                    Estimated='Estimated'/>
                    </div>
                </div>
            </div>
        );
};

const mapStateToProps = state => ({
    actual : state.graph.actual,
    est : state.graph.est,
    inv : state.graph.inv
});

const mapDispatchToProps = dispatch => ({
    setActual : actual => dispatch(setActual(actual)),
    setEstimated : estimated => dispatch(setEstimated(estimated)),
    setInvData : Inv => dispatch(setInvData(Inv)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Tiles);
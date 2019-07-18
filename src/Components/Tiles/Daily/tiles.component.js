import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import DatePicker from '../../DatePicker.component';
import LargeTileBars from '../../Card/largebar.component';
import SmallTiles from '../../Card/smallCard.component';
import MiniDrawer from '../../Sidebar/sidebar.component'

import './tiles.component.styles.css';

import {setActual, setEstimated, setInvData, setKeys} from "../../../Redux/Graphs/graphs.actions";
import {
    selectActualPR,
    selectcorrInsolation,
    selectdayExport,
    selectestExport,
    selectestInsolation,
    selectgridAvail,
    selectGridCorrectedPR,
    selectinvdata,
    selectplantAvail,
    selectKey
} from "../../../Redux/Graphs/graphs.selector";
import { DateSelector } from "../../../Redux/DatePicker/datepicker.selector";

const Tiles = ({PR, date, corrInsolation, exported, estexport, estInsolation, gridAvail, gridCorrectedPR, invData, plantAvail, keys, setActual, setEstimated, setInvData,setKeys}) => {

    useEffect(() => {
        let date1 = date.getFullYear() +'-'+ ('0'+(date.getMonth()+1)).slice(-2) +'-'+ ('0'+(date.getDate())).slice(-2);
        fetch('http://localhost:3000/daily/actualdatadaily', {
            method : 'post',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                plant : 'kothagadi',
                date : date1,
            })
        })
            .then(res=>res.json())
            .then(resd => {
                setActual(resd.actual);
                setEstimated(resd.est);
                setInvData(resd.invdata);
                setKeys(Object.keys(resd.invdata.first()));
            })
            .catch(error => alert(error));
    },[date]);

    const SidebarHandler = () => {
        document.getElementById('menu').style.paddingLeft = '250px';
    };

    const SidebarHandler1 = () => {
        document.getElementById('menu').style.paddingLeft = '60px';
    };

    const data1 = invData;
    const l = keys[0];
    const k = keys[1];

    const j = [{
        name: 'Export',
        Actual: exported,
        Estimated: estexport,
    }];
    const j1 = [{
        name: 'Availability',
        PlantAvailability: plantAvail,
        GridAvailability: gridAvail,
    }];
    const j2 = [{
        name: 'Indices',
        SolarIndex: exported / estexport,
        EnergyIndex: corrInsolation / estInsolation,
    }];
    const j3 = [{
        name: 'PR',
        PR: PR,
        GridCorrectedPR: gridCorrectedPR,
    }];

    const j4 = [{
        name: 'Insolation',
        Actual: corrInsolation,
        Estimated: estInsolation,
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

const mapStateToProps = createStructuredSelector({
    PR: selectActualPR,
    gridCorrectedPR: selectGridCorrectedPR,
    corrInsolation: selectcorrInsolation,
    estInsolation: selectestInsolation,
    gridAvail: selectgridAvail,
    plantAvail: selectplantAvail,
    exported: selectdayExport,
    estexport: selectestExport,
    invData: selectinvdata,
    keys : selectKey,
    date : DateSelector
});

const mapDispatchToProps = dispatch => ({
    setActual: actual => dispatch(setActual(actual[0])),
    setEstimated: estimated => dispatch(setEstimated(estimated[0])),
    setInvData: Inv => dispatch(setInvData(Inv)),
    setKeys : Keys => dispatch(setKeys(Keys)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tiles);

Array.prototype.first = function () {
    return this[0];
};

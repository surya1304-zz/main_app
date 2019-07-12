import React from "react";
import './largebar.component.styles.css';
import { withRouter } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
} from "recharts";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Collapse} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: "200vh",
        margin : 20
    },
    media: {
        height: 0,
        paddingTop: "56.25%"
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    linechart: {
        overflowX: "scroll",
        display: "flex",
        justifyContent: "start"
    }
}));

const LargeTileBars = ({ first,second }) => {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(true);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    const title = `${first} vs ${second}`;

    const data = [
        {
            name: "Page A",
            uv: 11500,
            pv: 14000
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];

    return (
        <Card id="helloworld" className={classes.card}>
            <CardHeader
                title={title}
                subheader="2019-07-11"
                action={
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                }
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.linechart}>
                    <BarChart width={1500} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" fill="#8884d8" />
                        <Bar dataKey="pv" fill="#82ca9d" />
                    </BarChart>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default withRouter(LargeTileBars);
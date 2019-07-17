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

const LargeTileBars = ({ first,data1,dataKey,dataKey1 }) => {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(true);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    const title = first;

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
                    <BarChart width={1500} height={400} data={data1}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={dataKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={dataKey1} fill="#8884d8" />
                    </BarChart>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default withRouter(LargeTileBars);
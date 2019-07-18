import 'date-fns';
import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { setDate } from '../Redux/DatePicker/datepicker.actions';

const useStyles = makeStyles({
    grid: {
        margin : 20,
        width: '60%',
    },
});

const DatePicker = ({ setDate }) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const classes = useStyles();

    function handleDateChange(date) {
        setSelectedDate(date);
        setDate(date);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.grid} justify="space-around">
                <KeyboardDatePicker
                    margin="normal"
                    id="mui-pickers-date"
                    label="Select The Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

const mapDispatchToProps = dispatch => ({
    setDate : date => dispatch(setDate(date)),
});

export default connect(null,mapDispatchToProps)(DatePicker);
import React from 'react';
import { connect } from "react-redux";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {blue} from "@material-ui/core/colors";
import {Person} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    orangeAvatar: {
        color: '#fff',
        backgroundColor: blue[900],
    },
}));

function MiniDrawer({ plants,fname,role,history }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function toggleDrawerOpen() {
        setOpen(!open);
    }
    console.log(fname + " " + role);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={toggleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List>
                    {plants.split('&').map((text, index) => (
                        <ListItem button key={index} onClick={()=>history.push(`/plants/${text}`)}>
                            <ListItemIcon><Avatar className={classes.orangeAvatar}>{text[0].toLocaleUpperCase()}</Avatar></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem button key={fname}>
                        <ListItemIcon><Person color='primary' fontSize='large'/></ListItemIcon>
                        <ListItemText primary={fname} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

const mapStateToProps = state => ({
    plants : state.signin.plants,
    fname : state.signin.fname,
    role : state.signin.role,
});

export default withRouter(connect(mapStateToProps)(MiniDrawer));
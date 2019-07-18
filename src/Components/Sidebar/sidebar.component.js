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
import {Person,AccessibilityNew,KeyboardBackspace} from '@material-ui/icons';
import { withRouter,NavLink } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import { toggleOpen } from "../../Redux/Sidebar/sidebar.actions";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    orangeAvatar: {
        color: '#fff',
        backgroundColor: blue[900],
    },
    link : {
        fontSize : 20,
        marginLeft: 20,
        color: '#fff',
    }
}));

function MiniDrawer({ location,match,plants,fname,role,history,toggleOpen,sidebarhandler,sidebarhandler1 }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function toggleDrawerOpen() {
        open ? toggleOpen({
            open : false,
        }) : toggleOpen({
            open : true,
        });
        console.log(history);
        console.log(match);
        console.log(location);
        setOpen(!open);
        if (!open)
            sidebarhandler();
        else
            sidebarhandler1();
    }
    let type = match.url.split('/')[2];
    let plant = match.params.plantname;
    let linkDay = `/plants/daily/${plant}`;
    let linkMonth = `/plants/monthly/${plant}`;
    let linkYear = `/plants/yearly/${plant}`;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={toggleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {plant.toUpperCase()}
                    </Typography>
                    <NavLink className={classes.link} to={linkDay} activeStyle={{
                        fontWeight: "bold",
                        fontSize : 20,
                        color : '#D9D7DD'
                    }}>Daily</NavLink>
                    <NavLink className={classes.link} to={linkMonth}>Monthly</NavLink>
                    <NavLink className={classes.link} to={linkYear}>Yearly</NavLink>
                </Toolbar>
            </AppBar>
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
                <div className={classes.toolbar}>
                <IconButton onClick={toggleDrawerOpen}>
                    <KeyboardBackspace/>
                </IconButton>
                </div>
                <Divider />
                <List>
                    {plants.split('&').map((text, index) => (
                        text === '' ? '' :
                            <ListItem button key={index} onClick={()=>history.push(`/plants/${type}/${text}`)}>
                                <ListItemIcon><Avatar className={classes.orangeAvatar}>{text[0].toUpperCase()}</Avatar></ListItemIcon>
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
                    <ListItem button key={role}>
                        <ListItemIcon><AccessibilityNew color='primary' fontSize='large'/></ListItemIcon>
                        <ListItemText primary={role} />
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

const mapDispatchToProps = dispatch => ({
    toggleOpen : open => dispatch(toggleOpen(open)),
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MiniDrawer));

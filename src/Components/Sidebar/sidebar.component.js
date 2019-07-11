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
import { withRouter } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

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
}));

function MiniDrawer({ plants,fname,role,history }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function toggleDrawerOpen() {
        setOpen(!open);
    }

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
                        {plants.split('&')[0].toUpperCase()}
                    </Typography>
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
                        <ListItem button key={index} onClick={()=>history.push(`/plants/${text}`)}>
                            <ListItemIcon><Avatar className={classes.orangeAvatar}>{text[0]}</Avatar></ListItemIcon>
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

export default withRouter(connect(mapStateToProps)(MiniDrawer));


// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
//
// const drawerWidth = 240;
//
// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//     },
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: 36,
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//     },
//     drawerOpen: {
//         width: drawerWidth,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     drawerClose: {
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         overflowX: 'hidden',
//         width: theme.spacing(7) + 1,
//         [theme.breakpoints.up('sm')]: {
//             width: theme.spacing(9) + 1,
//         },
//     },
//     toolbar: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         padding: '0 8px',
//         ...theme.mixins.toolbar,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
// }));
//
// export default function MiniDrawer() {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);
//
//     function handleDrawerOpen() {
//         setOpen(true);
//     }
//
//     function handleDrawerClose() {
//         setOpen(false);
//     }
//
//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 className={clsx(classes.appBar, {
//                     [classes.appBarShift]: open,
//                 })}
//             >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="Open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         className={clsx(classes.menuButton, {
//                             [classes.hide]: open,
//                         })}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap>
//                         Mini variant drawer
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 variant="permanent"
//                 className={clsx(classes.drawer, {
//                     [classes.drawerOpen]: open,
//                     [classes.drawerClose]: !open,
//                 })}
//                 classes={{
//                     paper: clsx({
//                         [classes.drawerOpen]: open,
//                         [classes.drawerClose]: !open,
//                     }),
//                 }}
//                 open={open}
//             >
//                 <div className={classes.toolbar}>
                    {/*<IconButton onClick={handleDrawerClose}>*/}
                    {/*    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}*/}
                    {/*</IconButton>*/}
//                 </div>
//                 <Divider />
//                 <List>
//                     {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//                 <Divider />
//                 <List>
//                     {['All mail', 'Trash', 'Spam'].map((text, index) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Drawer>
//             <main className={classes.content}>
//                 <div className={classes.toolbar} />
//             </main>
//         </div>
//     );
// }

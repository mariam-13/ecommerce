import React from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { IconFlagUK } from 'material-ui-flags';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 14,
    },
    media: {
        height: 50,
        width: 50
    },
    flag: {
        height: 11,
        width: 16
    },


    paper: {
        marginRight: theme.spacing(2),
    }

}));

const MainLayout = () => {
    const classes = useStyles();
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <div>
            <AppBar position="static" color="transparent">
                <Toolbar variant="dense">
                    <Grid container direction="row" justifyContent="space-between" >
                        <CardMedia className={classes.media} image="https://iconape.com/wp-content/files/ca/11609/png/mdb.png" />
                        <Box ml="10px" className="navigation">
                            <ShoppingCartIcon />
                            <IconButton ><IconFlagUK className={classes.flag} /></IconButton>
                            <ArrowDropDownIcon
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                            ></ArrowDropDownIcon>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                    <MenuItem onClick={handleClose}>Action</MenuItem>
                                                    <MenuItem onClick={handleClose}>Another action</MenuItem>
                                                    <MenuItem onClick={handleClose}>Something else here</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>

                            <ListItem
                                button
                                selected={selectedIndex === 2}
                                onClick={(event) => handleListItemClick(event, 2)}
                            >
                                <ListItemText primary="Shop" />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 3}
                                onClick={(event) => handleListItemClick(event, 3)}
                            >
                                <ListItemText primary="Contact" />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 4}
                                onClick={(event) => handleListItemClick(event, 4)}
                            >
                                <ListItemText primary="Sign in" />
                            </ListItem>
                            <Box borderRadius={16}>
                                <Button borderRadius={16} variant="outlined" color="primary">
                                    SIGN UP
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>


        </div >
    );
};

export default MainLayout;
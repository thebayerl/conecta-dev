import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Toolbar, SvgIcon, Avatar} from '@material-ui/core';
import { Bell } from 'react-feather';


const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1
    },
    userSection:{
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,
    }
});

const Header = () => {
    const classes = useStyles();
    return ( 
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Toolbar>
                <img src='/imagens/logo.png' alt='logo' className={classes.img}/>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button color='primary' variant='contained' className={classes.button}>Novo Post</Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt='Remy Sharp' src='/'/>
                </div>
            </Toolbar>
        </AppBar>
    );
}
 
export default Header;
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, CardActionArea, Avatar, Typography, IconButton} from '@material-ui/core';
import { Favorite, Message, Bookmark } from '@material-ui/icons';
import { auto } from 'async';

const useStyles = makeStyles((theme)=> ({
    root: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    caption: {
        marginRight: theme.spacing(1),
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px',
    },
    image: {
        maxHeight: 300,
        width: '100%',
    },
    content: {
        padding: 0,
    },
    favorite: {
        marginLeft: 'auto',
    }
}));

const PostCard = ({ post }) => {

    const classes = useStyles();
    return ( 
        <Card className={classes.root}>
            <CardHeader 
                avatar={<Avatar src={post.author.avatar}/>}
                title={<Typography variant ='h6'>{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography className={classes.caption} variant ='caption'>{'Avaliado por'}</Typography>
                        <Typography className={classes.caption} variant ='subtitle2'>{post.author.name}</Typography>
                        <Typography className={classes.caption} variant ='caption'>{post.date}</Typography>
                    </div>
                }
            />
            <CardContent className={classes.content}>
                <Typography className={classes.message} variant ='body1'>{post.hashtags}</Typography>
                <CardActionArea>
                    <img className={classes.image} src={post.image}/>
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing >
                <IconButton arial-label='like'>
                    <Favorite/>
                    <Typography 
                        style={{curosr:'pointer'}}
                        color='textSecondary'
                        variant='body2'
                    >
                        {'10'}
                    </Typography>
                </IconButton>
                <IconButton arial-label='comment'>
                    <Message/>
                    <Typography 
                        className={classes.reactions}
                        color='textSecondary'
                        variant='body2'
                    >
                        {'30'}
                    </Typography>
                </IconButton>
                <IconButton arial-label='favorite' className={classes.favorite}> 
                    <Bookmark/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
 
export default PostCard;
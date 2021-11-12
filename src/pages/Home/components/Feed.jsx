import React, { useCallback, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import axios from '../../../utils/axios';

import PostCard from '../../../components/PostCard/index';
const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Daniel Vieira',
            username: 'TheBayerl',
            avatar: '/imagens/avatars/avatar_1.jpeg'
        },
        title: 'Criando um App',
        date: 'November 11, 2021',
        description: 'Hoje tu aprende, rlx',
        hashtags: '#react',
        image: '/imagens/posts/post9.jpeg',
    }
]

const Feed = () => {

    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            {
                posts.map((post) =>(
                    <PostCard post={post} key={post.id}/>
                ))
            }
        </div>
    );
}
 
export default Feed;
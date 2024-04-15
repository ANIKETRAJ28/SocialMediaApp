import MainContainer from './MainContainer/MainContainer';
import Navbar from './Navbar/Navbar';
import Input from './Input/Input'
import PostContext from '../context/PostContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SocialApp() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // we will download the content from dummyapi.io
        axios.get('https://dummyapi.io/data/v1/post', {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        }).then(res => {
            const responseObj = res.data;
            setPosts([...responseObj.data])
        });
    }, []);
    return (
        <PostContext.Provider value={ {posts, setPosts} }>
            <Navbar/>
            <Input/>
            <MainContainer/>
        </PostContext.Provider>
    )
}

export default SocialApp;
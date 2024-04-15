import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { useContext, useState } from 'react';
import axios from 'axios';
import PostContext from '../../context/PostContext';

export default function FullWidthTextField() {
    const [postText, setPostText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setIsLoading] = useState(false);
    const {posts, setPosts} = useContext(PostContext);

    async function createPost() {
        setIsLoading(true);
        axios.post('https://dummyapi.io/data/v1/post/create', {
            owner: '60d0fe4f5311236168a109ca',
            text: postText,
            image: imageUrl,
            likes: 0,
            publishDate: new Date()
        }, {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        }).then(res => {
            setIsLoading(false);
            setPostText('');
            setImageUrl('');
            setPosts([res.data, ...posts]);
        });
    }
  return (
    <Box sx={{ axWidth: '100%'}}>
      <TextField 
        sx={{mt: '1rem'}} 
        fullWidth label="Your New Post..." 
        id="fullWidth" 
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        />
      <TextField 
        sx={{mt: '1rem'}} 
        fullWidth label="Image Url For New Post..." 
        id="fullWidth"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        />
        {(!loading) ? 
            <Button 
                sx={{mt: '1rem'}} 
                variant="contained"
                onClick={createPost}
            >Create</Button> :
            <LoadingButton loading variant="outlined">
                Submit
            </LoadingButton>
        }
    </Box>
  );
}
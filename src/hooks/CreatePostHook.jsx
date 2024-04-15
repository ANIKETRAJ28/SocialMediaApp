import axios from "axios";
import { useEffect, useState } from "react";

function CreatePostHook() {
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
    return [posts, setPosts];
}

export default CreatePostHook;
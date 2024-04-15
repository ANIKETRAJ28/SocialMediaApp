import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";

function PostCardList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // we will download the content from dummyapi.io
        axios.get('https://dummyapi.io/data/v1/post', {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        }).then(res => {
            const responseObj = res.data;
            setPosts([...responseObj.data])
        });
    }, [])

    return ((posts.length == 0) ? 
        'loading...' :
        <div>
            {posts.map(post => <PostCard 
                content={post.text}
                image={post.image}
                authorFirstName={post.owner.firstName} 
                key={post.id}
            />)}
        </div>
    )
}

export default PostCardList;
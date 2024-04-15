import { memo, useContext } from "react";
import PostCard from "../PostCard";
import PostContext from "../../context/PostContext";

function PostCardList() {
    const {posts, setPosts} = useContext(PostContext);
    return ((posts.length == 0) ? 
        'loading...' :
        <div>
            {posts.map(post => <PostCard 
                content={post.text}
                image={post.image}
                authorFirstName={post.owner.firstName} 
                publishDate={post.publishDate}
                key={post.id}
            />)}
        </div>
    )
}

export default memo(PostCardList);
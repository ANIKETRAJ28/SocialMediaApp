import MainContainer from './MainContainer/MainContainer';
import Input from './Input/Input'
import PostContext from '../context/PostContext';
import CreatePostHook from '../hooks/CreatePostHook';

function SocialApp() {
    const [posts, setPosts] = CreatePostHook();
    return (
        <PostContext.Provider value={ {posts, setPosts} }>
            <Input/>
            <MainContainer/>
        </PostContext.Provider>
    )
}

export default SocialApp;
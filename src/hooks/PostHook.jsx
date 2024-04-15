import axios from "axios";
import { useEffect, useState } from "react";

function PostHook() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // we will download the content from dummyapi.io
        axios.get('https://dummyapi.io/data/v1/user', {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        }).then(res => {
            const responseObj = res.data;
            setUsers([...responseObj.data])
        });
    }, []);
    return users
}

export default PostHook;
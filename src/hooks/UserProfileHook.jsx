import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfileHook() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [loading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        }).then(res => {
            setUser({...res.data});
            setIsLoading(false);
        });
    }, []);
    return [user, loading];
}

export default UserProfileHook;
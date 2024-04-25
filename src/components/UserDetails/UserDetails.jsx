import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import fetchUser from '../../helpers/fetchUser';

export default function UserDetails() {
    // const [user, loading] = UserProfileHook();
    const { id } = useParams();
    const response = useQuery(['user', id], fetchUser);
    if(response.isLoading) {
        return <div>loading...</div>
    } else {
        const user = response.data.data;
        return (
            <Card sx={{ display: 'flex', mt:'2rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {user.firstName + ' ' + user.lastName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                    {user.email}
                    </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 80 }}
                    image={user.picture}
                    alt="Live from space album cover"
                />
            </Card>
        );
    }
}
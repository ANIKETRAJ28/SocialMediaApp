import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList'
import { memo } from 'react';

function MainContainer() {
  return (
    <Box sx={{ width: '100%', mt: '3rem' }}>
      <Grid container alignItems="start"justifyContent={'flex-start'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid>
            {/* Users */}
            <UserList />
        </Grid>
        <Grid 
            container 
            alignItems="center"
            justifyContent="center"
            direction="column" md={8}>
            {/* Posts */}
            <PostCardList/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(MainContainer);
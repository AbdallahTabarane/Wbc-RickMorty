import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useUserStore from '../../store/user'
import CustomPagination from '../../components/CustomPagination';
import ListCards from '../../components/ListCards';
import CircularProgress from '@mui/material/CircularProgress';
import {Alert,Stack} from '@mui/material';
import Filters from '../../components/Filters';

const Home = () => {
    const [state, setState] = useState({ search:'', status:"",species:"",gender:""});
    const [page, setPage] = useState(1);
    const handleFilter = (e) => {
        setState((prev) => ({...prev, [e.target.name]: e.target.value}))
        setPage(1)
    }
    const handleChange = (event, value) => {
      setPage(value);
    };
    const { charecters, isLoading, error, fetchUsers } = useUserStore();
    useEffect(()=>{
    fetchUsers(page,state.search,state.status,state.species,state.gender);
    },[page,state.search,state.status,state.species,state.gender])
    if(isLoading) {
      return (
        
          <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center' }}>
            <CircularProgress />
          </Box>
      );
    } else if(error) {
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="error">
        This is an outlined error Alert.
      </Alert>
    </Stack>
    }
  return (
    <>
    <Container sx={{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'20px'
    }}>
       <Filters species={state.species} gender={state.gender} status={state.status} search={state.search} handleFilter={handleFilter} />
        
       
        <ListCards charecters={charecters?.results} />
        {charecters?.info && <CustomPagination pagination={charecters?.info} handleChange={handleChange} page={page}/>}
        
    </Container>
    
</>
  )
}

export default Home
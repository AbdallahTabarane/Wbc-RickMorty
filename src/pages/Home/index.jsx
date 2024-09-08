import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/CustomPagination';
import ListCards from '../../components/ListCards';
import Filters from '../../components/Filters';
import {characterServices} from '../../services';


const Home = () => {
    const [state, setState] = useState({ search:'', status:"",species:"",gender:""});
    const [page, setPage] = useState(1);
    const [data, setData] = useState({ characters: [], isLoading: true, error: null });
    const handleFilter = (e) => {
        setState((prev) => ({...prev, [e.target.name]: e.target.value}))
        setPage(1)
    }
    const handleChange = (event, value) => {
      setPage(value);
    };

    useEffect(() => {
      const fetchData = async () => {
          const result = await characterServices.fetchUsers(page, state.search, state.status, state.species, state.gender);
          setData(result);
      };

      fetchData();
  }, [page, state.search, state.status, state.species, state.gender]);

  console.log('charinfo', data?.characters);
    
  return (
    <>
    <Container sx={{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'20px'
    }}>
       <Filters species={state.species} gender={state.gender} status={state.status} search={state.search} handleFilter={handleFilter} />
        
       
        <ListCards data={data?.characters} />
        {data?.info && <CustomPagination pagination={data?.info} handleChange={handleChange} page={page}/>}
        
    </Container>
    
</>
  )
}

export default Home
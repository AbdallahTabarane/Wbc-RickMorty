import { Box, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useUserStore from '../../store/user'
import CustomPagination from '../../components/CustomPagination';
import TextField from '@mui/material/TextField';
import ListCards from '../../components/ListCards';
import CircularProgress from '@mui/material/CircularProgress';

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
    console.log('char ',charecters.info);
    if(isLoading) {
      return (
        
          <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center' }}>
            <CircularProgress />
          </Box>
      );
    }
  return (
    <>
    <Container sx={{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'20px'
    }}>
        <Box sx={{
          display:'flex',
          flexWrap:'wrap',
          gap:'20px',
          width:'100%',
          justifyContent:'space-between',
          border:'2px solid black',
          borderRadius:'15px',
          padding:'40px'
        }}>
          <Box sx={{
            width:{ xs:'100%', md:'45%', lg:'20%' }
          }}>
        <TextField sx={{
            width:'100%'
          }} id="outlined-basic" label="Rechercher" variant="outlined" onChange={handleFilter} value={state.search} name="search" />
        </Box>
        <Box sx={{
              width:{ xs:'100%', md:'45%', lg:'20%' }
          }}>
        <FormControl sx={{
          width:'100%'
        }}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.status}
          name={"status"}
          label="Status"
          onChange={handleFilter}
        >
          <MenuItem value={'Dead'}>Dead</MenuItem>
          <MenuItem value={'Alive'}>Alive</MenuItem>
          <MenuItem value={'Unknown'}>Unknown</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <Box sx={{
            width:{ xs:'100%', md:'45%', lg:'20%' }
          }}>
        <FormControl sx={{
          width:'100%'
        }}>
        <InputLabel id="demo-simple-select-label">Species</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.species}
          name={"species"}
          label="Species"
          onChange={handleFilter}
        >
          <MenuItem value={'Human'}>Human</MenuItem>
          <MenuItem value={'Alien'}>Alien</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <Box sx={{
             width:{ xs:'100%', md:'45%', lg:'20%' }
          }}>
        <FormControl sx={{
          width:'100%'
        }}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.gender}
          name={"gender"}
          label="Gender"
          onChange={handleFilter}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Unknown'}>Unknown</MenuItem>
        </Select>
      </FormControl>
      </Box>
        </Box>
        <ListCards charecters={charecters?.results} />
        {charecters?.info && <CustomPagination pagination={charecters?.info} handleChange={handleChange} page={page}/>}

    </Container>
    
</>
  )
}

export default Home
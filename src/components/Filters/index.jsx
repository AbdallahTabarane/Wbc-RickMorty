import React, { useEffect, useState } from 'react'
import { Box, Card, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'


const Filters = ({handleFilter,search,status,gender,species}) => {
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(search);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search, 500]);
  return (
    <Card sx={{
        display:'flex',
        flexWrap:'wrap',
        gap:'20px',
        width:'100%',
        justifyContent:'space-between',
        padding:'40px'
      }}>
        <Box sx={{
          width:{ xs:'100%', md:'45%', lg:'20%' }
        }}>
      <TextField sx={{
          width:'100%'
        }} id="outlined-basic" label="Search" variant="outlined" onChange={handleFilter} value={search} name="search" />
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
        value={status}
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
        value={species}
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
        value={gender}
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
      </Card>
  )
}

export default Filters
import { Box } from '@mui/material'
import React from 'react'
import CharCard from '../Card'


const ListCards = ({data}) => {
    

  return (
    <Box sx={{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        gap:'20px'
    }}>
        {Array.isArray(data) && data?.map((character) => (
            <CharCard key={character.id} character={character} />
        ))}
        </Box>
  )
}

export default ListCards
import { Box } from '@mui/material'
import React from 'react'
import CharCard from '../Card'


const ListCards = ({charecters}) => {
    

  return (
    <Box sx={{
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:'20px'
    }}>
        {Array.isArray(charecters) && charecters?.map((character) => (
            <CharCard key={character.id} character={character} />
        ))}
        </Box>
  )
}

export default ListCards
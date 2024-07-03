import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ListCards from '../ListCards';

const CharacterFavoris = () => {
const [updateFavUsers,setUpdateFavUsers] = useState();

   useEffect(()=> {
    setUpdateFavUsers(favUsers);
   },[updateFavUsers])
   const favUsers = JSON.parse(localStorage.getItem('favorites')) || [];
    return (
        <>
          {!favUsers.length ? ( <Box sx={{
            justifyContent:'center',
            textAlign:'center'

          }}>Your favourite list is empty</Box> ) : ( <Container>
                <ListCards  charecters={updateFavUsers}/>
            </Container>) }
            </>
    )
}

export default CharacterFavoris
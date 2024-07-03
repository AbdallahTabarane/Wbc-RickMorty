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

          }}>Aucun element exist dans les favoris</Box> ) : ( <Container>
                <ListCards  charecters={updateFavUsers}/>
            </Container>) }
            </>
    )
}

export default CharacterFavoris
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useUserDetailStore from '../../store/userDetail';
import { Box, Typography } from '@mui/material';
import Status from '../../components/Status';

const ChracterDetails = () => {
    const {id} = useParams();
    const { character, isLoading, error, fetchUserDetail } = useUserDetailStore();
    useEffect(()=>{
        fetchUserDetail(id);
    },[id]);
    console.log('character',character);
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
      flexWrap:'wrap',
      gap:'30px',
    }}>
       <Box sx={{
        width:'45%'
       }}>
        <img src={character.image} style={{
          width:'100%',
          height:'100%'
        }} />
      </Box>
      <Box sx={{
        width:'45%',
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        justifyContent:'center',
        gap:'10px'
       }}>
        <Typography variant='h5'>name : {character.name} </Typography>
        <Typography variant='h5' sx={{
          display:'flex',
          gap : '10px'
        }}>statut : <Status status={character.status} /> </Typography>
         <Typography variant='h5'>species : {character.species} </Typography>
         <Typography variant='h5'>gender : {character.gender} </Typography>
        </Box> </Box>
  )
}

export default ChracterDetails
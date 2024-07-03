import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useUserDetailStore from '../../store/userDetail';
import { Alert, Box, Card, CircularProgress, Stack, Typography } from '@mui/material';
import Status from '../../components/Status';

const ChracterDetails = () => {
    const {id} = useParams();
    const { character, isLoading, error, fetchUserDetail } = useUserDetailStore();
    useEffect(()=>{
        fetchUserDetail(id);
    },[id]);
      // extract id from url
  const getLocationIdFromUrl = (url) => {
    const match = url.match(/\/(\d+)$/);
    return match ? match[1] : null;
  };

  const locationId = getLocationIdFromUrl(character.location.url);
  
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
      flexWrap:'wrap',
      gap:'30px',
    }}>
       <Box sx={{
        width:{ xs:'100%' ,md:'45%' },
       }}>
        <img src={character.image} style={{
          width:'100%',
          height:'100%'
        }} />
      </Box>
      <Box sx={{
        width:{ xs:'100%' ,md:'45%' },
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
         <Card
         sx={{
          padding:'20px',
         }}>
         <Typography variant='h5'>location name : {character.location.name} </Typography>
         <Typography variant='h5'>location url : <Link style={{
          textDecoration:'none',
          textTransform:'uppercase',
          color:'blue',
          fontWeight:700,
          fontSize:'18px'
         }} to={`/location/${locationId}`}>Click here</Link> </Typography>
         </Card>
         
        </Box> </Box>
  )
}

export default ChracterDetails
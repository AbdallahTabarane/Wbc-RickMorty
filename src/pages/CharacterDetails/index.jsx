import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Card } from '@mui/material';
import Status from '../../components/Status';
import { characterServices } from '../../services';

const ChracterDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState({ character: {}, isLoading: true, error: null });

    useEffect(() => {
      const fetchDataDetail = async () => {
          const result = await characterServices.fetchUserDetail(id);
          setData(result);
      };
      fetchDataDetail();
  }, [id]);
    
      // extract id from url
  const getLocationIdFromUrl = (url) => {
    const match = url.match(/\/(\d+)$/);
    return match ? match[1] : null;
  };

  const locationId = getLocationIdFromUrl(data.location.url);
  console.log('detail',data)
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
        <img src={data.image} style={{
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
        <Typography variant='h5'>name : {data.name} </Typography>
        <Typography variant='h5' sx={{
          display:'flex',
          gap : '10px'
        }}>statut : <Status status={data.status} /> </Typography>
         <Typography variant='h5'>species : {data.species} </Typography>
         <Typography variant='h5'>gender : {data.gender} </Typography>
         <Card
         sx={{
          padding:'20px',
         }}>
         <Typography variant='h5'>location name : {data.location.name} </Typography>
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
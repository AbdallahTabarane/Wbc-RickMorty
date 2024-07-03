import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useUserLocationDetailStore from '../../store/locationDetail';
import { Box, Card, Typography } from '@mui/material';

const LocationDetails = () => {
    const { id } = useParams();
    const { location, isLoading, error, fetchUserLocationDetail } = useUserLocationDetailStore();

    useEffect(() => {
        fetchUserLocationDetail(id);
    }, [id]);

    // Fonction pour extraire l'ID de l'URL
    const getLocationIdFromUrl = (url) => {
        const match = url.match(/\/(\d+)$/);
        return match ? match[1] : null;
    };

    console.log('idlocation', id);
    console.log('location', location);

    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error loading location details</p>;
    // if (!location) return <p>No location data</p>;

    return (
        <>
            <Card
                sx={{
                    padding: '20px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '30px',
                }}
            >
                <Typography variant='h5'>Location Name: {location.name}</Typography>
                <Typography variant='h5'>Location Type: {location.type}</Typography>
            </Card>
            <Typography variant='h5' sx={{ margin: '30px 0px' }}>
                Residents
            </Typography>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                gap:'20px',
                justifyContent:'space-between'
            }}>
                {location.residents && location.residents.map((residentUrl, index) => {
                    const residentId = getLocationIdFromUrl(residentUrl);
                    return (
                        <Card key={residentId} sx={{ padding: '50px',width:{ xs:'100%', md:'50%', xl:'20%' } }}>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    textTransform: 'uppercase',
                                    color: 'blue',
                                    fontWeight: 700,
                                    fontSize: '18px',
                                }}
                                to={`/character/${residentId}`}
                            >
                                Resident {index + 1} 
                            </Link>
                        </Card>
                    );
                })}
            </Box>
        </>
    );
};

export default LocationDetails;

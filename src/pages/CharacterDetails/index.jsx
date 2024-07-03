import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useUserDetailStore from '../../store/userDetail';

const ChracterDetails = () => {
    const {id} = useParams();
    const { character, isLoading, error, fetchUserDetail } = useUserDetailStore();
    useEffect(()=>{
        fetchUserDetail(id);
    },[id]);
    console.log('character',character);
  return (
    <>
    </>
  )
}

export default ChracterDetails
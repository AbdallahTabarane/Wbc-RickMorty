import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({pagination, handleChange, page}) => {
  return (
    
    <Pagination
    count={pagination?.pages }
    page={page}
    onChange={handleChange}
    variant="outlined"
    color="primary"
  />
  )
}

export default CustomPagination
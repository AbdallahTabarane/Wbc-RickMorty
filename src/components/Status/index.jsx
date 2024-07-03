import { Button, Typography } from '@mui/material';
import React from 'react'

const Status = ({status}) => {

  let sxProps = {
    color: 'white',
        marginTop: '5px',
        fontWeight:'600'
  };

  switch (status) {
    case 'Dead':
      sxProps = {
        ...sxProps,
        color: 'red',

      };
      break;
    case 'Alive':
      sxProps = {
        ...sxProps,
        color: 'green',

      };
      break;
    default:
      sxProps = {
        ...sxProps,
        color: 'gray',

      };
  }

  return (

    <Typography sx={sxProps}>
      {status}
    </Typography>
  )
}

export default Status
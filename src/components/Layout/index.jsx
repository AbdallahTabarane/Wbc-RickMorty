import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

const Layout = () => {
  return (
    <div>
        <Header />
        <Container component="main" sx={{ mt: 2, mb: 2 }}>
        <Outlet />
      </Container>
    </div>
  )
}

export default Layout
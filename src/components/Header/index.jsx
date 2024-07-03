import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Container, CssBaseline, Drawer, IconButton, List, ListItem, ListItemText, Toolbar ,Typography} from '@mui/material';
import Logo from '/siteLogo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { links } from '../../constants';



const Header= () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen);
    };
  
    const drawer = (
      <Box
        onClick={handleDrawerToggle}
        sx={{ width: 250 }}
        role="presentation"
      >
        <List>
          {links.map((link) => (
            <ListItem button key={link.name} component={Link} to={link.to}>
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  return (
    <>
<CssBaseline />
      <AppBar position="static" >
        <Toolbar >
            <Container sx={{
                display:'flex',
                alignItems:'center'
            }}>
          <IconButton edge="start" color="inherit" aria-label="logo" component={Link} to="/" sx={{ mr: 2 }}>
            <img src={Logo} alt="Logo" width={150} height={70} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {/* You can add some title or leave it empty */}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex', },gap:3 }}>
            {links.map((link) => (
              <Link key={link.name} to={link.to} style={{
                textDecoration:'none',
                color:'white'
              }}>
                {link.name}
              </Link>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: 250 }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
  
    </>
  );
}


export default Header;

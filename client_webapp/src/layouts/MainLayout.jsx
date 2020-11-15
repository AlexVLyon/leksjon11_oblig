import React from 'react';
import { Box } from '@chakra-ui/core';
import Navbar from '../components/Navbar';


const MainLayout = ({children}) => (
  <Box>
      <Navbar/>
    <Box>
    {children}
    </Box>
  </Box>
);

export default MainLayout;

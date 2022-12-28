import React from 'react'

import { Box, Container } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
        bg="gray.100"
        minH="100vh"
        py={12}
        px={{ base: 4, lg: 8 }}
    >
         <Container>
            {children}
        </Container>
    </Box>
   
  )
}

export default PageContainer
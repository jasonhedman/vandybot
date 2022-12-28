import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex
        direction="column"
        align="center"
    >
        <Text
            fontSize="4xl"
            fontWeight="bold"
        >
            College Essay Writer
        </Text>
        <Text
            fontSize="lg"
        >
            Provide brief explanations of your five most storyworthy experiences:
        </Text>
    </Flex>
  )
}

export default Header
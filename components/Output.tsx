import React from 'react'

import { Box, Text, VStack } from '@chakra-ui/react'

interface Props {
    outputText: string
    isGenerating: boolean
}

const Output: React.FC<Props> = ({ outputText, isGenerating }) => {
  return (
    <Box>
        {
            isGenerating ? (
                <Text>Generating...</Text>
            ) : (
                <VStack
                    align="left"
                >
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                    >
                        Output
                    </Text>
                    <Text>
                        {outputText}
                    </Text> 
                </VStack>
            )
        }
        
    </Box>
  )
}

export default Output
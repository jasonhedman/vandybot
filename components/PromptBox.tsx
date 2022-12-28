import React from 'react'

import { Button, Card, Textarea, Text } from '@chakra-ui/react'

import usePrompt from '../hooks/usePrompt'
import Output from './Output'

const PromptBox = () => {

    const { prompt, handlePromptChange, apiOutput, isGenerating, callGenerateEndpoint } = usePrompt()

    return (
        <Card
            p={4}
            w='100%'
            gap={4}
            bg='white'
        >
            <Text
                fontSize="xl"
                fontWeight="bold"
            >
                Prompt
            </Text>
            <Textarea 
                value={prompt}
                onChange={handlePromptChange}
                placeholder="Tell me about yourself..."
            />
            <Button
                colorScheme='blue'
                onClick={callGenerateEndpoint}
            >
                Generate
            </Button>
            <Output 
                outputText={apiOutput}
                isGenerating={isGenerating}
            />
        </Card>
    )
}

export default PromptBox
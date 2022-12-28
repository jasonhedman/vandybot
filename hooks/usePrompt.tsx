import { useState } from 'react'


const usePrompt = () => {
    const [prompt, setPrompt] = useState('')

    const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value)
    }

    const [apiOutput, setApiOutput] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)

    const callGenerateEndpoint = async () => {
        setIsGenerating(true);
        
        console.log("Calling OpenAI...")
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput: prompt }),
        });

        const data = await response.json();
        const { output } = data;
        console.log("OpenAI replied...", output.text)

        setApiOutput(`${output.text}`);
        setIsGenerating(false);
    }


    return {
        prompt,
        apiOutput,
        isGenerating,
        handlePromptChange,
        callGenerateEndpoint
    }
}

export default usePrompt
// src/hooks/useCodeRunner.js
import { useState } from 'react'

export const useCodeRunner = () => {
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const runCode = async (code) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('http://localhost:5000/api/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Bir hata oluştu')
      }
      
      setOutput(data.output)
    } catch (err) {
      setError(err.message)
      setOutput(`Hata: ${err.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    runCode,
    output,
    isLoading,
    error,
  }
}

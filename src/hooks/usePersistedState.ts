import { useState, useEffect } from 'react'

function usePersistedState(key: string, initialValue: boolean) {
  const [storedValue, setStoredValue] = useState(() => {
    const value = localStorage.getItem(key)
    try {
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default usePersistedState



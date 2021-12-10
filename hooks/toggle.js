import { useState } from 'react'

export function useToggle (initial = false) {
  const [value, setValue] = useState(initial)
  const onChange = e => {
    e && e.preventDefault()
    setValue(!value)
  }
  return [value, onChange]
}

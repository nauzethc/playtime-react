import { useState } from 'react'

export function useForm ({ defaults = {}, initialData = {} }) {
  const [form, setData] = useState({ ...defaults, ...initialData })

  const onChange = e => {
    const { name } = e.target
    setData({ ...form, [name]: e.target.value })
  }

  return [form, onChange]
}

export function useFormInput (initial = '') {
  const [value, setValue] = useState(initial)
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
}

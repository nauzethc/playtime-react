import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Portal ({ children, target }) {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(target)
    setMounted(true)
  }, [target])

  return mounted ? createPortal(children, ref.current) : null
}

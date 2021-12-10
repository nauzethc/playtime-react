import { useToggle } from '../hooks/toggle'
import { useState, useRef, useEffect } from 'react'

export default function TinyForm ({ initialValue = '' }) {
  const [search, setSearch] = useState(initialValue)
  const [collapsed, toggle] = useToggle(true)
  const inputElement = useRef(null)

  const handleSubmit = e => {
    e && e.preventDefault()
  }

  const handleInput = e => {
    setSearch(e.target.value)
  }

  const handleKey = e => {
    if (e.key === 'Escape') {
      toggle()
    }
  }

  useEffect(() => {
    if (!collapsed) {
      setSearch('')
      inputElement.current.focus()
    }
  }, [collapsed])

  return (
    <form
      onSubmit={handleSubmit}
      className={`tiny-form ${collapsed ? 'collapsed' : ''}`}
    >
      <input
        type='text'
        ref={inputElement}
        name='search'
        value={search}
        onChange={handleInput}
        onKeyDown={handleKey}
      />
      <button onClick={toggle}>
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </form>
  )
}

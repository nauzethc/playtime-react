import { throttle } from 'lodash'
import { useEffect } from 'react'
import { useFormInput } from '../hooks/forms'

export default function BasicForm ({ className, initialQuery = '', onSubmit }) {
  const query = useFormInput(initialQuery)

  const handleSubmit = throttle(
    e => {
      e && e.preventDefault()
      onSubmit && query.value && onSubmit({ search: query.value })
    },
    1000,
    { trailing: true }
  )

  useEffect(() => {
    const handler = setTimeout(handleSubmit, 500)
    return () => clearTimeout(handler)
  }, [query.value])

  return (
    <form
      className={`basic-form relative ${className || ''}`}
      onSubmit={handleSubmit}
    >
      <input
        className='pl-16 text-xl h-16 w-full'
        type='text'
        name='query'
        placeholder='Search...'
        {...query}
      />
      <svg
        className='w-8 h-8 opacity-50 absolute left-0 top-0 m-4'
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
    </form>
  )
}

import { useEffect } from 'react'
import { Platform, Genre, SortBy } from 'howlongtobeat-api'
import { useForm } from '../hooks/forms'
import { useToggle } from '../hooks/toggle'

const SORTBY_PAIRS = Object.entries(SortBy)
const PLATFORM_VALUES = Object.values(Platform)
const GENRE_VALUES = Object.values(Genre)
const DEFAULTS = {
  search: '',
  sortBy: '',
  platform: '',
  genre: ''
}

export default function AdvancedForm ({
  className,
  initialData = {},
  onSubmit
}) {
  const [collapsed, handleToggle] = useToggle(true)
  const [form, handleChange] = useForm({ defaults: DEFAULTS, initialData })

  const handleSubmit = e => {
    e && e.preventDefault()
    if (onSubmit) {
      collapsed ? onSubmit({ search: form.search }) : onSubmit(form)
    }
  }

  useEffect(handleSubmit, [form.genre, form.sortBy, form.platform])
  useEffect(() => {
    const handler = setTimeout(() => handleSubmit(), 500)
    return () => clearTimeout(handler)
  }, [form.search])

  return (
    <form className={`advanced-form gap-0 ${className || ''}`} onSubmit={handleSubmit}>
      <div className='field relative'>
        <input
          className='h-16 pl-16 pr-12 flex-grow text-xl w-full'
          type='text'
          name='search'
          placeholder='Search games...'
          value={form.search}
          onChange={handleChange}
        />
        <svg
          className='w-8 h-8 absolute left-0 top-0 m-4 opacity-50'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
        </svg>
        <button
          type='button'
          className='h-full w-12 absolute right-0 top-0 bg-gray-500 flex items-center justify-center'
          onClick={handleToggle}>
          {collapsed
            ? <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            : <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z' clipRule='evenodd' />
              </svg>
          }
        </button>
      </div>
      <fieldset className={`${collapsed ? 'hidden' : 'grid'} grid-cols-1 sm:grid-cols-3 gap-4 px-4 py-3 bg-gray-900`}>
        <div className='field'>
          <label htmlFor='sortBy'>Sort by</label>
          <select name='sortBy' value={form.sortBy} onChange={handleChange}>
            {SORTBY_PAIRS.map(([key, value]) => (
              <option key={value} value={value}>
                {key || 'All'}
              </option>
            ))}
          </select>
        </div>
        <div className='field'>
          <label htmlFor='platform'>Platform</label>
          <select name='platform' value={form.platform} onChange={handleChange}>
            {PLATFORM_VALUES.map(platform => (
              <option key={platform} value={platform}>
                {platform || 'All'}
              </option>
            ))}
          </select>
        </div>
        <div className='field'>
          <label htmlFor='genre'>Genre</label>
          <select name='genre' value={form.genre} onChange={handleChange}>
            {GENRE_VALUES.map(genre => (
              <option key={genre} value={genre}>
                {genre || 'All'}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    </form>
  )
}

import AdvancedForm from '../../components/AdvancedForm'
import Spinner from '../../components/Spinner'
import GameResult from '../../components/GameResult'
import { useSearch } from '../../hooks/howlongtobeat'
import { useRouter } from 'next/router'
import { useIntersectionObserver } from 'react-intersection-observer-hook'
import { useEffect, useState } from 'react'

function Results ({ data = [] }) {
  return (
    <div className='results grid sm:grid-cols-2'>
      {data.map(game => (
        <GameResult key={game.id} data={game} />
      ))}
    </div>
  )
}

function Search (urlParams) {
  const router = useRouter()
  const [state, search] = useSearch()
  const [query, setQuery] = useState(urlParams)
  const [ref, { entry }] = useIntersectionObserver()
  const isVisible = entry && entry.isIntersecting

  const handleSubmit = formData => {
    router.push({ pathname: router.pathname, query: formData })
  }

  // On interesect
  useEffect(() => {
    if (isVisible) {
      if (state.data.length < state.total) {
        setQuery({ ...query, page: (query.page || 1) + 1 })
      }
    }
  }, [isVisible])

  // On query change
  useEffect(() => setQuery(urlParams), [urlParams])
  useEffect(() => search(query), [query])

  return (
    <div id='search-page' className='flex flex-col'>
      <AdvancedForm onSubmit={handleSubmit} initialData={query} />
      <Results data={state.data} />
      <Spinner isLoading={state.pending} className='self-center my-4'>
        <span ref={ref} />
      </Spinner>
    </div>
  )
}

Search.getInitialProps = async ctx => ctx.query

export default Search

import AdvancedForm from '../../components/AdvancedForm'
import Spinner from '../../components/Spinner'
import GameResult from '../../components/GameResult'
import { useSearch } from '../../hooks/howlongtobeat'
import { useRouter } from 'next/router'

function Results ({ data = [] }) {
  return (
    <div className='results grid sm:grid-cols-2'>
      {data.map(game => (
        <GameResult key={game.id} data={game} />
      ))}
    </div>
  )
}

function Search (query) {
  const router = useRouter()
  const [state, request] = useSearch()
  const handleSubmit = query => {
    router.push({ pathname: router.pathname, query })
    request(query)
  }

  return (
    <div id='search-page'>
      <AdvancedForm onSubmit={handleSubmit} initialData={query} />
      <Spinner isLoading={state.pending} className=''>
        <Results data={state.data} />
      </Spinner>
    </div>
  )
}

Search.getInitialProps = async ctx => ctx.query

export default Search

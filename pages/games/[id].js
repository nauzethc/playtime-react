import { getGameById } from '../../services/igdb'
import { useGame } from '../../hooks/howlongtobeat'
import { useToggle } from '../../hooks/toggle'
import { useRouter } from 'next/router'

import GameplayTable from '../../components/GameplayTable'
import TinyForm from '../../components/TinyForm'
import Portal from '../../components/Portal'

const BASE_URL = process.env.HLTB_BASE_IMG_URL || 'https://howlongtobeat.com/games'

function percent (value = 0, total = 0) {
  if (!value || !total) return '0%'
  const pc = value * 100 / total
  return isNaN(pc) ? 'N/A' : `${Math.floor(pc)}%`
}

function Stats ({ stats }) {
  if (!stats) return ''
  const items = [
    { label: 'Playing', value: stats.count_playing },
    { label: 'Beat', value: stats.count_comp },
    { label: 'Backlogs', value: stats.count_backlog },
    { label: 'Rating', value: stats.count_review },
    { label: 'Retired', value: percent(stats.count_retired, stats.count_comp) },
    { label: 'Replays', value: percent(stats.count_replay, stats.count_comp) }
  ]
  return (
    <div className='stats flex-grow'>
      <ul className='grid grid-cols-2 gap-2 sm:grid-cols-1 md:grid-cols-2'>
        {items.map(({ label, value }) => (
          <li
            key={label}
            className='flex items-center justify-between gap-1 rounded-lg px-3 py-1 bg-gray-600'
          >
            <span className='label'>{label}</span>
            <span className='value font-semibold'>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Genres ({ genres = '' }) {
  return (
    <ul className='genres'>
      {genres
        ? genres.split(', ').map(genre => (
          <li key={genre} className='inline'>
            {genre}
          </li>
        ))
        : <li>Unknown developer</li>
      }
    </ul>
  )
}

function AdditionalData ({ summary }) {
  const [collapsed, toggle] = useToggle(true)
  return (
    <div className='additional-data bg-gray-600 w-full relative'>
      <div className={`px-4 py-8 ${collapsed ? 'hidden' : 'block'}`}>
        <p className=''>{summary}</p>
      </div>
      <button
        id='expand-button'
        className='cursor-pointer rounded-full w-8 h-8 grid items-center justify-center absolute right-4 bottom-0 -mb-4 bg-gray-600 text-gray-200 hover:bg-purple-500 transition-colors'
        onClick={toggle}>
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
  )
}

export default function Game ({ id, data, error }) {
  const [state] = useGame(id, { data, error })
  const router = useRouter()
  const initalValue = router.query.search || ''
  const handleSubmit = query => router.push({ pathname: '/games', query })

  const game = state.data ? state.data.game[0] || {} : {}
  const platforms = state.data ? state.data.platformData : []

  return (
    <div id='game-page' className='flex flex-col'>
      <Portal target='#actions-container'>
        <TinyForm onSubmit={handleSubmit} initialValue={initalValue} />
      </Portal>
      <div className='flex flex-col'>
        <div className='header flex flex-wrap px-4 py-8 gap-6 bg-gray-700'>
          <picture className='media flex-shrink-0'>
            <img
              src={`${BASE_URL}/${game.game_image}`}
              alt={game.game_name}
              className='cover block w-full rounded-lg'
            />
          </picture>
          <div className='metadata flex flex-col gap-2'>
            <h2 className='title font-semibold text-2xl'>{game.game_name}</h2>
            <h3 className='developers font-light'>{game.profile_dev}</h3>
            <Genres genres={game.profile_genre} />
          </div>
          <Stats stats={game} />
        </div>
        <AdditionalData summary={game.profile_summary} />
        <div className="grid px-4 py-3 gap-4">
          <GameplayTable
            title="Single-player"
            type="single-player"
            data={game} />
          <GameplayTable
            title="Multi-player"
            type="multi-player"
            data={game} />
          <GameplayTable
            title="Speed-run"
            type="speed-run"
            data={game} />
          <GameplayTable
            title="Platforms"
            type="platforms"
            data={platforms} />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const { id } = query
  try {
    const data = await getGameById(id)
    return {
      props: {
        id,
        data,
        error: null
      }
    }
  } catch (error) {
    return {
      props: {
        id,
        data: null,
        error
      }
    }
  }
}

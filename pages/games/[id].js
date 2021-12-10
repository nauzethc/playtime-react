import { useGame } from '../../hooks/howlongtobeat'
import { useToggle } from '../../hooks/toggle'
import GameplayTable from '../../components/GameplayTable'
import Spinner from '../../components/Spinner'

function Developers ({ developers }) {
  return Array.isArray(developers) ? developers.join(', ') : 'Unknown developer'
}

function Stats ({ stats }) {
  if (!stats) return ''
  const items = [
    { label: 'Playing', value: stats.playing },
    { label: 'Beat', value: stats.beat },
    { label: 'Backlogs', value: stats.backlogs },
    {
      label: 'Rating',
      value: `${((stats.rating || 0) * 100).toFixed(1)}%`
    },
    {
      label: 'Retired',
      value: `${((stats.retired || 0) * 100).toFixed(1)}%`
    },
    { label: 'Replays', value: stats.replays }
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

function Genres ({ genres }) {
  return (
    <ul className='genres'>
      {Array.isArray(genres)
        ? (
            genres.map(genre => (
              <li key={genre} className='inline'>
                {genre}
              </li>
            ))
          )
        : (
          <li>Unknown developer</li>
          )}
    </ul>
  )
}

function Gameplays ({ gameplays }) {
  const tableTitle = type => {
    switch (type) {
      case 'single':
        return 'Single-player'
      case 'multi':
        return 'Multi-player'
      case 'dlc':
        return 'DLC'
      default:
        return type.charAt(0).toUpperCase() + type.slice(1)
    }
  }
  return (
    <div className='gameplays flex flex-col px-4 py-3 gap-8 container mx-auto mt-8'>
      {gameplays &&
        Object.entries(gameplays).map(([gameplayType, gameplayData]) => (
          <div className='section' key={gameplayType}>
            <h3 className='text-xl'>{tableTitle(gameplayType)}</h3>
            <hr />
            <GameplayTable data={gameplayData} type={gameplayType} />
          </div>
        ))}
    </div>
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
        onClick={toggle}
      >
        {collapsed
          ? (
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
            )
          : (
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
            )}
      </button>
    </div>
  )
}

function Game ({ id }) {
  const [state] = useGame(id)
  const game = state.data || {}
  const { developers, stats, genres } = game

  return (
    <div id='game-page' className='flex flex-col'>
      <Spinner isLoading={state.pending} className='self-center my-4'>
        <div className='flex flex-col'>
          <div className='header flex flex-wrap px-4 py-8 gap-6 bg-gray-700'>
            <picture className='media flex-shrink-0'>
              <img
                src={game.imageUrl}
                alt={game.name}
                className='cover block w-full rounded-lg'
              />
            </picture>
            <div className='metadata flex flex-col gap-1'>
              <h2 className='title font-semibold text-2xl'>{game.name}</h2>
              <h3 className='developers font-light'>
                <Developers developers={developers} />
              </h3>
              <ul className='genres'>
                <Genres genres={genres} />
              </ul>
            </div>
            <Stats stats={stats} />
          </div>
          <AdditionalData summary={game.description} />
          <Gameplays gameplays={game.gameplays} />
        </div>
      </Spinner>
    </div>
  )
}

Game.getInitialProps = async ctx => {
  const { id } = ctx.query
  return { id }
}

export default Game

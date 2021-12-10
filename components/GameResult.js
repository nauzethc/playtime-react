import Link from 'next/link'
import ProgressBar from './ProgressBar'

function Gameplays ({
  gameplayMain = 0,
  gameplayExtended = 0,
  gameplayCompletionist = 0,
  gameplayMulti = 0
}) {
  const max = Math.max.apply(null, [
    gameplayMain,
    gameplayExtended,
    gameplayCompletionist,
    gameplayMulti
  ])
  const data = [
    {
      label: 'Main',
      value: gameplayMain,
      icon: (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
        </svg>
      )
    },
    {
      label: 'Extended',
      value: gameplayExtended,
      icon: (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
          <path
            fillRule='evenodd'
            d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
            clipRule='evenodd'
          />
        </svg>
      )
    },
    {
      label: 'Complete',
      value: gameplayCompletionist,
      icon: (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
          <path
            fillRule='evenodd'
            d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
            clipRule='evenodd'
          />
        </svg>
      )
    },
    {
      label: 'Multiplayer',
      value: gameplayMulti,
      icon: (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
        </svg>
      )
    }
  ]
    .filter(g => g.value)
    .map(({ label, value, icon }) => ({
      label,
      icon,
      value: value.toFixed(1),
      percent: (value * 100) / max
    }))
  return (
    <ul>
      {data.map(({ label, value, percent, icon }) => (
        <li key={label}>
          {icon}
          <span className='label' aria-hidden='true'>
            {label}
          </span>
          <span className='value' aria-hidden='true'>
            {value}
          </span>
          <ProgressBar value={percent} label={value} helpText={label} />
        </li>
      ))}
    </ul>
  )
}

export default function GameResult ({ data = {} }) {
  return (
    <div className='game-result'>
      <div className='media w-24 h-36 relative'>
        <Link href={`/games/${data.id}`}>
          <img className='cover' src={data.imageUrl} alt={data.name} />
        </Link>
      </div>
      <div className='metadata'>
        <h3>
          <Link href={`/games/${data.id}`}>
            <a>{data.name}</a>
          </Link>
        </h3>
        <Gameplays {...data} />
      </div>
    </div>
  )
}

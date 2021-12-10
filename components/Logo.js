export default function Logo ({ className }) {
  return (
    <div className={`logo ${className || ''}`}>
      <a href='/' alt='PlayTime'>
        <span className='text-purple-500'>Play</span>
        <span className='font-bold'>Time</span>
      </a>
    </div>
  )
}

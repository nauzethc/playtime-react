import Link from 'next/link'

export default function Logo ({ className }) {
  return (
    <div className={`logo ${className || ''}`}>
      <Link href="/">
        <a alt="PlayTime">
          <span className="text-purple-500">Play</span>
          <span className="font-bold">Time</span>
        </a>
      </Link>
    </div>
  )
}

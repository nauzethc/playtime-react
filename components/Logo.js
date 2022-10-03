import Link from 'next/link'

export default function Logo ({ className }) {
  return (
    <div className={`logo ${className || ''}`}>
      <Link href="/">
        <a alt="PlayTime">
          <span className="font-extralight text-purple-500">Play</span>
          <span className="font-semibold">Time</span>
        </a>
      </Link>
    </div>
  )
}

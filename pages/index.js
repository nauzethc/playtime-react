import { useRouter } from 'next/router'
import BasicForm from '../components/BasicForm'
import Logo from '../components/Logo'

export default function Home () {
  const router = useRouter()
  const handleSubmit = query => router.push({ pathname: '/games', query })

  return (
    <div id="home-page" className="h-full container px-8 flex flex-col items-center justify-center mx-auto">
      <Logo />
      <a className="text-xs text-gray-600" href="https://howlongtobeat.com">
        HowLongToBeat.com
      </a>
      <BasicForm className="mt-8" onSubmit={handleSubmit} />
    </div>
  )
}

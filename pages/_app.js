import 'tailwindcss/tailwind.css'
import '../assets/styles.css'
import Logo from '../components/Logo'
import { useRouter } from 'next/router'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const isHome = router.pathname === '/'
  return (
    <div id="app">
      <Head>
        <title>PlayTime</title>
        <meta name="application-name" content="PlayTime" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PlayTime" />
        <meta name="description" content="HowLongToBeat.com clone" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#581c87" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#111827" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#581c87" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://playtime-react.vercel.app" />
        <meta name="twitter:title" content="PlayTime" />
        <meta name="twitter:description" content="HowLongToBeat.com clone" />
        <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@nauzethc" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PlayTime" />
        <meta property="og:description" content="HowLongToBeat.com clone" />
        <meta property="og:site_name" content="PlayTime" />
        <meta property="og:url" content="https://playtime-react.vercel.app" />
        <meta property="og:image" content="https://playtime-react.vercel.app/icons/apple-touch-icon.png" />
      </Head>
      {!isHome
        ? <header>
          <div className="w-full flex items-center justify-between">
            <Logo className="text-xl" />
            <div id="actions-container" className="flex items-center justify-end" />
          </div>
        </header>
        : null
      }
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <div className="flex w-full justify-between text-gray-500">
          <a href="https://twitter.com/nauzethc">Nauzet Hernandez</a>
          <a href="https://github.com/nauzethc/playtime-react" className="inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>Github</span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default MyApp

import axios from 'axios'

const BASE_URL = process.env.HLTB_BASE_URL || 'https://howlongtobeat.com'
const BUILD_HASH = process.env.HTLB_BUILD_HASH || '997y1kqsFF5nE6UNFcl8z'

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Referer: BASE_URL
  }
})

export function findGames ({
  search = '',
  platform = '',
  sortBy = 'popular',
  genre = '',
  page = 1
}) {
  return http.post('/api/search', {
    searchType: 'games',
    searchTerms: (search ?? '').split(' '),
    searchPage: Number(page) || 1,
    searchOptions: {
      games: {
        userId: 0,
        platform,
        sortCategory: sortBy,
        rangeCategory: 'main',
        rangeTime: {
          min: 0,
          max: 0
        },
        gameplay: {
          perspective: '',
          flow: '',
          genre
        },
        modifier: ''
      },
      filter: '',
      sort: 0,
      randomizer: 0
    }
  })
    .then(res => res.data)
}

export function getGameById (gameId) {
  return http
    .get(`/_next/data/${BUILD_HASH}/game/${gameId}.json`)
    .then(res => res.data.pageProps.game.data)
}

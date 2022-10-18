const BASE_URL = process.env.HLTB_BASE_URL || 'https://howlongtobeat.com'
const JSON_REGEX = /<script\s+id="__NEXT_DATA__"\s+type="application\/json">(?<data>.*)<\/script>/

const defaultHeaders = {
  'Content-Type': 'application/json',
  Referer: BASE_URL
}

export function findGames ({
  search = '',
  platform = '',
  sortBy = 'popular',
  genre = '',
  page = 1
}) {
  return fetch(`${BASE_URL}/api/search`, {
    method: 'POST',
    body: JSON.stringify({
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
    }),
    headers: defaultHeaders
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(`Request error: ${res.statusText}`)
      }
    })
}

export function getGameById (gameId) {
  return fetch(`${BASE_URL}/game/${gameId}`, {
    method: 'GET',
    headers: defaultHeaders
  })
    .then(async res => {
      if (res.ok) {
        const body = await res.text()
        const json = JSON_REGEX.exec(body)
        const data = json.length > 1 ? JSON.parse(json[1]) : null
        return data?.props?.pageProps?.game?.data
      } else {
        throw new Error(`Request error: ${res.statusText}`)
      }
    })
}

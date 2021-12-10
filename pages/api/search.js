import { find } from 'howlongtobeat-api'

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Invalid request method' })
  } else {
    const games = await find(req.body)
    res.status(200).json(games)
  }
}

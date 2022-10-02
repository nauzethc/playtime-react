import { findGames } from '../../services/igdb'

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Invalid request method' })
  } else {
    const games = await findGames(req.body)
    res.status(200).json(games)
  }
}

import { getGameById } from '../../services/igdb'

export default async function handler (req, res) {
  const { id } = req.query
  const game = await getGameById(id)
  if (game) {
    res.status(200).json(game)
  } else {
    res.status(404).json({ message: 'Game not found' })
  }
}

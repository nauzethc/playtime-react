import { get } from 'howlongtobeat-api'

export default async function handler (req, res) {
  const { id } = req.query
  const game = await get(id)
  if (game) {
    res.status(200).json(game)
  } else {
    res.status(404).json({ message: 'Game not found' })
  }
}

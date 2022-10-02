export function toRelativeTime(seconds = 0) {
  if (!seconds) return '-'
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return `${hours}h ${minutes > 9 ? minutes : '0' + minutes}m`
}
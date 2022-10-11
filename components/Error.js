export default function Error ({ error }) {
  return error
    ? <div className="bg-red-500 text-red-100 px-4 py-3 error">{error?.message ?? error ?? 'Unknown error'}</div>
    : null
}

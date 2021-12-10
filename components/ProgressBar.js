export default function ProgressBar ({ value = 0, label = '', helpText = '' }) {
  return (
    <div className={`progress-bar ${helpText ? 'has-help' : ''}`}>
      <div className='fill-bar' style={{ maxWidth: `${value}%` }} />
      <span
        className='help-text'
        tabIndex='0'
        style={{ maxWidth: `${value}%` }}
      >
        {helpText}
      </span>
      <span className='label'>{label}</span>
    </div>
  )
}

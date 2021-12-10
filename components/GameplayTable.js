function icon (type) {
  switch (type) {
    case 'Main Story':
    case 'main':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
        </svg>
      )
    case 'Main + Extras':
    case 'extended':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
          <path
            fillRule='evenodd'
            d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
            clipRule='evenodd'
          />
        </svg>
      )
    case 'Completionists':
    case '100%':
    case 'completionist':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
          <path
            fillRule='evenodd'
            d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
            clipRule='evenodd'
          />
        </svg>
      )
    case 'All PlayStyles':
    case 'Any%':
    case 'all':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z'
            clipRule='evenodd'
          />
        </svg>
      )
    case 'Co-Op':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
        </svg>
      )
    case 'Competitive':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
        </svg>
      )
    case 'fastest':
    case 'rushed':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M57.18,13.311c0.946-4.942,5.725-8.179,10.664-7.228c4.943,0.952,8.178,5.723,7.227,10.668  c-0.948,4.938-5.721,8.176-10.663,7.226C59.465,23.025,56.229,18.251,57.18,13.311z M34.965,71.406l-16.237,1.381  c-2.745,0.255-4.765,2.691-4.507,5.438c0.256,2.75,2.692,4.768,5.44,4.51l17.963-1.524c0.276-0.026,0.541-0.09,0.798-0.155  c1.671-0.104,3.253-1.025,4.105-2.611l6.607-12.266l-8.467-5.354L34.965,71.406z M85.534,36.234  c-0.826-2.253-3.325-3.408-5.576-2.58l-10.017,3.64l-4.239-5.343c0.051-3-1.603-5.906-4.487-7.293  c-2.136-1.025-4.5-1.002-6.525-0.145l-11.872-2.122c-0.384-0.067-0.761-0.065-1.13-0.033c-1.024-0.09-2.08,0.164-2.969,0.824  l-11.007,8.131c-1.925,1.429-2.324,4.154-0.895,6.08c1.432,1.925,4.152,2.324,6.082,0.895l9.637-7.12l6.174,1.107l-7.5,15.206  c-0.309,0.641-0.805,2.146-0.875,2.25c-1.559,2.28-0.972,5.389,1.308,6.944l0.919,0.626l8.295,5.676l12.629,8.639l6.943,19.238  c0.977,2.584,3.86,3.883,6.442,2.901c2.579-0.981,3.878-3.864,2.896-6.448l-7.279-20.185c-0.314-0.821-0.832-1.496-1.457-2.022  c-0.344-0.506-0.776-0.963-1.311-1.328l-14.107-9.646l6.359-12.893l2.605,3.282c0.215,0.268,0.459,0.494,0.717,0.699  c1.146,1.346,3.038,1.917,4.798,1.276l12.857-4.68C85.204,40.981,86.359,38.487,85.534,36.234z' />
        </svg>
      )
    case 'slowest':
    case 'longest':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M79.866,43.289c-4.561,2.635-4.417,9.072-15.582,17.687c-2.718,2.097,2.877,13.103,0.454,15.556  c-2.468,2.499-12.35,2.623-14.739,1.26c-3.517-2.007-0.76-7.243,0.027-14.886c-7.206,0.735-9.541,0.615-16.783,0.313  c1.104,5.799,2.719,12.246,0.377,14.37c-1.909,1.731-11.198,1.919-14.103,0.022c-3.635-2.374,2.634-15.875,0.509-16.093  c-2.445-0.25-17.353,0.334-14.716-15.842c2.789,4.076,7.56,7.912,13.032,6.188c0.746-13.723,9.071-26.068,22.358-26.068  s22.684,10.307,22.754,23.079c7.867-5.908,2.084-20.426,11.514-25.857c6.712-3.866,14.563-1.869,18.307,4.257  c1.955,3.199,2.565,8.84,0.141,11.938C89.809,43.823,82.995,41.481,79.866,43.289z' />
        </svg>
      )
    case 'leisure':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          data-name='Camada 1'
          viewBox='0 0 32 32'
          x='0px'
          y='0px'
        >
          <path d='M17.24866,8.18481a3.09229,3.09229,0,1,0-3.092-3.09228A3.0922,3.0922,0,0,0,17.24866,8.18481Z' />
          <path d='M25.8805,14.99976l-.53028-.04541V12.50073a1,1,0,1,0-2,0v2.28272l-3.0852-.26367a2.01953,2.01953,0,0,1-1.0398-.89014,39.61006,39.61006,0,0,0-2.2102-3.6499,3.09,3.09,0,0,0-2.17993-.91993,5.65717,5.65717,0,0,0-2.64991.65967l-.08007.04-.06543.03516a.98607.98607,0,0,0-.94629-.73487H9.47571a3,3,0,0,0-3,3.00342s.00171,1.40479-.01684,1.40137a1,1,0,0,0-1,1,14.2113,14.2113,0,0,0,.34668,1.90527c.3435,1.39893.86645,3.50977,2.67724,3.50977h2.2124l-.43017,3a1.87622,1.87622,0,0,1-.2898.83008l-2.27,3.63965a1.758,1.758,0,0,0,.65992,2.47021,1.32169,1.32169,0,0,0,1.60009-.52l2.87989-4.04a4.16558,4.16558,0,0,0,.55-1.43017l.35986-1.56983a.4277.4277,0,0,1,.75-.18017l2.11011,2.12011.8999,4.97022a.99983.99983,0,0,0,.99.83008h.68017a1.01748,1.01748,0,0,0,1.00855-1.15039L19.495,23.53979a4.14835,4.14835,0,0,0-.65991-1.73l-1.73-2.56005a1.9858,1.9858,0,0,1-.3-1.52l.18017-.96a.385.385,0,0,1,.57984-.25,6.17916,6.17916,0,0,0,2.76,1.03613h3.02514V28.99976a1,1,0,1,0,2,0V17.53247c.512-.0581.94239-.25342,1.0503-.793l.11987-.6001A.99918.99918,0,0,0,25.8805,14.99976Z' />
        </svg>
      )
    case 'most':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
      )
    case 'least':
      return (
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
      )
    case 'median':
      return <span>(med)</span>
    case 'average':
      return <span>(avg)</span>
    default:
      return ''
  }
}

function label (type) {
  switch (type) {
    case 'average':
      return '(avg)'
    case 'median':
      return '(med)'
    case 'Main Story':
      return 'Main'
    case 'Main + Extras':
      return 'Extended'
    case 'Completionists':
    case '100%':
      return 'Complete'
    case 'All PlayStyles':
      return 'All'
    case 'Any%':
      return 'Any'
    default:
      return type
  }
}

function columns (type) {
  switch (type) {
    case 'single':
      return ['average', 'median', 'rushed', 'leisure']
    case 'multi':
      return ['average', 'median', 'least', 'most']
    case 'dlc':
    case 'mainGame':
      return ['main', 'extended', 'completionist', 'all']
    case 'speedrun':
      return ['average', 'median', 'fastest', 'slowest']
    case 'platforms':
      return ['main', 'extended', 'completionist', 'fastest', 'longest']
    default:
      return []
  }
}

export default function GameplayTable ({ type, data }) {
  return (
    <table className='gameplay-table' data-type={type}>
      <thead>
        <tr>
          <th data-column='type' />
          <th data-column='polled'>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                clipRule='evenodd'
              />
            </svg>
            <span className='label-hint' tabIndex='0'>
              Polled
            </span>
          </th>
          {columns(type).map(column => (
            <th key={column} data-column={column}>
              {icon(column)}
              <span className='label-hint' tabIndex='0'>
                {column.charAt(0).toUpperCase() + column.slice(1)}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((gameplay, index) => (
          <tr key={index}>
            {type === 'dlc' || type === 'platforms'
              ? (
                <td>
                  <span>{gameplay.platform || gameplay.name}</span>
                  <span className='label-hint' tabIndex='0'>
                    {gameplay.platform || gameplay.name}
                  </span>
                </td>
                )
              : (
                <td>
                  {icon(gameplay.type)}
                  <span className='label-hint' tabIndex='0'>
                    {label(gameplay.type)}
                  </span>
                </td>
                )}
            <td>{gameplay.polled}</td>
            {columns(type).map(column => (
              <td key={column}>{gameplay[column] || '-'}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

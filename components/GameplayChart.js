import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

function parsePolled (polled) {
  if (!polled) return 0
  let multiplier = 1
  if (polled.includes('K')) {
    multiplier = 1000
  } else if (polled.includes('M')) {
    multiplier = 1000000
  }
  return parseFloat(polled) * multiplier
}

export default function GameplayChart ({ data = [] }) {
  const columns = ['main', 'extended', 'completionist', 'fastest', 'longest']
  const stats = data
    .map(p => [p.platform, parsePolled(p.polled)])
    .sort((a, b) => b[1] - a[1])
  const total = stats.map(s => s[1]).reduce((a, b) => a + b)

  const config = {
    labels: stats.map(p => p[0]),
    datasets: [
      {
        label: 'Users polled',
        data: stats.map(p => p[1]),
        hoverOffset: 4,
        backgroundColor: [
          '#FAF5FF',
          '#F3E8FF',
          '#E9D5FF',
          '#D8B4FE',
          '#C084FC',
          '#A855F7',
          '#9333EA',
          '#7E22CE',
          '#6B21A8',
          '#581C87'
        ].reverse(),
        hoverBackgroundColor: '#A855F7',
        borderColor: 'rgb(31, 41, 55)'
      }
    ]
  }
  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <div className='gameplay-chart self-center my-8'>
      <Doughnut data={config} options={options} />
    </div>
  )
}

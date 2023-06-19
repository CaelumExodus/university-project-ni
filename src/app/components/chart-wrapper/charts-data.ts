const chartData1 =   {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [{
    data: [126, 260, 354, 482, 656, 892, 1214, 1653, 2249, 3061],
    fill: true,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const chartData2 =   {
  labels: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
  datasets: [{
    data: [95.602, 142.319, 207.902, 298.246, 420.465, 582.948, 795.384, 1068.718, 1415.054, 1847.495],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const chartData3 =   {
  labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [{
    data: [5.23, 29.17, 14.99, 19.83, 47.33, 45.58, 66.98, 119.54, 176.47],
    fill: true,
    borderColor: 'rgb(0, 153, 0)',
    tension: 0.1
  }]
};

export const chartsData = [
  {
    title: 'Przychody z rynku sztucznej inteligencji na całym świecie w latach 2015-2024',
    type: 'line',
    data: chartData1,
    options: setOptionsForChart('Przychody w mld USD', 'Lata')
  },
  {
    title: 'Wielkość rynku sztucznej inteligencji na świecie w 2021 r. z prognozą do 2030 r.',
    type: 'bar',
    data: chartData2,
    options: setOptionsForChart('Rynek w mln USD', 'Lata')
  },
  {
    title: 'Globalne inwestycje korporacyjne w sztuczną inteligencję według DZIAŁALNOŚCI INWESTYCYJNEJ, 2013-2021',
    type: 'line',
    data: chartData3,
    options: setOptionsForChart('Łączne inwestycje w mln USD', 'Lata')
  }
]

function setOptionsForChart(x: string, y: string) {
  return {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      y: {
        title: {
          display: true,
            text: x
        }
      },
      x: {
        title: {
          display: true,
            text: y
        }
      },
    }
  }
}





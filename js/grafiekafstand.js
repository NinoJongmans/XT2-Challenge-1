var ctx = document.getElementById('afstandsGrafiek');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1 maand', '2 maanden', '3 maanden', '4 maanden', '5 maanden'],
        datasets: [{
            label: 'Afgelegde afstand in Miljoenen KM',
            data: [11, 17, 25, 30, 35],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'black',
                fontSize: 12
            }
        }
    }
});
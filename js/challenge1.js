var ctx = document.getElementById('myChart').getContext('2d');

//Gradiënt kleur voor grafiek
var gradientStroke = ctx.createLinearGradient(500, 0, 300, 0);
gradientStroke.addColorStop(0, '#28ed00');

gradientStroke.addColorStop(1, '#e30f00');

var chart = new Chart(ctx, {
    // lijn grafiek
    type: 'line',

    // data lijn grafiek + gradiënt toevoeging (puur om te oefenen)
    data: {
        labels: ['Lancering', '1e maand', '2e maand', '3e maand', '4e maand', '5e maand'],
        datasets: [{
            label: 'Distance to go in Kilometers',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            PointHoverBackgroundColor: gradientStroke,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            PointRadius: 3,
            fill: gradientStroke,
            borderWidth: 4,
            data: [400000, 346182, 301020, 239991, 187321, 143869]
        }]
    },

    // opties voor de style van de grafiek
   options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(25, 114, 255, 1)'
            },
            position: "bottom"
            
        },

        //geeft de properties weer voor de x- en de y-as
        scales: {
            //y-as properties
            yAxes: [{
                ticks: {
                    fontColor: "rgba(255,255,255,1)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
}],
            //x-as properties
            xAxes: [{
                gridLines: {
                    zeroLineColor: "none"
},
                ticks: {
                    padding: 20,
                    fontColor: "rgba(255,255,255,1)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
};

// een pie chart
var ctx = document.getElementById('pieChart');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data = {
    datasets: [{
        backgroundColor: 'rgba(25, 114, 255, 1)',
        data: [10, 20, 30],
        backgroundColor: [
        window.chartColors.red,
        window.chartColors.yellow,
        window.chartColors.blue,
        window.chartColors.green,
        window.chartColors.blue,
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red', 
        'Yellow',
        'Blue'
    ]
},

options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(25, 114, 255, 1)'
            }
        }
    }

    
});
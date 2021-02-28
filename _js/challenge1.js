var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // lijn grafiek
    type: 'line',

    // data lijn grafiek
    data: {
        labels: ['January', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Distance to go',
            backgroundColor: 'rgba(43, 98, 186, 0.7)',
            borderColor: 'rgba(25, 114, 255, 1)',
            data: [0, 5, 2, 20, 30, 45]
        }]
    },

    // opties voor de style van de grafiek
   options: {
        legend: {
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

// een pie chart
var ctx = document.getElementById('pieChart');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data = {
    datasets: [{
        backgroundColor: 'rgba(25, 114, 255, 1)',
        data: [10, 20, 30]
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
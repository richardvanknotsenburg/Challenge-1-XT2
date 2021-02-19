var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(43, 98, 186, 0.7)',
            borderColor: 'rgba(25, 114, 255, 1)',
            data: [0, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgba(25, 114, 255, 1)'
            }
        }
    }
});
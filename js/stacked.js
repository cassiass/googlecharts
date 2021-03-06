google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawStackedChart);

//stacked columns
    function drawStackedChart(){
        var data = google.visualization.arrayToDataTable([
        ['Faculdade', 'Transporte', 'Lazer', 'Internet', 'Cartão de crédito',
         'Alimentação', { role: 'annotation' } ],
        ['2014', 10, 24, 20, 32, 18, ''],
        ['2015', 16, 22, 23, 30, 16, ''],
        ['2016', 28, 19, 29, 30, 12, ''],
        ['2017', 28, 19, 29, 30, 12, '']
      ]);

      var view = new google.visualization.DataView(data);
       

       var options = {
          isStacked: true,
          height: 300,
          legend: {position: 'right', maxLines: 3},
          vAxis: {
            minValue: 0,
          },
          title: 'ColumnChart de gastos sem as colunas darem 100% (serem full stacked)'
        };

      var chart = new google.visualization.ColumnChart(document.getElementById("drawStackedChart_div"));
      chart.draw(view, options);

    }
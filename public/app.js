fetch('./data.json').then(response => response.json()).then(data => {
    console.log(data, 'From the fetch call')
    chartForMatchesPerSeason(data.MatchesPlayed);
    // barChartForNoOfWins(data["MatchesWonPerTeamPerYear"]);
    // chartForExtraRunsPerTeam(data["ExtraRunsPerTeam"]);
    // chartForEconomicalBowlers(data["EconomicalBowler"]);
})

// function formatdataForColumnChart(object) {
//    //write your code to convert jsondata for the column chart format.
// }

// function formatdataForBarChart(object) {
//     //write your code to convert jsondata for the Bar chart format.
// }

function chartForMatchesPerSeason(matches){
//complete this function to create visualization for no.ofmathches per season.
const years = Object.keys(matches)
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches Played per Season'
    },
    subtitle: {
        text: 'Source: ipl.com'
    },
    xAxis: {
        categories: years,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Matches'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Matches Played',
        data: Object.values(matches)

    }]
});
}
// function barChartForNoOfWins(jsonData){
// //complete this function to create visualization for no.ofWins per team per season.   
// }

// function chartForExtraRunsPerTeam(jsonData){
// //complete this function to create visualization for extraruns per team for year 2016 .   
// }

// function chartForEconomicalBowlers(jsonData){
//  //complete this function to create visualization for top ten economical bowler for year 2015 .   
// }

console.log("Hello World")
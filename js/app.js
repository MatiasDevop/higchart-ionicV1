// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("chartctrl",function($scope){
  alert("sdasd");
  

  Highcharts.stockChart('container', {
    animation: {
        duration: 2000,
        easing: 'swing'
    },
    rangeSelector: {
        selected: 1,
        enabled: false
    },

    title: {
        text: 'Nivel de contaminacion (PM)'

    },
    xAxis: {
        ordinal: true,
        type: 'datetime'
    },
    yAxis: {
        minPadding: 0.2,
        maxPadding: 0.2,
        title: {
            text: 'Valores',
            margin: 0.3,
            size:"10px",
        },
        labels: {
            format: '{value:.2f}'
        }

    },

    series: [{

        name: 'PM(ug/m3)',
        data: [[1147651200000,18921051],
        [1147737600000,33470860],
        [1147824000000,26941146],
        [1147910400000,23524811],
        [1147996800000,35221586],
        [1148256000000,25680800],
        [1148342400000,24814061],
        [1148428800000,32722949],
        [1148515200000,16563319],
        [1148601600000,15464811],
        [1148947200000,20125338],
        [1149033600000,45755325],
        /* Jun 2006 */
        [1149120000000,33669043],
        [1149206400000,24496720],
        [1149465600000,21639826],
        [1149552000000,25933308],
        [1149638400000,26813938],
        [1149724800000,49911361],
        [1149811200000,27712815],
        [1150070400000,25642234],
        [1150156800000,38605066],
        [1150243200000,31371508],
        [1150329600000,42519228],
        [1150416000000,29939223],
        [1150675200000,25773905],
        [1150761600000,24036581],
        [1150848000000,30856077],
        [1150934400000,34551392],
        [1151020800000,23578607],
        [1151280000000,16661904],
        [1151366400000,19665400],
        [1151452800000,30395258],
        [1151539200000,31258941],
        [1151625600000,26451164]],
        gapSize: 1,
        tooltip: {
            valueDecimals: 2,
           
        },
        shadow: {
            color: 'blue',
            width: 10,
            offsetX: 1,
            offsetY: 1
        },
        dataGrouping: {
            enabled: true,
            approximation: "open",
        }
    }],
    legend: {
        enabled:false
    },
    credits: {
        enabled: false
    }
});



});

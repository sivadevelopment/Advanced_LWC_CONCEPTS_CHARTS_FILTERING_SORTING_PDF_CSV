import { api, LightningElement } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartJs';
import {loadScript} from 'lightning/platformResourceLoader'

export default class Charts extends LightningElement {

    isChartJsInitialaized = false;
    chart;

   @api
   type;
   @api
   chartHeading;
   @api
   chartData;
   @api
   chartLabels;



    renderedCallback() {
        if (this.isChartJsInitialaized) {
            return isChartJsInitialaized;
        }
        loadScript(this,chartJs+'/chartJs/Chart.js').then(() => {
            console.log('Loaded Successfully');
            this.isChartJsInitialaized = true;
            this.loadCharts();
        }).catch(error => {
            console.error(error);
        })
       
    }

    loadCharts() {
        window.Chart.platform.disableCSSInjection = true;
        const convas = document.createElement('canvas');
        this.template.querySelector('div.chart').appendChild(convas);
        const context = convas.getContext('2d');
        this.chart = new window.Chart(context, this.config());
    }

    config() {
        return {
   "type":this.type,
   "data":{
      "labels":this.chartLabels ? this.chartLabels:[],
      "datasets":[
         {
            "label":this.chartHeading,
            "data":this.chartData ? this.chartData:[],
            "backgroundColor":[
               "rgba(255, 99, 132, 0.2)",
               "rgba(54, 162, 235, 0.2)",
               "rgba(255, 206, 86, 0.2)",
               "rgba(75, 192, 192, 0.2)",
               "rgba(153, 102, 255, 0.2)",
               "rgba(255, 159, 64, 0.2)"
            ],
            "borderColor":[
               "rgba(255, 99, 132, 1)",
               "rgba(54, 162, 235, 1)",
               "rgba(255, 206, 86, 1)",
               "rgba(75, 192, 192, 1)",
               "rgba(153, 102, 255, 1)",
               "rgba(255, 159, 64, 1)"
            ],
            "borderWidth":1
         }
      ]
   },
           "options": {
              responsive: true,
              legend: {
                position:'right' 
              },
              animation: {
                 animateScale: true,
                 animateRotate:true
              },
      "scales":{
         "y":{
            "beginAtZero":true
         }
         
      }
   }
}
}
    
}
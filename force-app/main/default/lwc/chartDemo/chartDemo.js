import { LightningElement, wire } from 'lwc';
import getOppertunity from '@salesforce/apex/OppertunityController.getOppertunity';
export default class ChartDemo extends LightningElement {

    temp;
    pieChartLables;
    pieChartData;

    @wire(getOppertunity)
    opertunityDataHandler({ data, error }) {
        if (data) {
            console.log('Data Loade successfully by opertunityDataHandler method');
            console.log(data);
            const reducedData = data.reduce((json, value) => {
                if (json[value.StageName]) {
                     json[value.StageName]= json[value.StageName] + 1;
                } else {
                     json[value.StageName] = 1;    
                }
                return json;
            }, {})
            console.log('New ReducedData');
            console.log(reducedData);
            
            if (Object.keys(reducedData)) {
               this.pieChartLables= Object.keys(reducedData);
                this.pieChartData=Object.values(reducedData);
            }
        }
        if (error) {
            console.error('Isssssueee')
        }

    }
}
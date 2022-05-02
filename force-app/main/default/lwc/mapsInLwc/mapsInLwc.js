import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/MapControlerLwc.getAccount';

export default class MapsInLwc extends LightningElement {

    mapMarkar=[];
    markerTitale;
    selectedMarkerValue;

    

    @wire(getAccount)
    accountResultHandler({ data, error }) {
        if (data) {
            console.log('data loading');
            console.log(data);
            this.formateResponce(data);
        }

        if (error) {
             console.log('data  not loading');
            console.log(error);
        }
    }

    formateResponce(data){
        this.mapMarkar=data.map(item => {
            return {
                location: {
                    Street: item.BillingStreet || '',
                    City: item.BillingCity || '',
                    Country:item.BillingCountry || ''
                },
                icon: 'utility:salesforce1',
                title: item.Name,
                value: item.Name,
                description:item.Description
                
            }
        })
        
        if (this.selectedMarkerValue) {
            this.selectedMarkerValue = this.mapMarkar[0].value;
        }
       
    }

    callMarkerHandler(event) {
        this.selectedMarkerValue = event.detail.selectedMarkerValue;
    }

    
}
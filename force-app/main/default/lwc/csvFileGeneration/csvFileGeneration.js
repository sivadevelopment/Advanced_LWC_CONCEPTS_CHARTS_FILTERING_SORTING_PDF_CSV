import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/CsvGenerator.getAccount';
import { exportCSVFile } from 'c/utils';

export default class CsvFileGeneration extends LightningElement {

    accountList;
    accountHeaders = {
        Id: 'Record Id',
        Name: 'Name',
        AnnualRevenue: 'Annual Revenue',
        Industry: 'Industry',
        Phone:'Phone'
    }

    @wire(getAccount)
    accountHandlar({ data, error }) {
        if (data) {
            console.log('Account call successed');
            console.log(data);
            this.accountList = data;
        }

        if (error) {
            console.log('Account call not successed');
            console.error(error);
        }
    }

    csvGenerator() {
        //headers, totalData, fileTitle
        exportCSVFile(this.accountHeaders, this.accountList, 'account_records');
    }
}
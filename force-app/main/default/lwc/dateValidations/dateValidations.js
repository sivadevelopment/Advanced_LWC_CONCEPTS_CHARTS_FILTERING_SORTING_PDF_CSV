import { LightningElement } from 'lwc';

export default class DateValidations extends LightningElement {

    startDate;
    endDate;
    error;

    dateHandlar(event) {
        const { name, value } = event.target;
        this[name] = value; //this[startDate] = value;
        console.log(this[name]);
        this.error = undefined;
    }

    submitHandlar() {
        if (this.validateDate(this.startDate, this.endDate)) {
            console.log('Date is valid')
        } else {
            this.error = 'Start date can not gratar than end date';
        }
    }

    validateDate(startDate, endDate) {
        return new Date(startDate).getTime() < new Date(endDate).getTime();
    }
}
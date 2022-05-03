import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class FilteringLWC extends LightningElement {

    headings = ['Id', 'Name', 'Title', 'Email'];
    fullTableData = [];
    filteredData = [];
    timer;
    filterBy = "Name";
    sortBy = 'Name';
    sortDirection='asc';
    @wire(getContactList)
    contactListHandler({ data, error }) {
        if (data) {
            console.log(data)
            this.fullTableData = data;
            this.filteredData = data;
        }

        if (error) {
            console.log(error);
        }
    }

    filterHandler(event) {
        const { value } = event.target;
        console.log(value);
        if (value) {
            clearTimeout(this.timer);
            this.timer=setTimeout(() => {
                this.filteredData = this.fullTableData.filter(item => {
                     
                    /*     return Object.keys(item).some(key => {
                            return item[key].toLowerCase().includes(value);
                   
                }) */
                     
                     const val = item[this.filterBy] ? item[this.filterBy] : '';
                     return val.toLowerCase().includes(value);
            })
            console.log('filteredData');
            console.log(this.filteredData);
            }, 1000);
        } else {
            this.filteredData = [...this.fullTableData];
        }
    }

    get filterByOptions() {
        return [
            {label:'Id', value:'Id'},
            {label:'Name', value:'Name'},
            {label:'Title', value:'Title'},
            {label:'Email', value:'Email'}
        ];
    }
    
    filterByHandler(event) {
        const filterValue = event.target.value;
        console.log('Combo Data');
        console.log(filterValue);
        this.filterBy=event.target.value;
    }

    sortByHandler(event) {
        this.sortBy = event.target.value;;
        console.log('Sort By Value');
        console.log(this.sortBy)
        this.filteredData = this.sortByData(this.filteredData);
    }

    sortByData(data) {
        const cloneData = [...data];
        cloneData.sort((a,b) => {
            if (a[this.sortBy] == b[this.sortBy]) {
                return 0;
            }
            return this.sortDirection == 'asc' ? a[this.sortBy] > b[this.sortBy] ? -1:1: a[this.sortBy] > b[this.sortBy] ? -1:1;
        })
        return cloneData;
    }
    
}
import { LightningElement } from 'lwc';

export default class ModelWrapper extends LightningElement {

    isOpen = false;


    openHandler() {
        console.log('clicked');
        this.isOpen = true;
    }

    closeHandler() {
          this.isOpen = false;
    }

    oncloseModalHandlar(event) {
        console.log(event.detail)
         this.isOpen = false;
    }
}
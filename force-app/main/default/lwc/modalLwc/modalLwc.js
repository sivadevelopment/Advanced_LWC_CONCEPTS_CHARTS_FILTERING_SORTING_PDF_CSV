import { LightningElement } from 'lwc';

export default class ModalLwc extends LightningElement {
   
    closeHandler() {
        this.dispatchEvent(new CustomEvent('close', { detail: 'coming data from child' }));
    }

    handleSlotFooterChange() {
        const footerElement = this.template.querySelector('.slds-modal__footer');
        if (footerElement) {
            footerElement.classList.remove('slds-hide');
        }
    }

    handleSlotHeadarChange() {
         const headarElement = this.template.querySelector('.slds-modal__header');
        if (headarElement) {
            headarElement.classList.remove('remove-hadlar');
        } 
    }
}
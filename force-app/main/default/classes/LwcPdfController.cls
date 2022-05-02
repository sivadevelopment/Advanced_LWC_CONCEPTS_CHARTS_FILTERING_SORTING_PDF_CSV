/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 04-30-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class LwcPdfController {
    public LwcPdfController() {

    }

    @AuraEnabled
    public static Attachment generatePDF(Id recordId, String htmlData){
      Pagereference page=page.renderAsPDF;
      page.getParameters().put('pdfText', htmlData);
      //get('pdfText'));
      Contact con=new Contact(Id=recordId);
      Attachment objAttachment=new Attachment();
      objAttachment.name='invoice.pdf';
      objAttachment.ParentId=con.Id;
      objAttachment.Body=page.getContentaspdf();
      objAttachment.IsPrivate=false;
      insert objAttachment;
      return objAttachment;
    }
}

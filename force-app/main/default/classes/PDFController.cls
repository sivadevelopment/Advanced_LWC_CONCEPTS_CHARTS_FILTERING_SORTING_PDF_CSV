/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 04-30-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class PDFController {
   public String pdfText{get;set;}

   public PDFController(){
    this.pdfText=String.escapeSingleQuotes(Apexpages.currentPage().getParameters().get('pdfText'));
   }
}

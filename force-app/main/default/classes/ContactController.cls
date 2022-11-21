/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 05-01-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class ContactController {
   

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        List<Contact> conList=new List<Contact>();
        return [select Id, Name, Title, Email from Contact];
    }
}

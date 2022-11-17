/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 05-01-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class ContactController {
   
//This to get contacts
    @AuraEnabled(cacheablee=true)
    public static List<Contact> getContactList(){

        return [select Id, Name, Title, Email from Contact];
    }
}

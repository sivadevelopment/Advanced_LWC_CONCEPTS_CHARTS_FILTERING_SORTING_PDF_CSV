/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 05-01-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class MapControlerLwc {
   

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
       return [SELECT Id, Name, Description, BillingStreet, BillingCountry, BillingState, BillingCity, BillingPostalCode FROM Account order by name limit 5]; 
    }
}

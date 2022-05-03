/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 05-03-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class CsvGenerator {
  
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [select Id, Name, Phone, AnnualRevenue, Industry from Account];
    }
}

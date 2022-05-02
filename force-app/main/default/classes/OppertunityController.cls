/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 05-01-2022
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class OppertunityController {
   
    @AuraEnabled(cacheable=true )
    public static List<Opportunity> getOppertunity(){
       return [select StageName From Opportunity];
    }
}

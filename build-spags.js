/**
*
* Build Single Product Ad Groups (SPAGs)
* 
* This script populates a Google Sheet with Single Product Ad Groups
* for Google Shopping campaigns using a list of product IDs & product names.
*
* Original author: Frederick Harnois
* Additional tweaks: Sam Lalonde - sam@samlalonde.com
*
**/

function spagBuilder() {

  // Selects the chosen sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Selects the tab where the ad groups will be built
  var spags = ss.getSheetByName("SPAGs");
  
  // Selects the tab with your list of IDs
  var ids = ss.getSheetByName("Products");

  // Gets campaign name
  var CAMPAIGN_NAME = ids.getRange(2,3).getValue();
  
  // Gets default bid
  var MAX_CPC = ids.getRange(2,4).getValue();
  
  // Clears the sheet
  spags.clear();
  
  // Adds a header row
  spags.appendRow(["Campaign", "Ad Group", "Product Group", "Max CPC", "Product Group Type"])
  
  // Column name setting
  var adgroup = "Ad Group"

  // Goes through each ID and populates each column
  var campaignCol = []
  var adGroupCol = []
  var productGroupCol = []
  var maxCpcCol = []
  var productGroupTypeCol = []
  var row = 2
  while (ids.getRange(row,2).isBlank() === false) {
    var id = ids.getRange(row,2).getValue();
    var adgroup = ids.getRange(row,1).getValue();
    var title = ids.getRange(row,1).getValue();
    campaignCol.push([CAMPAIGN_NAME], [CAMPAIGN_NAME], [CAMPAIGN_NAME]);
    Utilities.sleep(5);
    adGroupCol.push([adgroup], [adgroup], [adgroup]);
    Utilities.sleep(5);
    productGroupCol.push(["* / Item ID='" + id + "'"], ["* / Item ID=*"], ["* /"]);
    Utilities.sleep(5);
    maxCpcCol.push([MAX_CPC], [""], [""]);
    Utilities.sleep(5);
    productGroupTypeCol.push(["Biddable"], ["Excluded"], ["Subdivision"]);
    Utilities.sleep(5);
    row++
   }
  
  // Pushes columns to the sheet
  spags.getRange(2, 1, campaignCol.length, 1).setValues(campaignCol)
  spags.getRange(2, 2, campaignCol.length, 1).setValues(adGroupCol)
  spags.getRange(2, 3, campaignCol.length, 1).setValues(productGroupCol)
  spags.getRange(2, 4, campaignCol.length, 1).setValues(maxCpcCol)
  spags.getRange(2, 5, campaignCol.length, 1).setValues(productGroupTypeCol)  
  
}
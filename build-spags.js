/**
*
* Build Single Product Ad Groups (SPAGs)
* 
* This script populates a Google Sheet with Single Product Ad Groups
* for Google Shopping campaigns using a list of product IDs & product names.
*
* Google Apps Script maintained by Frederic Harnois
* fred@fredericharnois.com
* Additional contributions from Sam Lalonde
* sam@samlalonde.com 
*
**/

// SETTINGS //

var userProperties = PropertiesService.getUserProperties();

var CAMPAIGN_NAME = userProperties.getProperty("campaignName")

var MAX_CPC = userProperties.getProperty("defaultBid")

var BUDGET = userProperties.getProperty("dailyBudget")

var MERCHANT_ID = userProperties.getProperty("merchantId")

var LOCATION_ID = JSON.parse(userProperties.getProperty("locationId")).id

var COUNTRY_CODE = JSON.parse(userProperties.getProperty("locationId")).code

// SETTINGS //

function spagBuilder() {

  // Selects the chosen sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Selects the tab where the ad groups will be built
  var spags = ss.getSheetByName("SPAGs");
  
  // Selects the tab with your list of IDs
  var ids = ss.getSheetByName("IDs");
  
  // Clears the sheet
  spags.clear();
  
  // Adds a header row
  spags.appendRow(["Campaign", "Budget", "Budget type", "Campaign Type", "Networks", "Languages", "Bid Strategy Type", "Bid Strategy Name", "Delivery method", "Targeting method", "Exclusion method", "Merchant Identifier", "Country of Sale", "Campaign Priority", "Flexible Reach", "Ad Group", "Max CPC", "Ad Group Type", "Shopping ad", "ID", "Product Group", "Product Group Type"]);
  
  spags.appendRow([CAMPAIGN_NAME, BUDGET, "Daily", "Shopping", "Google search", "All", "Enhanced CPC", "Enhanced", "Standard", "Location of presence", "Location of presence or Area of interest", MERCHANT_ID, COUNTRY_CODE, "Low", "[]", "", "", "", "", LOCATION_ID, "", ""]);
  
  // Goes through each ID and populates each column
  var campaignCol = []
  var flexibleReachCol = []
  var adGroupCol = []
  var adGroupTypeCol = []
  var shoppingAdCol = []
  var productGroupCol = []
  var maxCpcCol = []
  var productGroupTypeCol = []
  var row = 2
  while (ids.getRange(row,1).isBlank() === false) {
    var id = ids.getRange(row,2).getValue();
    var title = ids.getRange(row,1).getValue();
    campaignCol.push([CAMPAIGN_NAME], [CAMPAIGN_NAME], [CAMPAIGN_NAME], [CAMPAIGN_NAME], [CAMPAIGN_NAME]);
    Utilities.sleep(5);
    flexibleReachCol.push(["Audiences"], [""], [""], [""], [""]);
    Utilities.sleep(5);
    adGroupCol.push([title], [title], [title], [title], [title]);
    Utilities.sleep(5);
    adGroupTypeCol.push(["Default"], [""], [""], [""], [""]);
    Utilities.sleep(5);
    shoppingAdCol.push([""], ["[]"], [""], [""], [""]);
    Utilities.sleep(5); 
    productGroupCol.push([""], [""], ["* / Item ID='" + id + "'"], ["* / Item ID=*"], ["* /"]);
    Utilities.sleep(5);
    maxCpcCol.push([MAX_CPC], [""], [MAX_CPC], [""], [""]);
    Utilities.sleep(5);
    productGroupTypeCol.push([""], [""], ["Biddable"], ["Excluded"], ["Subdivision"]);
    Utilities.sleep(5);
    row++
   }
  
  // Pushes columns to the sheet
  spags.getRange(3, 1, campaignCol.length, 1).setValues(campaignCol)
  spags.getRange(3, 15, campaignCol.length, 1).setValues(flexibleReachCol)
  spags.getRange(3, 16, campaignCol.length, 1).setValues(adGroupCol)
  spags.getRange(3, 17, campaignCol.length, 1).setValues(maxCpcCol)
  spags.getRange(3, 18, campaignCol.length, 1).setValues(adGroupTypeCol)
  spags.getRange(3, 19, campaignCol.length, 1).setValues(shoppingAdCol)
  spags.getRange(3, 21, campaignCol.length, 1).setValues(productGroupCol)
  spags.getRange(3, 22, campaignCol.length, 1).setValues(productGroupTypeCol)
  
}
/**
*
* Build Single Product Ad Groups
* 
* Populates a Google Sheet with Single Product Ad Groups
* for Google Shopping campaigns using a list of product IDs.
*
* Version: 1.0
* Google Apps Script maintained by Frederic Harnois
*
**/

// MODIFY YOUR SETTINGS HERE //

// url of the google sheets where the trafficking sheet is
var SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1gjct0NPWKOW8xAH28v8iiwZRIo0iBqITvSrB3D5Amm0/edit#gid=0"

var CAMPAIGN_NAME = "INSERT_CAMPAIGN_NAME"

var MAX_CPC = 3

// DO NOT MODIFY ANYTHING BELOW //

function spagBuilder() {

  // Selects the chosen sheet
  var ss = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
  
  // Selects the tab where the ad groups will be built
  var spags = ss.getSheetByName("SPAGs");
  
  // Selects the tab with your list of IDs
  var ids = ss.getSheetByName("IDs");
  
  // Clears the sheet
  spags.clear();
  
  // Adds a header row
  spags.appendRow(["Campaign", "Ad Group", "Product Group", "Max CPC", "Product Group Type"])
  
  // Goes through each ID and populates each column
  var campaignCol = []
  var adGroupCol = []
  var productGroupCol = []
  var maxCpcCol = []
  var productGroupTypeCol = []
  var row = 2
  while (ids.getRange(row,1).isBlank() === false) {
    var id = ids.getRange(row,1).getValue();
    var title = ids.getRange(row,2).getValue();
    campaignCol.push([CAMPAIGN_NAME], [CAMPAIGN_NAME], [CAMPAIGN_NAME]);
    Utilities.sleep(5);
    adGroupCol.push([id], [id], [id]);
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

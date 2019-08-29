// SETTINGS //

var userProperties = PropertiesService.getUserProperties();

var CAMPAIGN_NAME = userProperties.getProperty("campaignName")

// SETTINGS //

function sendCsv() {
  
  var recipient = Session.getActiveUser().getEmail();
  var ssID = SpreadsheetApp.getActiveSpreadsheet().getId();
  var sheetName = SpreadsheetApp.getActiveSpreadsheet().getName();
  var requestData = {"method": "GET", "headers":{"Authorization":"Bearer "+ScriptApp.getOAuthToken()}};
  var url = "https://docs.google.com/spreadsheets/d/"+ssID+"/export?format=csv&id="+ssID;
  var result = UrlFetchApp.fetch(url, requestData);
  var contents = result.getContent();
  
  MailApp.sendEmail(recipient, 'SPAG build for campaign: ' + CAMPAIGN_NAME, 
                    'Attached is a CSV file that you can import from Google Ads Editor in order to build the ' + CAMPAIGN_NAME + ' Google Shopping campaign', {
                    name: 'SPAG Builder',
                    attachments: [{fileName:sheetName+".csv", content:contents, mimeType:"application//csv"}]
                    });
  
}

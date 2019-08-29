function onOpen() {

  SpreadsheetApp.getUi()
      .createMenu('SPAG Builder')
      .addItem('Create Product ID Sheet', 'idSheet')  
      .addItem('Settings', 'showSidebar')
      .addSeparator()
      .addItem('Run', 'spagBuilder')
      .addSeparator()
      .addItem('Email CSV', 'sendCsv')
      .addToUi();

}


function showSidebar() {

  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
      .setTitle('SPAG Builder')
      .setWidth(300);
  SpreadsheetApp.getUi()
      .showSidebar(html);

}


function processForm(formObject) {

  var ui = SpreadsheetApp.getUi();
  var userProperties = PropertiesService.getUserProperties();
  var settings = JSON.stringify(formObject)
  userProperties.setProperties(formObject);
  ui.alert("Saved the following settings: " + settings)

}


function idSheet() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.insertSheet('IDs');
  var ids = ss.getSheetByName("IDs");
  ids.appendRow(["Product Name", "Product ID"])

}
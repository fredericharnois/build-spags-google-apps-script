# Building Single Product Ad Groups

This script was built to quickly build single product ad groups for use in Google Shopping campaigns.

## Setup

You'll first want to create a new Google Sheets file, adding [build-spags.js](https://github.com/fredericharnois/build-spags-google-apps-script/blob/master/build-spags.js), [interface.js](https://github.com/fredericharnois/build-spags-google-apps-script/blob/master/interface.js), [send-csv.js](https://github.com/fredericharnois/build-spags-google-apps-script/blob/master/send-csv.js), and [sidebar.html](https://github.com/fredericharnois/build-spags-google-apps-script/blob/master/sidebar.html) under _Tools > Script editor_.

After refreshing the page, a new SPAG Builder menu option should appear:

![Alt text](https://i.imgur.com/ZD6wPnj.jpg)

In that menu, select _Create Product ID Sheet_, which will add a sheet for you to paste your product names and ids in:

![Alt text](https://i.imgur.com/6mIK8To.jpg)

The _Settings_ option will open the sidebar, where you will set the necessary parameters for a Google Shopping Campaign:

![Alt text](https://i.imgur.com/CBDAMIT.jpg)

Once that's filled, choose _Run_. You can then either copy and paste the output in Google Ads Editor or use the _Email CSV_ option to send yourself a CSV file of the output.

# sync-gc-gas-sample

## what

GAS Scrupt that Syncs Google Calendar to Google Calendar within specified range and the event title converted as specified subject name.

## requirements

1. G Suite or Google(Gmail.com) account and Google Apps Script enabled in your Google Drive.
2. JavaScript if you wanna modify it.

## note

1. The event id is saved in the `description` of the destination calendar event so please don't delete it.

## install && setup

1. Set Environment Varialbles via GAS Editor
    1. `srcCalId` : Source Google Calendar ID
    2. `destCalId` : Desitination Google Calendar ID
2. Paste [`src/index.js`](https://github.com/Tokifujp/sync-gc-gas-sample/blob/master/src/index.js)
3. Set variables;
    1. `startTime` : Start Time of Source Calendar
    2. `endTime` : End Time of Source Calendar
    3. `destEventSubject` : Name of the event subject to be overwritten to the destination Calendar.
3. execute `syncCal()` method to test
4. add `syncCal` to job maybe every 10 minutes or so would be appropreate.

# others

If you have any queries in English, don't hesitate to ask in the issues or you can contact me via twitter ([@tokifujp](https://twitter.com/tokifujp)) :)

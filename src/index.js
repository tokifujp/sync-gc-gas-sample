var srcCalId = PropertiesService.getScriptProperties().getProperty("srcCalId");　　// 読み込み元Google Calendar ID
var destCalId = PropertiesService.getScriptProperties().getProperty("destCalId"); // 同期先Google Calendar ID
var startTime = new Date(2018,6,16); // 同期するイベントの対象開始日
var endTime = new Date(2018, 7, 31); // 同期するイベントの対象終了日
var destEventSubject = "イベントあり";　// 移行先のカレンダーに表示されるイベントタイトル（全部同じになる）

function syncCal() {
  var srcCalendar = CalendarApp.getCalendarById(srcCalId);
  var destCalendar = CalendarApp.getCalendarById(destCalId);
  var events = srcCalendar.getEvents(startTime, endTime);
  for (var i in events){
    if(!events[i].isRecurringEvent()){ // 繰り返しイベントは無視
      var id = events[i].getId();
      var destId = checkDestEventId(id);
      var st = events[i].getStartTime();
      var et = events[i].getEndTime();
      // 移行先カレンダーの存在確認
      if (destId){
        // 移行先にイベントが有る場合、更新
        Logger.log(destId);
        updateEvent(destId, st, et);
      }else{
        // 移行先にイベントがない場合、作成
        createEvent(id, st, et);
      }
    }
  }
}

function checkDestEventId(id){
  var destCalendar = CalendarApp.getCalendarById(destCalId);
  var events = destCalendar.getEvents(startTime, endTime);
  for (var i in events){
    var description = events[i].getDescription();
    if (description == id){
      return events[i].getId()
    }
  }
  return null
}  
  
function updateEvent(id, st, et){
  var destCalendar = CalendarApp.getCalendarById(destCalId);
  var event = destCalendar.getEventById(id);
  var dst = event.getStartTime();
  var det = event.getEndTime();
  if ((dst != st) || (det != et)){
    event.setTime(st, et);
  }
}

function createEvent(id, st, et){
  var destCalendar = CalendarApp.getCalendarById(destCalId);
  var title = destEventSubject;
  destCalendar.createEvent(title, st, et).setDescription(id);
}

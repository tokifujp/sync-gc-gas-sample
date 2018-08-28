# sync-gc-gas-sample

## what

指定した期間のGoogle Calendarのイベントを題名を伏せて別のGoogle Calendarに同期するスクリプトです。ざっくり書いたものなのでここはもっとこーしろとかあーしろとかはIssueに記載してください。

## requirements

1. G Suite or Google(Gmail.com) accountというかGoogle DriveでGoogle Apps Scriptが使えること（それはググって）
2. JavaScriptとかの知識（もし、改造したい場合は）

## note

1. コピーされたイベントの`description`にコピー元のイベントIDをテキストで保存しているので消さないでください。消したらUpdateされずに新たにイベントが作成されると思われ

## install && setup

1. GASエディタで環境変数設定（`ファイル`→`プロジェクトのプロパティ`→`スクリプトのプロパティ`→`行の追加`）
    1. `srcCalId` : 読み込み元Google Calendar ID
    2. `destCalId` : 同期先Google Calendar ID
2. GASエディタに`sample.js`ペースト
3. 必要に応じて設定
    1. `startTime` : 同期するイベントの対象開始日
    2. `endTime` : 同期するイベントの対象終了日
    3. `destEventSubject` : 移行先のカレンダーに表示されるイベントタイトル（全部同じになる）
3. GASエディタで`syncCal()`メソッドを実行してテスト
4. GASエディタで`編集`→`現在のプロジェクトのトリガー`
    1. `syncCal`を任意のタイミングでJOBを保存

# others

If you have any queries in English, don't hesitate to ask in the issues or you can contact me via twitter ([@tokifujp](https://twitter.com/tokifujp)) :)

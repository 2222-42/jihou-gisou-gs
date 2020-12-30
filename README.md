# jihou-gisou-gs

slackでの時報を自動化するためのGSファイル

## 使い方

### 必要なもの

- Slackのアプリを作れて、それを会社のWorkspaceにインストールできる権限をもっていないといけません。
- Google App Scriptを作れる権限を持っていないとできません。

### 設定の仕方

1. Google AppScriptにpostMessage.gsの中身をコピペ
2. Slack上で、Scopeに`chat:write` of User Token Scopesを持ったアプリを作り、Workspaceにインストールし、OAuth Tokenを取得し、tokenのところを置き換える
3. 時報を投稿するチャンネルのUrlをコピーし、そのIDを取り、CHANNEL_IDを置き換える
4. 報告する先の人がいる場合は、その人のUrlをコピーし、そのIDを取り、BOSS_USER_IDを置き換える
5. `sample_message`の配列の中身をよしなに変える。
6. 最初の報告時間から最後の報告時間までのTriggerを作るために、`setTrigger`をGAS上で走らせる。(必要に応じて、時間をずらしてください。)


## 免責

上司に怒られても知りません。
自己責任でお願いします。


## やっていないこと

スケジュールについては、簡易化のために、ある程度自動で生成できるようにしたが、完全に毎日や毎時とかをするのはビジネスロジックが複雑なのでやらない。

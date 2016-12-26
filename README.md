## project-name

## プロジェクトのインストール

1. git clone 
2. npm install 

## プロジェクトのビルド

1. npm run build ... アプリケーションをビルドします
2. npm run dev ... nodeサーバーを開きアプリケーションを実行します。app.jsなどへの変更は自動的に反映されます。

## ファイル構成

scripts/app.js ... 実アプリケーションを書くところ
scripts/require.js ... 必要モジュールを書くところ

`npm run build` することで　`scripts/app.js` と `scripts/require.js` から `app/scripts/build.js` がビルドされます。
`index.html`は`app/scripts/build.js`のみ参照するようになっています。

本番環境へは `app/` 以下のみアップロードすることで動くようになっています。

アプリケーションにモジュールを追加したいときは `npm install -S {packagename}`としてインストールしたのち、
`require.js` に `require("{packagename}");` の一行を追加しましょう

--trim--

## このプロジェクトについて

A-Frameのわりと本格的なプロダクトを作るための雛形です

以下の手順で展開してください。

1. git clone git@github.com:jujunjun110/aframe-application-boilerplate.git
2. npm install 
3. npm run unboil






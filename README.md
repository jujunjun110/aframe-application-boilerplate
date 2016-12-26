## project-name

## プロジェクトのインストール

1. git clone 
2. npm install 

## プロジェクトのビルド

1. npm run build ... アプリケーションをビルドします
2. npm run dev ... nodeサーバーを開きアプリケーションを実行します。app.jsなどへの変更はリアルタイムにブラウザ側に反映されます。

## ファイル構成

- scripts以下 ... 開発用のスクリプト置き場
 - scripts/app.js ... 自分でアプリケーションを書くところ
 - scripts/require.js ... 必要なモジュールを書くところ
- app以下 ... 本番にアップロードするところ
 - app/index.html ... メインのHTMLファイル
 - app/scripts/build.js ... 最終的にビルドされる、ブラウザで実行可能なjsファイル

`npm run build` することで　`scripts/app.js` と `scripts/require.js` から `app/scripts/build.js` がビルドされます。
`index.html`は`app/scripts/build.js`のみ参照するようになっています。

本番環境へは `app/` 以下のみアップロードすることで動くようになっています。

アプリケーションでnpmモジュールを利用したいときは `npm install -S {packagename}`としてインストールしたのち、
`require.js` に `require("{packagename}");` の一行を追加しましょう

--trim--

## このプロジェクトについて

A-Frameのわりと本格的なプロダクトを作るための雛形です

以下の手順で展開してください。

1. git clone git@github.com:jujunjun110/aframe-application-boilerplate.git
2. npm install 
3. npm run unboil






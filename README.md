# みんなで備える防災備蓄マップ

避難所の防災備蓄状況を登録・表示するテンプレートです。

[Tokyo OSS Party!! 2021](https://tokyo-oss-party.com/) の入賞作品です。（[発表資料](https://www.slideshare.net/TakaakiKurasawa/tokyo-oss-party-arumon-team)）

## サンプルサイト

https://bichiku-map.web.app/

## テンプレート利用方法

### 避難所の防災備蓄状況ファイルを作成

- uploadフォルダに格納されているサンプルを元に、避難所の防災備蓄状況を記載してください。
- 避難所ごとに「避難所名称（住所）.csv」のフォーマットのファイル名で保存し upload フォルダに格納してください。
- ファイル名の避難所名称と住所は[東京都防災マップ避難所](https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d0000000093)に合わせてください。
- 防災備蓄品種類（67種）は[東京備蓄ナビ](https://www.bichiku.metro.tokyo.lg.jp/)で公開されているリストを利用しています。
- id,備蓄品名,カテゴリー名の列は変更しないでください。現在備蓄量,不足備蓄量,更新日を避難所ごとに更新してください。
- 文字コードは UTF-8 にしてください。

```
id,備蓄品名,カテゴリー名,現在備蓄量,不足備蓄量,更新日
1,水,食品,0,0,2022/03/11
2,レトルトご飯,食品,0,0,2022/03/11
3,レトルト食品,食品,0,0,2022/03/11
（略）
66,ペット用のトイレ用品,ペット,0,0,2022/03/11
67,ペット用の食器,ペット,0,0,2022/03/11
```

### 避難所の防災備蓄データを登録

- 避難所の防災備蓄状況データを更新するバッチ処理を動かします。
- 本テンプレートではバックエンドの API はフロントエンド同梱の Mock Service Worker です。

```
cd backend
npm install
npm run etl
```

### 防災備蓄マップを公開

- React web application をビルドし Firebase にデプロイしてください。
    - Production: Firebase 環境は各自でご準備ください。本テンプレートでは Github Actions でデプロイします。
    - Development: ローカルPC 環境で起動します。

```
cd frontend
npm install
npm run start
npm run build
```

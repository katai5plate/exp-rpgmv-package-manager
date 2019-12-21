# rpgmv-pkgmng

ツクール MV のパッケージマネージャ

## 想定する使い方

### 使うために必要なこと

- 次をインストールする
  - Node.js
  - yarn
  - wget

### プロジェクトにパッケージマネージャをインストールする（実装済）

1. ツクール MV のプロジェクトをターミナルで開く
2. `wget https://raw.githubusercontent.com/katai5plate/rpgmv-pkgmng/master/.gitignore` する
3. `yarn add -D katai5plate/rpgmv-pkgmng` する

### プラグインをインストールする（まだ）

1. ツクール MV のプロジェクトをターミナルで開く
2. `yarn run mvp add <プラグインID>` する

### プラグインを検索する（実装済）

1. ツクール MV のプロジェクトをターミナルで開く
2. `yarn run mvp find <検索ワード> <検索ワード> <...>`する

### ダウンロード可能なプラグインの増やし方（まだ）

1. 規格に合った JSON を作り、プロジェクト内に `mvp.json` として保存する
2. `yarn run mvp add <プラグインID>` すると追加した JSON が反映されたプラグインインストールができる

### ツールをアップデートする（実装済）

1. `yarn remove rpgmv-pkgmng && yarn add katai5plate/rpgmv-pkgmng` する

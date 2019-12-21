# rpgmv-pkgmng
ツクールMVのパッケージマネージャ

## 想定する使い方
### 使うために必要なこと
- 次をインストールする
  - Node.js
  - yarn
  - wget
### プロジェクトにパッケージマネージャをインストールする
1. ツクールMV のプロジェクトをターミナルで開く
2. `wget https://raw.githubusercontent.com/katai5plate/rpgmv-pkgmng/master/.gitignore` する
3. `yarn add -D katai5plate/rpgmv-pkgmng` する
### プラグインをインストールする
1. ツクールMV のプロジェクトをターミナルで開く
2. `yarn run mvp <プラグインID>` する

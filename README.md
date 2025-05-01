このリポジトリは、株式会社ゆめみの[フロントエンドコーディング試験](https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d)の実装です。

## 技術スタック

- フレームワーク: Next.js 15(App Router)
- 言語: TypeScript
- パッケージマネージャ: pnpm
- スタイリング: Panda CSS
- テスト: Vitest
- UIカタログ: Storybook
- リンター/フォーマッタ: Biome / Markuplint
- CI/CD: GitHub Actions / Vercel
- 開発環境構築: nix-direnv

## ライブラリ

- チャート: recharts
- クエリパラメータ管理: nuqs
- アイコン: lucide-react
- フォーム: @tanstack/react-form
- スキーマ: zod

## ディレクトリ構成

```
src
├ app
├ assets
│ └ svg
├ components
├ features
├ libs
│ └ api
└ utils
　 ├ panic-helper
　 └ result
```

### components

特定の関心に依存しない汎用的なコンポーネントを管理します。
ディレクトリ構成は[BCD Design](https://qiita.com/misuken/items/19f9f603ab165e228fe1)と[共通部分をスマートに管理するディレクトリ構造](https://zenn.dev/misuken/articles/bf746c4cf3bdc8)をもとにしたものを採用しています。

### features

関心に依存する要素をpackage by featureで管理します。
`features/*/components/`は、前述の`components`ディレクトリと同じディレクトリ構成になります。

### libs/api

[ゆめみフロントエンドコーディング試験 API](https://yumemi-frontend-engineer-codecheck-api.vercel.app/api-doc)に関するユーティリティを管理します。

### utils

その他ユーティリティを管理します。

- `panic-helper`: アサーションユーティリティ
- `result`: Result型

## 開発環境のセットアップ

1. リポジトリのクローン

```bash
git clone https://github.com/airRnot1106/yumemi-frontend-coding-test.git
cd yumemi-frontend-coding-test
```

Nixが使用できる環境ならば、nix-direnvによってNode.jsとpnpmが使用できるシェル環境を自動で構築できます。

2. 依存関係のインストール

```bash
pnpm install
```

3. 環境変数の設定

[ゆめみフロントエンドコーディング試験 API](https://yumemi-frontend-engineer-codecheck-api.vercel.app/api-doc)に記載されている値を`.env.local.sample`を参考に設定してください。

4. 開発サーバーの起動

```bash
pnpm dev
```

## LICENSE

MIT

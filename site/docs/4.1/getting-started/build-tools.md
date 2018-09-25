---
layout: docs
# title: Build tools
# description: Learn how to use Bootstrap's included npm scripts to build our documentation, compile source code, run tests, and more.
title: ビルドツール
description: Bootstrap に含まれている npm スクリプトを使ってドキュメントを作成し, ソースをコンパイル, テストする方法などを学びましょう。
group: getting-started
toc: true
---

<!-- ## Tooling setup

Bootstrap uses [NPM scripts](https://docs.npmjs.com/misc/scripts) for its build system. Our [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) includes convenient methods for working with the framework, including compiling code, running tests, and more.

To use our build system and run our documentation locally, you'll need a copy of Bootstrap's source files and Node. Follow these steps and you should be ready to rock:

1. [Download and install Node.js](https://nodejs.org/en/download/), which we use to manage our dependencies.
2. Navigate to the root `/bootstrap` directory and run `npm install` to install our local dependencies listed in [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json).
3. [Install Ruby][install-ruby], install [Bundler][gembundler] with `gem install bundler`, and finally run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.
  - **Windows users:** Read [this guide](https://jekyllrb.com/docs/windows/) to get Jekyll up and running without problems.

When completed, you'll be able to run the various commands provided from the command line.

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/ -->

## ツールのセットアップ

Bootstrap は [NPM scripts](https://docs.npmjs.com/misc/scripts) をビルドシステムとして使っています。[package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) には, コードのコンパイル, テスト実行, フレームワークを扱う便利なメソッドが含まれています。

ビルドシステムを使って Web ドキュメントをローカルで実行するには Bootstrap のソースと Node が必要です。以下手順で始めましょう:

1. 依存関係を管理するために [Node.js をダウンロードしてインストール](https://nodejs.org/en/download/)。
2. `/bootstrap` ディレクトリに移動して, [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) にリストされた依存関係をインストールするために　`npm install` を実行。
3. [Ruby をインストール][install-ruby], [Bundler][gembundler] を `gem install bundler` でインストール, そして最後に `bundle install` を実行。これで Jekyll やプラグインなどの Ruby の依存関係が全てインスールされる。
  - **Windows ユーザ:** [this guide](https://jekyllrb.com/docs/windows/) を読んで Jekyll を起動してください。

完了すると, 様々なコマンドを実行することができます。

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/


<!-- ## Using NPM scripts

Our [package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `npm run dist` | `npm run dist` creates the `/dist` directory with compiled files. **Uses [Sass](https://sass-lang.com/), [Autoprefixer][autoprefixer], and [UglifyJS](https://github.com/mishoo/UglifyJS2).** |
| `npm test` | Same as `npm run dist` plus it runs tests locally |
| `npm run docs` | Builds and lints CSS and JavaScript for docs. You can then run the documentation locally via `npm run docs-serve`. |

Run `npm run` to see all the npm scripts. -->

## NPM スクリプトの使用

[package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) には次のコマンドとタスクが含まれています。

| Task | Description |
| --- | --- |
| `npm run dist` | コンパイルされたファイルが入った `/dist` ディレクトリを作成 **[Sass](https://sass-lang.com/), [Autoprefixer][autoprefixer], [UglifyJS](https://github.com/mishoo/UglifyJS2) を使用** |
| `npm test` | `npm run dist` と同じだが, ローカルでテスト実行 |
| `npm run docs` | Web ドキュメントのための CSS と JavaScript を生成しチェック, `npm run docs-serve` を実行すると Web ドキュメントをローカルで参照可能 |

`npm run` を実行するとすべての npm スクリプトが表示されます。

<!-- ## Autoprefixer

Bootstrap uses [Autoprefixer][autoprefixer] (included in our build process) to automatically add vendor prefixes to some CSS properties at build time. Doing so saves us time and code by allowing us to write key parts of our CSS a single time while eliminating the need for vendor mixins like those found in v3.

We maintain the list of browsers supported through Autoprefixer in a separate file within our GitHub repository. See [/package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) for details. -->

## Autoprefixer

Bootstrap は, ビルド時にいくつかの CSS プロパティにベンダープレフィックスを追加するために [Autoprefixer][autoprefixer] (ビルドシステムに含まれています) を使用しています。それにより, v3 のようなベンダー mixin の必要性を排除しながら CSS の重要なコードを一気に書くことができ, 時間とコードを節約しています。

Autoprefixer でサポートされているブラウザのリストは [/package.json]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) で管理しています。

<!-- ## Local documentation

Running our documentation locally requires the use of Jekyll, a decently flexible static site generator that provides us: basic includes, Markdown-based files, templates, and more. Here's how to get it started:

1. Run through the [tooling setup](#tooling-setup) above to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. From the root `/bootstrap` directory, run `npm run docs-serve` in the command line.
3. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/). -->

## ローカル Web ドキュメント

Web ドキュメントをローカルで実行するには Jekyll を使う必要があります。以下の手順で開始できます:

1. [ツールのセットアップ](#ツールのセットアップ) で `bundle install` を実行して Jekyll と Ruby の依存関係を全てインストール。
2. `/bootstrap` ディレクトリに移動して `npm run docs-serve` をコマンドラインで実行。
3. ブラウザで `http://localhost:9001` を開く

Jekyll の使い方は [documentation](https://jekyllrb.com/docs/home/) を参照してください。

<!-- ## Troubleshooting

Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.

[autoprefixer]: https://github.com/postcss/autoprefixer -->

## トラブルシューティング

依存関係のインストールで問題が起きたら, 全ての依存関係(グローバルおよびローカル)をアインインストールします。次に `npm install` を実行します。

[autoprefixer]: https://github.com/postcss/autoprefixer

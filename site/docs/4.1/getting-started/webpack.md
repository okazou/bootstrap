---
layout: docs
title: Webpack
# description: Learn how to include Bootstrap in your project using Webpack 3.
description: Webpack 3 を使ってどのように Bootstrap をインストールするか学びましょう。
group: getting-started
toc: true
---

<!-- ## Installing Bootstrap

[Install bootstrap]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/download/#npm) as a Node.js module using npm. -->

## Bootstrap インストール

npm を使って Node.js モジュールとして [bootstrap をインストールします]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/download/#npm)。

<!-- ## Importing JavaScript

Import [Bootstrap's JavaScript]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/) by adding this line to your app's entry point (usually `index.js` or `app.js`): -->

## JavaScript インポート

アプリのエントリーポイント(通常は `index.js` または `app.js`)に次の行を追加して [Bootstrap　の JavaScript]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/) をインポートしてください。

{% highlight js %}
import 'bootstrap';
{% endhighlight %}

<!-- Alternatively, you may **import plugins individually** as needed: -->

また, 必要に応じて個別にプラグインをインポートすることもできます。

{% highlight js %}
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';
...
{% endhighlight %}

<!-- Bootstrap is dependent on [jQuery](https://jquery.com/) and [Popper](https://popper.js.org/),
these are defined as `peerDependencies`, this means that you will have to make sure to add both of them
to your `package.json` using `npm install --save jquery popper.js`. -->



Bootstrap は [jQuery](https://jquery.com/) と [Popper](https://popper.js.org/) に依存しています。
これらは `peerDependencies` として定義されています。つまり `npm install --save jquery popper.js` で `package.json` に追加する必要があります。

<!-- ## Importing Styles

### Importing Precompiled Sass

To enjoy the full potential of Bootstrap and customize it to your needs, use the source files as a part of your project's bundling process.

First, create your own `_custom.scss` and use it to override the [built-in custom variables]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/options/). Then, use your main Sass file to import your custom variables, followed by Bootstrap: -->

## スタイルのインポート

### プリコンパイルされた Sass のインポート

Bootstrap の可能性を引き出し, 必要に応じてカスタマイズして使う場合は, 標準プロセスの一部としてソースファイルを使います。

はじめに, 独自の `_custom.scss` を作成し, それを使って [組み込みカスタム変数]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/options/) を上書きします。その後, Sass ファイルを使ってカスタム変数をインポート、続いて Bootstrap もインポートします。

{% highlight scss %}
@import "custom";
@import "~bootstrap/scss/bootstrap";
{% endhighlight %}

<!-- For Bootstrap to compile, make sure you install and use the required loaders: [sass-loader](https://github.com/webpack-contrib/sass-loader), [postcss-loader](https://github.com/postcss/postcss-loader) with [Autoprefixer](https://github.com/postcss/autoprefixer#webpack). With minimal setup, your webpack config should include this rule or similar: -->

Bootstrap をコンパイルするには, 必要な loader をインストールしてくだい: [sass-loader](https://github.com/webpack-contrib/sass-loader), [postcss-loader](https://github.com/postcss/postcss-loader) with [Autoprefixer](https://github.com/postcss/autoprefixer#webpack)。これらは最小限の設定で, webpack にこれらを含める必要があります。

{% highlight js %}
  ...
  {
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  },
  ...
{% endhighlight %}

<!-- ### Importing Compiled CSS

Alternatively, you may use Bootstrap's ready-to-use CSS by simply adding this line to your project's entry point: -->

### コンパイルされた CSS のインポート

もしくは, この行をエントリーポイントに追加するだけで, すぐに Bootstrap の CSS を使うことができます:

{% highlight js %}
import 'bootstrap/dist/css/bootstrap.min.css';
{% endhighlight %}

<!-- In this case you may use your existing rule for `css` without any special modifications to webpack config, except you don't need `sass-loader` just [style-loader](https://github.com/webpack-contrib/style-loader) and [css-loader](https://github.com/webpack-contrib/css-loader). -->

この場合, webpack を変更することなく CSS を使用することができます。`sass-loader` は必要ありません。[style-loader](https://github.com/webpack-contrib/style-loader), [css-loader](https://github.com/webpack-contrib/css-loader) だけで良いです。

{% highlight js %}
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  ...
{% endhighlight %}

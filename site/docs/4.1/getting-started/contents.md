---
layout: docs
# title: Contents
# description: Discover what's included in Bootstrap, including our precompiled and source code flavors. Remember, Bootstrap's JavaScript plugins require jQuery.
title: ファイル構成
description: Bootstrap のファイル構成を知りましょう。コンパイルされたコードとソース, JavaScript は jQuery が必要だということも忘れてはいけません。
group: getting-started
toc: true
---

<!--
## Precompiled Bootstrap

Once downloaded, unzip the compressed folder and you'll see something like this:
-->
## コンパイルされた Bootstrap

ダウンロードして zip ファイルを解凍すると次のような構成になっていることが分かります。

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

{% highlight plaintext %}
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   └── bootstrap.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map
{% endhighlight %}

<!--
This is the most basic form of Bootstrap: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js` and minified `bootstrap.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).
-->
これは Bootstrap の基本形式です。コンパイルされた CSS と JS (`bootstrap。*`), ミニファイされた CSS と JS (`bootstrap.min。*`) も提供しています。[ソースマップ](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`) は特定のブラウザの開発者ツールで使用できます。
バンドルされた JS ファイル (`bootstrap.bundle.js` とミニファイされた `bootstrap.bundle.min.js`) は [Popper](https://popper.js.org/) を含みますが [jQuery](https://jquery.com/) は含んでいません。

<!--
## CSS files

Bootstrap includes a handful of options for including some or all of our compiled CSS.
-->
## CSS ファイル

Bootstrap にはコンパイルされた全てを含んだ CSS といくつかのオプションを含んだ部分的な CSS があります。

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">CSS ファイル</th>
      <th scope="col">レイアウト</th>
      <th scope="col">コンテンツ</th>
      <th scope="col">コンポーネント</th>
      <th scope="col">ユーティリティ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap.css</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap.min.css</code></div>
      </th>
      <td class="text-success">含む</td>
      <td class="text-success">含む</td>
      <td class="text-success">含む</td>
      <td class="text-success">含む</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-grid.css</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-grid.min.css</code></div>
      </th>
      <td><a class="text-warning" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/layout/grid/">グリッドシステムのみ</a></td>
      <td class="bg-light text-muted">含まない</td>
      <td class="bg-light text-muted">含まない</td>
      <td><a class="text-warning" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/">Flexユーティリティのみ</a></td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap-reboot.css</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap-reboot.min.css</code></div>
      </th>
      <td class="bg-light text-muted">含まない</td>
      <td><a class="text-warning" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/">Reboot のみ</a></td>
      <td class="bg-light text-muted">含まない</td>
      <td class="bg-light text-muted">含まない</td>
    </tr>
  </tbody>
</table>

## JS ファイル
<!--
Similarly, we have options for including some or all of our compiled JavaScript.
-->

CSS 同様にコンパイルされた JavaScript ファイルがあります。

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">JS ファイル</th>
      <th scope="col">Popper</th>
      <th scope="col">jQuery</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap.bundle.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap.bundle.min.js</code></div>
      </th>
      <td class="text-success">含む</td>
      <td class="bg-light text-muted">含まない</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">bootstrap.js</code></div>
        <div><code class="font-weight-normal text-nowrap">bootstrap.min.js</code></div>
      </th>
      <td class="bg-light text-muted">含まない</td>
      <td class="bg-light text-muted">含まない</td>
    </tr>
  </tbody>
</table>

## Bootstrap ソースコード
<!--
The Bootstrap source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:
-->
Bootstrap のソースをダウンロードすると下記のような構成になっています。

{% highlight plaintext %}
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── docs/
│   └── examples/
├── js/
└── scss/
{% endhighlight %}

<!-- The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `docs/` folder includes the source code for our documentation, and `examples/` of Bootstrap usage. Beyond that, any other included file provides support for packages, license information, and development. -->

`scss/` と `js/` は CSS と JavaScript のソースコードです。`dist/` はコンパイル済みのダウンロードセクションにリストされている全てのものが含まれています。 `docs/` はソースコードやドキュメント, そして `examples/` は Bootstrap の使い方です。それ以外のファイルは, パッケージ, ライセンス情報, および開発のサポートになります。
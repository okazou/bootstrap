---
layout: docs
# title: Download
# description: Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
title: ダウンロード
description: コンパイルされた CSS, JavaScript, ソースコード, npm や RubyGems といった好きなパッケージマネージャで Bootstrap をインストールできます。
group: getting-started
toc: true
---

<!-- ## Compiled CSS and JS

Download ready-to-use compiled code for **Bootstrap v{{ site.current_version}}** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/contents/#css-files))
- Compiled and minified JavaScript plugins

This doesn't include documentation, source files, or any optional JavaScript dependencies (jQuery and Popper.js).

<a href="{{ site.download.dist }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">Download</a> -->

## コンパイルされた CSS と JS

すぐに使えるコンパイルされた **Bootstrap v{{ site.current_version}}** のコードをダウンロードできます。以下が含まれます。

- コンパイルおよびミニファイされた CSS ([CSS ファイル比較を参照]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/contents/#css-files))
- コンパイルおよびミニファイされた JavaScript

ここにはドキュメントやソースファイル, オプションである JavaScript(jQuery, Popper.js) は含まれません。

<a href="{{ site.download.dist }}" class="btn btn-bd-primary" onclick="_tg('send', 'event' , 'gettingStarted' , 'download' , '{{ site.download.dist }}', 1);">ダウンロード</a>

<!-- ## Source files

Compile Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (Libsass or Ruby Sass is supported) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require [build tools]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/build-tools/#tooling-setup), they are included for developing Bootstrap and its docs, but they're likely unsuitable for your own purposes.

<a href="{{ site.download.source }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download source</a>
 -->

## ソースファイル

Sass, JavaScript そしてドキュメントを含むソース・ファイルをダウンロードして, あなたの環境でコンパイルできます。そのためには以下のツールが必要です。

- CSS コンパイル用 Sass コンパイラー (Libsass, Ruby Sass サポート)
- CSS ベンダープレフィックス用 [Autoprefixer](https://github.com/postcss/autoprefixer)

Bootstrap どそのドキュメントを開発するために[ビルドツール]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/build-tools/#tooling-setup)が含まれていますが、使わない可能性が高いでしょう。

<a href="{{ site.download.source }}" class="btn btn-bd-primary" onclick="_tg('send', 'event' , 'gettingStarted' , 'download' , '{{ site.download.source }}' , 1);">ソースをダウンロード</a>

<!-- ## BootstrapCDN

Skip the download with [BootstrapCDN](https://www.bootstrapcdn.com/) to deliver cached version of Bootstrap's compiled CSS and JS to your project.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

If you're using our compiled JavaScript, don't forget to include CDN versions of jQuery and Popper.js before it.

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
{% endhighlight %} -->

## CDN から参照

ダウンロードせずに [BootstrapCDN](https://www.bootstrapcdn.com/) から配信されるコンパイルされた CSS, JS を使うこともできます。

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

もし、コンパイルされた JavaScript を使う場合は、jQuery と Popper.js をそれよりも前に参照しましょう。

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

<!-- ## Package managers

Pull in Bootstrap's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Bootstrap will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.
 -->

## パッケージマネージャ

ほとんどのパッケージマネージャで Bootstrap の **source files** を Pull することができます。パッケージマネージャに関係なく Bootstrap は **Sass コンパイラーと [Autoprefixer](https://github.com/postcss/autoprefixer)** を必要とします。

### npm

<!-- Install Bootstrap in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/bootstrap): -->
[npm パッケージ](https://www.npmjs.com/package/bootstrap) を使って, Bootstrap をインストールします。

{% highlight sh %}
npm install bootstrap
{% endhighlight %}

<!-- `require('bootstrap')` will load all of Bootstrap's jQuery plugins onto the jQuery object. The `bootstrap` module itself does not export anything. You can manually load Bootstrap's jQuery plugins individually by loading the `/js/*.js` files under the package's top-level directory.

Bootstrap's `package.json` contains some additional metadata under the following keys:

- `sass` - path to Bootstrap's main [Sass](https://sass-lang.com/) source file
- `style` - path to Bootstrap's non-minified CSS that's been precompiled using the default settings (no customization) -->

`require('bootstrap')` は Bootstrap の全ての jQuery プラグインを jQuery オブジェクトにロードします。.`bootstrap` モジュール自体は何もエクスポートしません。パッケージのルートにある `/js/*.js` ファイルをロードすることで Bootstrap の jQuery プラグインを個別にロードできます。

- `sass` - Bootstrap　メイン [Sass](https://sass-lang.com/) ソース・ファイル
- `style` - Bootstrap　デフォルト CSS (カスタムなし)

### RubyGems

<!-- Install Bootstrap in your Ruby apps using [Bundler](https://bundler.io/) (**recommended**) and [RubyGems](https://rubygems.org/) by adding the following line to your [`Gemfile`](https://bundler.io/gemfile.html): -->

Ruby アプリ [Bundler](https://bundler.io/) (**recommended**) と [RubyGems](https://rubygems.org/) で [`Gemfile`](https://bundler.io/gemfile.html) からインストールできます。

{% highlight ruby %}
gem 'bootstrap', '~> {{ site.current_ruby_version }}'
{% endhighlight %}

<!-- Alternatively, if you're not using Bundler, you can install the gem by running this command: -->

Bundler を使ってない場合は、以下のコマンドで gem をインストールできます。

{% highlight sh %}
gem install bootstrap -v {{ site.current_ruby_version }}
{% endhighlight %}

<!-- [See the gem's README](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md) for further details. -->
[gem　の README を見る](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md)

### Composer

<!-- You can also install and manage Bootstrap's Sass and JavaScript using [Composer](https://getcomposer.org/): -->
[Composer](https://getcomposer.org/) を使って Bootstrap の Sass と JavaScript をインストールしできます。

{% highlight sh %}
composer require twbs/bootstrap:{{ site.current_version }}
{% endhighlight %}

### NuGet

<!-- If you develop in .NET, you can also install and manage Bootstrap's [CSS](https://www.nuget.org/packages/bootstrap/) or [Sass](https://www.nuget.org/packages/bootstrap.sass/) and JavaScript using [NuGet](https://www.nuget.org/): -->

.NET で開発しているのであれば [NuGet](https://www.nuget.org/) を使って Bootstrap の [CSS](https://www.nuget.org/packages/bootstrap/) や [Sass](https://www.nuget.org/packages/bootstrap.sass/), JavaScript をインストールできます。

{% highlight powershell %}
Install-Package bootstrap
{% endhighlight %}

{% highlight powershell %}
Install-Package bootstrap.sass
{% endhighlight %}

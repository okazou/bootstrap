---
layout: docs
title: JavaScript
# description: Bring Bootstrap to life with our optional JavaScript plugins built on jQuery. Learn about each plugin, our data and programmatic API options, and more.
description: jQuery で構築された JavaScript プラグインを使って Bootstrap を実現しましょう。各プラグイン, データと API オプションなどについて学びます。
group: getting-started
toc: true
---

<!-- ## Individual or compiled

Plugins can be included individually (using Bootstrap's individual `js/dist/*.js`), or all at once using `bootstrap.js` or the minified `bootstrap.min.js` (don't include both).

If you use a bundler (Webpack, Rollup...), you can use `/js/dist/*.js` files which are UMD ready. -->


## 個別またはコンパイル

プラグインは(`js/dist/*.js` を使用して)個別に組み込むことも, `bootstrap.js` もしくはミニファイされた `bootstrap.min.js` のいずれかを一括して組み込みことができます。

バンドラ(Webpack, ROllup...)を使用する場合, UMD 対応の `/js/dist/*.js` を使用できます。

<!-- ## Dependencies

Some plugins and CSS components depend on other plugins. If you include plugins individually, make sure to check for these dependencies in the docs. Also note that **all plugins depend on jQuery** (this means jQuery must be included **before** the plugin files). [Consult our `package.json`]({{ site.repo }}/blob/v{{ site.current_version }}/package.json) to see which versions of jQuery are supported.

Our dropdowns, popovers and tooltips also depend on [Popper.js](https://popper.js.org/). -->

## 依存関係

いくつかのプラグインと CSS コンポーネントは他のプラグインに依存しています。プラグインを個別に組み込む場合は, ドキュメントで確認してください。また, **全てのプラグインが jQuery に依存していること** に注意してください(プラグインの**前に** jQuery を読み込む必要があることに注意してください)。サポートされている jQuery のバージョンを確認するには [`package.json` を参照]({{ site.repo }}/blob/v{{ site.current_version }}/package.json)してください。

ドロップダウン, ポップオーバ, ツールチップは [Popper.js](https://popper.js.org/) に依存しています。

<!-- ## Data attributes

Nearly all Bootstrap plugins can be enabled and configured through HTML alone with data attributes (our preferred way of using JavaScript functionality). Be sure to **only use one set of data attributes on a single element** (e.g., you cannot trigger a tooltip and modal from the same button.)

However, in some situations it may be desirable to disable this functionality. To disable the data attribute API, unbind all events on the document namespaced with `data-api` like so: -->

## データ属性

ほぼ全ての Bootstrap プラグインはデータ属性を持つ HTML だけ有効になり機能します。**単一の要素に対して1セットのデータ属性のみを使用する**ようにしてください(例えば, 同じボタンからツールチップとモーダルを同時にトリガーすることはできません))。

ただし, この機能を使いたくないこともあるかもしれません。データ属性 API を無効化するには以下のように `data-api` をアンバインドします。

{% highlight js %}
$(document).off('.data-api')
{% endhighlight %}

<!-- Alternatively, to target a specific plugin, just include the plugin's name as a namespace along with the data-api namespace like this: -->

特定のプラグインだけ無効にする場合は, 次のようにプラグインの名前を含めます。

{% highlight js %}
$(document).off('.alert.data-api')
{% endhighlight %}

<!-- ## Escaping selectors

If you use special selectors, for example: `collapse:Example`, be sure to escape them, because they’ll be passed through jQuery.
-->

## セレクタのエスケープ

{% capture callout %}
特別なセレクタを使用する場合は, 例えば `collapse:Example` のように jQuery を通過するためにエスケープしてください。
{% endcapture %}
{% include callout.html content=callout type="warning" %}

<!-- ## Events

Bootstrap provides custom events for most plugins' unique actions. Generally, these come in an infinitive and past participle form - where the infinitive (ex. `show`) is triggered at the start of an event, and its past participle form (ex. `shown`) is triggered on the completion of an action.

All infinitive events provide [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) functionality. This provides the ability to stop the execution of an action before it starts. Returning false from an event handler will also automatically call `preventDefault()`. -->

## イベント

Bootstrap は, ほとんどのプラグインに一意のアクションのカスタムイベントを提供します。 これらは, 不定期イベントとしてアクション開始時にトリガされ(例えば `show`), 完了時にもトリガされます(例えば `shown`)。
すべての不定期イベントは `preventDefault()` を提供します。 これにより、アクションが開始される前にその実行を停止することができます。 イベントハンドラから false を返すと `preventDefault()` も自動的に呼び出されます。


{% highlight js %}
$('#myModal').on('show.bs.modal', function (e) {
  if (!data) return e.preventDefault() // stops modal from being shown
})
{% endhighlight %}

<!-- ## Programmatic API

We also believe you should be able to use all Bootstrap plugins purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon. -->

## プログラム的な API

JavaScript API を通してすべての Bootstrap プラグインを使用できます。API は単一なメソッドチェーンで jQuery オブジェクトを返します。

{% highlight js %}
$('.btn.danger').button('toggle').addClass('fat')
{% endhighlight %}

<!-- All methods should accept an optional options object, a string which targets a particular method, or nothing (which initiates a plugin with default behavior): -->

すべてのメソッドはオプションオブジェクト, 特定のメソッドを指定する文字列, もしくは何も指定しないでください(標準動作になります)。

{% highlight js %}
$('#myModal').modal()                      // initialized with defaults
$('#myModal').modal({ keyboard: false })   // initialized with no keyboard
$('#myModal').modal('show')                // initializes and invokes show immediately
{% endhighlight %}

<!-- Each plugin also exposes its raw constructor on a `Constructor` property: `$.fn.popover.Constructor`. If you'd like to get a particular plugin instance, retrieve it directly from an element: `$('[rel="popover"]').data('popover')`. -->

各プラグインは `$.fn.popover.Constructor` という `Constructor` プロパティを公開しています。特定のプラグインインスタンスは要素から直接取得します: `$('[rel="popover"]').data('popover')`

<!-- ### Asynchronous functions and transitions -->

<!-- All programmatic API methods are **asynchronous** and returns to the caller once the transition is started but **before it ends**.

In order to execute an action once the transition is complete, you can listen to the corresponding event. -->

### 非同期関数とトランジション

すべてのプログラム API メソッドは **非同期** で, トランジションが開始されてから終了する前に呼び出し元に戻ります。

トランジションが完了したらアクションを実行するために, 対応するイベントをキャッチすることができます。

{% highlight js %}
$('#myCollapse').on('shown.bs.collapse', function (e) {
  // Action to execute once the collapsible area is expanded
})
{% endhighlight %}

<!-- In addition a method call on a **transitioning component will be ignored**. -->

さらに, **トラジションコンポーネントの呼び出しは無視されます。**

{% highlight js %}
$('#myCarousel').on('slid.bs.carousel', function (e) {
  $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

$('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
$('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
{% endhighlight %}

<!-- ### Default settings

You can change the default settings for a plugin by modifying the plugin's `Constructor.Default` object: -->

### 標準の設定

プラグインの `Constructor.Default` オブジェクトを変更することで, デフォルト設定を変更できます:

{% highlight js %}
$.fn.modal.Constructor.Default.keyboard = false // changes default for the modal plugin's `keyboard` option to false
{% endhighlight %}

<!-- ## No conflict

Sometimes it is necessary to use Bootstrap plugins with other UI frameworks. In these circumstances, namespace collisions can occasionally occur. If this happens, you may call `.noConflict` on the plugin you wish to revert the value of. -->

## コンフリクト回避

他の UI フレームワークで Bootstrap プラグインを使うことがあります。 このような状況では, 名前空間のコンフリクトが起こることがあります。 この場合, 値を元に戻したいプラグインで `.noConflict` を呼び出すことができます。

{% highlight js %}
var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality
{% endhighlight %}

<!-- ## Version numbers

The version of each of Bootstrap's jQuery plugins can be accessed via the `VERSION` property of the plugin's constructor. For example, for the tooltip plugin: -->

## バージョン番号

Bootstrap の各 jQuery プラグインのバージョンには, コンストラクタの `VERSION` プロパティから参照できます。例えば, ツールチップの場合:

{% highlight js %}
$.fn.tooltip.Constructor.VERSION // => "{{ site.current_version }}"
{% endhighlight %}

<!-- ## No special fallbacks when JavaScript is disabled

Bootstrap's plugins don't fall back particularly gracefully when JavaScript is disabled. If you care about the user experience in this case, use [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks. -->

## JavaScript 無効時のフォールバック

JavaScript が無効な状態に対して, Bootstrap プラグインはフォールバックを提供していません。ユーザエクスペリエンスを考慮する場合は [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) を使ってユーザに状況(および JavaScript を再び有効にする方法)を説明し, 独自のフォールバックを追加することができます。

<!-- ##### Third-party libraries -->

<!-- **Bootstrap does not officially support third-party JavaScript libraries** like Prototype or jQuery UI. Despite `.noConflict` and namespaced events, there may be compatibility problems that you need to fix on your own. -->
{% capture callout %}
##### サードパーティライブラリ

Bootstrap は Prototype や jQuery UI のような **サードパーティーの JavaScript ライブラリを公式にサポートしません。** `.noConflict` や名前空間のイベントに関わらず, あなた自身で修正する必要のある互換性の問題があるかもしれません。
{% endcapture %}
{% include callout.html content=callout type="warning" %}

<!-- ## Util

All Bootstrap's JavaScript files depend on `util.js` and it has to be included alongside the other JavaScript files. If you're using the compiled (or minified) `bootstrap.js`, there is no need to include this—it's already there.

`util.js` includes utility functions and a basic helper for `transitionEnd` events as well as a CSS transition emulator. It's used by the other plugins to check for CSS transition support and to catch hanging transitions. -->

## ユーティリティ

すべての Bootstrap の JavaScript ファイルは `util.js` に依存しており, 他の JavaScript ファイルと一緒に含める必要があります。コンパイルされた(または縮小された) `bootstrap.js` を使用している場合は, すでに含まれているので気にする必要はありません。

`util.js` には, ユーティリティ機能と `transitionEnd` イベント用の基本ヘルパーと CSS トランジションエミュレータが含まれています。これは他のプラグインと CSS トランジションのサポートをチェックしたり, キャッチするために使用されます。


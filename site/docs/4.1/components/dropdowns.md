---
layout: docs
title: Dropdowns
description: ドロップダウンプラグインを使用して, リンクのリストなどを表示するコンテキストオーバーレイを切り替えます。
group: components
toc: true
---
<!-- ---
layout: docs
title: Dropdowns
description: Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
group: components
toc: true
--- -->

<!-- ## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They're made interactive with the included Bootstrap dropdown JavaScript plugin. They're toggled by clicking, not by hovering; this is [an intentional design decision.](http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/) 

Dropdowns are built on a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning and viewport detection. Be sure to include [popper.min.js]({{ site.cdn.popper }}) before Bootstrap's JavaScript or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper.js. Popper.js isn't used to position dropdowns in navbars though as dynamic positioning isn't required.

If you're building our JavaScript from source, it [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util).

-->

## Overview

ドロップダウンはトグルが可能で、リンクのリストなどを表示するためのコンテキストオーバーレイです。 ドロップダウンJavaScriptプラグインとインタラクティブになっています。 ホバリングではなく、クリックすることでトグルされます。 [an intentional design decision.](http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/)  
ドロップダウンはサードパーティのライブラリ ( [Popper.js](https://popper.js.org/) ) に構築され, 動的な位置決めとビューポートの検出が可能です。
`bootstrap.min.js` や `bootstrap.js` などのブートストラップのJavascriptの前に [popper.min.js]({{ site.cdn.popper }}) を組み込むか, 代わりにPopper.jsを内部に含む `bootstrap.bundle.min.js` や `bootstrap.bundle.js` を使用する。 Popper.jsは、動的位置決めが必要ないので、ナビゲーションバーのドロップダウンの位置を決めるためには使用されません。


<!-- ## Accessibility

The [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) standard defines an actual [`role="menu"` widget](https://www.w3.org/WAI/PF/aria/roles#menu), but this is specific to application-like menus which trigger actions or functions. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

Bootstrap's dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the `role` and `aria-` attributes required for true <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus. Authors will have to include these more specific attributes themselves.

However, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual `.dropdown-item` elements using the cursor keys and close the menu with the <kbd>ESC</kbd> key. -->

## Accessibility

[<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) 標準は実際の [`role="menu"` widget](https://www.w3.org/WAI/PF/aria/roles#menu) を定義しますが,アクションや機能をトリガするアプリケーションのようなメニューに特有のものです。<abbr title="Accessible Rich Internet Applications">ARIA</abbr> メニューには, チェックボックス, ラジオボタン, ラジオボタングループ, サブメニューしか含めることができません。

ブートストラップのドロップダウンは汎用的で、さまざまな状況やマークアップ構造に適用できるように設計されています。 たとえば、検索フィールドやログインフォームなどの追加の入力とフォームコントロールを含むドロップダウンを作成することができます。 <abbr title = "Accessible Rich Internet Applications"> ARIA </ abbr>メニューに必要な `role`と` aria-` 属性のいずれも期待していません。 これらのより具体的な属性自体を含める必要があります。

しかし、Bootstrapは、カーソルキーを使用して個々の `.dropdown-item` 要素を移動し、<kbd> ESC </ kbd>キーを使用してメニューを閉じる機能など、ほとんどの標準的なキーボードメニューのやり取りの組み込みのサポートを追加します 。

<!-- ## Examples

Wrap the dropdown's toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your potential needs. -->

## Examples

ドロップダウンのトグル（あなたのボタンまたはリンク）と `.dropdown` 内のドロップダウンメニュー、または ` position：relative; ` を宣言する別の要素を囲みます。 ドロップダウンは、潜在的なニーズに合わせて、`<a>` または `<button>` 要素からトリガーできます。


<!-- ### Single button

Any single `.btn` can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either `<button>` elements: -->

### Single button

`.btn` はマークアップの変更によってドロップダウントグルに変換できます。`<button>`要素を使ってそれらを動作させる方法は次のとおりです：


{% capture example %}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- And with `<a>` elements: -->
`<a>` 要素の場合は

{% capture example %}
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- The best part is you can do this with any button variant, too: -->
任意のボタンでもこれを行うことができます：

<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
</div>

{% highlight html %}
<!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
{% endhighlight %}

<!-- ### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that's added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button. -->

### Split button

シングルボタンと同じマークアップでドロップダウンを作成できます。 ドロップダウンキャレットに適切なスペースを入れるためには `.dropdown-toggle-split` を適用します。 
このクラスを使用してキャレットの両側にある水平の `padding` を25％減らし、通常のボタンのドロップダウンに追加された `margin-left` を削除します。 これらの余分な変更はキャレットをスプリットボタンの中央に保ち, メインボタンの隣に適切なサイズのヒット領域を提供します。

<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div><!-- /btn-group -->
</div>

{% highlight html %}
<!-- Example split danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
{% endhighlight %}

## Sizing
<!-- Button dropdowns work with buttons of all sizes, including default and split dropdown buttons. -->
ドロップダウンは、すべてのサイズのボタンで機能します。

<div class="bd-example">
  <div class="btn-toolbar" role="toolbar">
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Large button
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
    <div class="btn-group ml-2">
      <button type="button" class="btn btn-lg btn-secondary">Large split button</button>
      <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
  </div><!-- /btn-toolbar -->
  <div class="btn-toolbar" role="toolbar">
    <div class="btn-group">
      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Small button
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
    <div class="btn-group ml-2">
      <button type="button" class="btn btn-sm btn-secondary">Small split button</button>
      <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div><!-- /btn-group -->
  </div><!-- /btn-toolbar -->
</div><!-- /example -->

{% highlight html %}
<!-- Large button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Large button
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">
    Large split button
  </button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>

<!-- Small button groups (default and split) -->
<div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Small button
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    Small split button
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
{% endhighlight %}

## Directions

### Dropup

<!-- Trigger dropdown menus above elements by adding `.dropup` to the parent element. -->
親要素に `.dropup` を追加して要素の上にあるドロップダウンメニューをトリガーします。

<div class="bd-example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropup
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">
      Split dropup
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>

{% highlight html %}
<!-- Default dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropup
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary">
    Split dropup
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>
{% endhighlight %}

### Dropright

<!-- Trigger dropdown menus at the right of the elements by adding `.dropright` to the parent element. -->
親要素に `.dropright` を追加することにより、要素の右側にあるドロップダウンメニューをトリガーします。

<div class="bd-example">
  <div class="btn-group dropright">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropright
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <div class="btn-group dropright">
    <button type="button" class="btn btn-secondary">
      Split dropright
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropright</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>

{% highlight html %}
<!-- Default dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropright
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropright button -->
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary">
    Split dropright
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropright</span>
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>
{% endhighlight %}

### Dropleft

<!-- Trigger dropdown menus at the left of the elements by adding `.dropleft` to the parent element. -->
親要素に `.dropleft`を追加することにより、要素の左側にあるドロップダウンメニューをトリガーします。

<div class="bd-example">
  <div class="btn-group dropleft">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropleft
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <div class="btn-group">
    <div class="btn-group dropleft" role="group">
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropleft</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <button type="button" class="btn btn-secondary">
      Split dropleft
    </button>
  </div>
</div>

{% highlight html %}
<!-- Default dropleft button -->
<div class="btn-group dropleft">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropleft
  </button>
  <div class="dropdown-menu">
    <!-- Dropdown menu links -->
  </div>
</div>

<!-- Split dropleft button -->
<div class="btn-group">
  <div class="btn-group dropleft" role="group">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropleft</span>
    </button>
    <div class="dropdown-menu">
      <!-- Dropdown menu links -->
    </div>
  </div>
  <button type="button" class="btn btn-secondary">
    Split dropleft
  </button>
</div>
{% endhighlight %}

<!-- ## Menu items

Historically dropdown menu contents *had* to be links, but that's no longer the case with v4. Now you can optionally use `<button>` elements in your dropdowns instead of just `<a>`s. -->

## メニューアイテム(Menu items)
ドロップダウンメニューの内容はリンクになっていましたが、これはv4ではなくなりました。オプションで `<a>` の代わりに `<button>` 要素をドロップダウンで使うことができます。

{% capture example %}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- You can also create non-interactive dropdown items with `.dropdown-item-text`. Feel free to style further with custom CSS or text utilities. -->

`.dropdown-item-text` で非対話的なドロップダウン項目を作成することもできます。 カスタムCSSやテキストユーティリティを使用してさらにスタイルを設定できます。

{% capture example %}
<div class="dropdown-menu">
  <span class="dropdown-item-text">Dropdown item text</span>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Active

Add `.active` to items in the dropdown to **style them as active**. -->

### Active
ドロップダウン内の項目に `.active` を適用するとかきのように,アクティブなものとしてスタイルを設定できます。

{% capture example %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item active" href="#">Active link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Disabled

Add `.disabled` to items in the dropdown to **style them as disabled**. -->

### Disabled

ドロップダウンリストの項目に `.disabled` を適用すると非アクティブなスタイルを設定できます。


{% capture example %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Regular link</a>
  <a class="dropdown-item disabled" href="#">Disabled link</a>
  <a class="dropdown-item" href="#">Another link</a>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Menu alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add `.dropdown-menu-right` to a `.dropdown-menu` to right align the dropdown menu. -->

## Menu alignment

デフォルトではドロップダウンメニューは親の左側から100％の位置に自動的に配置されます。 `.dropdown-menu-right` を `.dropdown-menu` に加えてドロップダウンメニューを右揃えにします。

{% capture callout %}
**Heads up!** Dropdowns are positioned thanks to Popper.js (except when they are contained in a navbar).
{% endcapture %}
{% include callout.html content=callout type="info" %}

{% capture example %}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Right-aligned menu
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Menu content

### Headers

Add a header to label sections of actions in any dropdown menu. -->

## Menu content

### Headers

`.dropdown-header` を適用するとヘッダーを作成する事ができます。

{% capture example %}
<div class="dropdown-menu">
  <h6 class="dropdown-header">Dropdown header</h6>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
</div>
{% endcapture %}
{% include example.html content=example %}

### Dividers
<!-- Separate groups of related menu items with a divider. -->
`.dropdown-divider` を適用すると関連する項目のグループ化ができます。

{% capture example %}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Separated link</a>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Text

Place any freeform text within a dropdown menu with text and use [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/). Note that you'll likely need additional sizing styles to constrain the menu width. -->

### Text
テキストをドロップダウンメニューに配置し[spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) を使用します。
メニュー幅をカスタマイズするには、`sizing` スタイルを追加する必要があります。

{% capture example %}
<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Forms

Put a form within a dropdown menu, or make it into a dropdown menu, and use [margin or padding utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) to give it the negative space you require. -->

### Forms
ドロップダウンメニュー内にフォームを挿入するか,ドロップダウンメニューを開き [margin or padding utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/)を使用して必要なネガティブスペースを与えます。

{% capture example %}
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck">
      <label class="form-check-label" for="dropdownCheck">
        Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<form class="dropdown-menu p-4">
  <div class="form-group">
    <label for="exampleDropdownFormEmail2">Email address</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
  </div>
  <div class="form-group">
    <label for="exampleDropdownFormPassword2">Password</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="dropdownCheck2">
    <label class="form-check-label" for="dropdownCheck2">
      Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Dropdown options

Use `data-offset` or `data-reference` to change the location of the dropdown. -->

## Dropdown options
`data-offset` または `data-reference` を使ってドロップダウンの位置を変更できます。

{% capture example %}
<div class="d-flex">
  <div class="dropdown mr-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Offset
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Usage

Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.show` class on the parent list item. The `data-toggle="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it. -->

## Usage

データ属性やJavaScript経由で,ドロップダウンプラグインは親リストアイテムの `.show` クラスをトグルすると、非表示のコンテンツ（ドロップダウン・メニュー）をトグルします。 `data-toggle =" dropdown "`属性は、アプリケーションレベルでドロップダウンメニューを閉じるために使用されるので、常に使用することをお勧めします。


{% capture callout %}

<!-- On touch-enabled devices, opening a dropdown adds empty (`$.noop`) `mouseover` handlers to the immediate children of the `<body>` element. This admittedly ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed. -->

タッチ対応デバイスではドロップダウンを開くと 空の（ `$ .noop`）` mouseover` ハンドラが `<body>` 要素の直下の子に追加されます。
[quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html) を回避するためにはハックが必要です。  
ドロップダウンを閉じるコードをトリガーすることからドロップダウンが閉じられると、これらの追加の空の `mouseover`ハンドラーが削除されます。

{% endcapture %}
{% include callout.html content=callout type="info" %}

<!-- ### Via data attributes

Add `data-toggle="dropdown"` to a link or button to toggle a dropdown. -->

### Via data attributes

`data-toggle =" dropdown "`をリンクやボタンに追加してドロップダウンを切り替えます。


{% highlight html %}
<div class="dropdown">
  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown trigger
  </button>
  <div class="dropdown-menu" aria-labelledby="dLabel">
    ...
  </div>
</div>
{% endhighlight %}

<!-- ### Via JavaScript -->

<!-- Call the dropdowns via JavaScript: -->

### Via JavaScript

JavaScript経由でドロップダウンを呼びます。

{% highlight js %}
$('.dropdown-toggle').dropdown()
{% endhighlight %}

{% capture callout %}

<!-- ##### `data-toggle="dropdown"` still required

Regardless of whether you call your dropdown via JavaScript or instead use the data-api, `data-toggle="dropdown"` is always required to be present on the dropdown's trigger element. -->

##### `data-toggle="dropdown"` still required

JavaScriptを使用してドロップダウンを呼び出すか、代わりにdata-apiを使用するかの両方で `data-toggle =" dropdown "` は常にドロップダウンのトリガー要素に存在する必要があります。


{% endcapture %}
{% include callout.html content=callout type="info" %}

<!-- ### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-offset=""`. -->


### Options

オプションはデータ属性またはJavaScriptを使用して渡すことができます。 データ属性の場合、オプション名を `data-` に `data-offset =" "` のように付加します。

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 100px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>offset</td>
      <td>number | string | function</td>
      <td>0</td>
      <td>Offset of the dropdown relative to its target. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">offset docs</a>.</td>
    </tr>
    <tr>
      <td>flip</td>
      <td>boolean</td>
      <td>true</td>
      <td>Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.enabled">flip docs</a>.</td>
    </tr>
    <tr>
      <td>boundary</td>
      <td>string | element</td>
      <td>'scrollParent'</td>
      <td>Overflow constraint boundary of the dropdown menu. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</td>
    </tr>
    <tr>
      <td>reference</td>
      <td>string | element</td>
      <td>'toggle'</td>
      <td>Reference element of the dropdown menu. Accepts the values of <code>'toggle'</code>, <code>'parent'</code>, or an HTMLElement reference. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#referenceObject">referenceObject docs</a>.</td>
    </tr>
    <tr>
      <td>display</td>
      <td>string</td>
      <td>'dynamic'</td>
      <td>By default, we use Popper.js for dynamic positioning. Disable this with <code>static</code>.</td>
    </tr>
  </tbody>
</table>

<!-- Note when `boundary` is set to any value other than `'scrollParent'`, the style `position: static` is applied to the `.dropdown` container. -->

`boundary` が `scrollParent` 以外の値に設定されている場合、`position：static`が `.dropdown` コンテナに適用されます。

### Methods

| Method | Description |
| --- | --- |
| `$().dropdown('toggle')` | Toggles the dropdown menu of a given navbar or tabbed navigation. |
| `$().dropdown('update')` | Updates the position of an element's dropdown. |
| `$().dropdown('dispose')` | Destroys an element's dropdown. |

<!-- ### Events

All dropdown events are fired at the `.dropdown-menu`'s parent element and have a `relatedTarget` property, whose value is the toggling anchor element.
`hide.bs.dropdown` and `hidden.bs.dropdown` events have a `clickEvent` property (only when the original event type is `click`) that contains an Event Object for the click event. -->

### Events

ドロップダウンイベントは `.dropdown-menu` の親要素で起動され、 `relatedTarget` プロパティを持ちます。その値はトグルアンカー要素です。
`hide.bs.dropdown` と `hidden.bs.dropdown` イベントにはクリックのイベントオブジェクトを含む `clickEvent` プロパティ（元のイベントタイプが　`click` のときのみ）があります。

| Event | Description |
| --- | --- |
| `show.bs.dropdown` | This event fires immediately when the show instance method is called. |
| `shown.bs.dropdown` | This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete). |
| `hide.bs.dropdown` | This event is fired immediately when the hide instance method has been called. |
| `hidden.bs.dropdown`| This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete). |

{% highlight js %}
$('#myDropdown').on('show.bs.dropdown', function () {
  // do something…
})
{% endhighlight %}

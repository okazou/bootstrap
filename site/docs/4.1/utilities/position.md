---
layout: docs
title: Position
description: 要素の位置を変更できます。
group: utilities
toc: true
---
<!-- ---
layout: docs
title: Position
description: Use these shorthand utilities for quickly configuring the position of an element.
group: utilities
toc: true
--- -->

<!-- ## Common values

Quick positioning classes are available, though they are not responsive. -->

## 共通の値(Common values)

下記のように設定可能です。レスポンシブには未対応です。

{% highlight html %}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
{% endhighlight %}

<!-- ## Fixed top

Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS. -->

## 最上部に固定(Fixed top)

viewportの上部に要素を配置します。(追加でCSSを必要がある場合もあります)

{% highlight html %}
<div class="fixed-top">...</div>
{% endhighlight %}

<!-- ## Fixed bottom

Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS. -->

## 最下部に固定(Fixed bottom)

viewportの下部に要素を配置します。(追加でCSSを必要がある場合もあります)


{% highlight html %}
<div class="fixed-bottom">...</div>
{% endhighlight %}

<!-- ## Sticky top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. The `.sticky-top` utility uses CSS's `position: sticky`, which isn't fully supported in all browsers. -->

## 最上部に達すると固定(Sticky top)

スクロールした後、要素をviewportの上部に配置。.`sticky-top` はCSSの `position: sticky` を使用しています。すべてのブラウザで完全にサポートされていはいません。

<!-- **IE11 and IE10 will render `position: sticky` as `position: relative`.** As such, we wrap the styles in a `@supports` query, limiting the stickiness to only browsers that can render it properly. -->

IE11 , IE10 では　`position：sticky` を `position：relative` レンダリングします。  
スタイルを `@support` で囲み、適切にレンダリングできるブラウザのみに上部固定を制限します。


{% highlight html %}
<div class="sticky-top">...</div>
{% endhighlight %}

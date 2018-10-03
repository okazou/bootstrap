---
layout: docs
title: Embeds
description: 任意のデバイスで比例する比率で, 親要素の幅に基づいてレスポンシブなビデオやスライドショーの埋め込みをできます。
group: utilities
toc: true
---
<!-- ---
layout: docs
title: Embeds
description: Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.
group: utilities
toc: true
--- -->

<!-- ## About

Rules are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements; optionally use an explicit descendant class `.embed-responsive-item` when you want to match the styling for other attributes.

**Pro-Tip!** You don't need to include `frameborder="0"` in your `<iframe>`s as we override that for you.

## Example

Wrap any embed like an `<iframe>` in a parent element with `.embed-responsive` and an aspect ratio. The `.embed-responsive-item` isn't strictly required, but we encourage it. -->

## 概要(About)

ルールは`<iframe>`, `<embed>`, `<video>`, `<object>`要素に直接適用することです。 :  
他の属性のスタイリングにマッチさせたいときは、オプションで `.embed-responsive-item` クラスを使います。  
`<iframe>` に `frameborder =" 0 "`を追加する必要はありません。  

## 例(Example)
`.embed-responsive`とアスペクト比を持つ親要素に `<iframe>` のような埋め込みをラップします。  
`.embed-responsive-item` を推奨します。



{% capture example %}
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Aspect ratios

Aspect ratios can be customized with modifier classes. -->

## アスペクト比(Aspect ratios)

アスペクト比は下記のようにカスタマイズ可能です。


{% highlight html %}
<!-- 21:9 aspect ratio -->
<div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 1:1 aspect ratio -->
<div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
{% endhighlight %}

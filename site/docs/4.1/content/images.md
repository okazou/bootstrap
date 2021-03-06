---
layout: docs
title: Images
description: レスポンシブな画像とクラスの適用についての例です。
group: content
toc: true
---

<!--
---
layout: docs
title: Images
description: Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.
group: content
toc: true
---
-->
## Responsive images
<!--
Images in Bootstrap are made responsive with `.img-fluid`. `max-width: 100%;` and `height: auto;` are applied to the image so that it scales with the parent element.
-->
画像をレスポンシブにするには `.img-fluid` を使用します。
`max-width: 100%;` , `height: auto;` を適用すると親要素に比例するレスポンシブが実現出来ます。

<div class="bd-example">
  <img data-src="holder.js/100px250" class="img-fluid" alt="Generic responsive image">
</div>

{% highlight html %}
<img src="..." class="img-fluid" alt="Responsive image">
{% endhighlight %}

{% capture callout %}

##### SVG images and IE 10
<!--
In Internet Explorer 10, SVG images with `.img-fluid` are disproportionately sized. To fix this, add `width: 100% \9;` where necessary. This fix improperly sizes other image formats, so Bootstrap doesn't apply it automatically.
-->
IE10の場合, SVGに .img-fluid が効きません。IE10 に対応するには CSSハック width: 100% \9; を追加してください。  
この修正は他フォーマットの画像に影響を及ぼすため、Bootstrap では標準でセットしていません。

{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Image thumbnails
<!--
In addition to our [border-radius utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/borders/), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.
-->

[border-radius utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/borders/) に加えて、 `.img-thumbnail` を適用すると境界線(1ピクセル分)に丸みを持たせることができます。

<div class="bd-example bd-example-images">
  <img data-src="holder.js/200x200" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">
</div>

{% highlight html %}
<img src="..." alt="..." class="img-thumbnail">
{% endhighlight %}

## Aligning images
<!--
Align images with the [helper float classes]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/float) or [text alignment classes]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/text/#text-alignment). `block`-level images can be centered using [the `.mx-auto` margin utility class]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/#horizontal-centering).
-->
画像の鉢は [helper float classes]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/float) と [text alignment classes]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/text/#text-alignment) を参考にしてください。  
`block` レベルでは画像は真ん中に配置されます。 [the `.mx-auto` margin utility class]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/#horizontal-centering)  







<div class="bd-example bd-example-images">
  <img data-src="holder.js/200x200" class="rounded float-left" alt="A generic square placeholder image with rounded corners">
  <img data-src="holder.js/200x200" class="rounded float-right" alt="A generic square placeholder image with rounded corners">
</div>

{% highlight html %}
<img src="..." class="rounded float-left" alt="...">
<img src="..." class="rounded float-right" alt="...">
{% endhighlight %}

<div class="bd-example bd-example-images">
  <img data-src="holder.js/200x200" class="rounded mx-auto d-block" alt="A generic square placeholder image with rounded corners">
</div>

{% highlight html %}
<img src="..." class="rounded mx-auto d-block" alt="...">
{% endhighlight %}

<div class="bd-example bd-example-images">
  <div class="text-center">
    <img data-src="holder.js/200x200" class="rounded" alt="A generic square placeholder image with rounded corners">
  </div>
</div>

{% highlight html %}
<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>
{% endhighlight %}


## Picture
<!--
If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.
-->
`<picture>` 要素を使用して、複数の `<source>` 要素を `<img>` タグの為に使用する際は、 `.img-*` クラスを `<picture>` タグではなく、 `<img>` タグに適用して下さい。

{% highlight html %}
​<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
{% endhighlight %}

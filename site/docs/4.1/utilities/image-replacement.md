---
layout: docs
title: Image replacement
description: テキストを画像に入れ替えることができます。
group: utilities
toc: true
---

<!-- ---
layout: docs
title: Image replacement
description: Swap text for background images with the image replacement class.
group: utilities
toc: true
--- -->

{% capture callout %}
<!-- ##### Warning
The `text-hide()` class and mixin has been deprecated as of v4.1. It will be removed entirely in v5. -->

##### 警告(Warning)
`text-hide()` クラスとmixinはv4.1から廃止されています。v5で完全に削除されます。  

{% endcapture %}
{% include callout.html content=callout type="warning" %}

<!-- Utilize the `.text-hide` class or mixin to help replace an element's text content with a background image. -->
`.text-hide` クラスまたはmixinを使用して、背景画像を持つテキストを非表示にして画像に置換できます。

{% highlight html %}
<h1 class="text-hide">Custom heading</h1>
{% endhighlight %}

{% highlight scss %}
// Usage as a mixin
.heading {
  @include text-hide;
}
{% endhighlight %}

<!-- Use the `.text-hide` class to maintain the accessibility and SEO benefits of heading tags, but want to utilize a `background-image` instead of text. -->
見出しタグのアクセシビリティとSEOの利点を維持するために `.text-hide` を使用していますが, テキストの代わりに `background-image` を利用することもできます。  

{% capture example %}
<h1 class="text-hide" style="background-image: url('/docs/{{ site.docs_version }}/assets/brand/bootstrap-solid.svg'); width: 50px; height: 50px;">Bootstrap</h1>
{% endcapture %}
{% include example.html content=example %}

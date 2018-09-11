---
layout: docs
title: Figures
description: Documentation and examples for displaying related images and text with the figure component in Bootstrap.
group: content
---

<!-- Anytime you need to display a piece of content—like an image with an optional caption, consider using a `<figure>`. -->
任意のキャプションでコンテンツを表示する必要があるときは、 `<figure>` の使用を検討してください。

<!--
Use the included `.figure` , `.figure-img` and `.figure-caption` classes to provide some baseline styles for the HTML5 `<figure>` and `<figcaption>` elements. Images in figures have no explicit size, so be sure to add the `.img-fluid` class to your `<img>` to make it responsive.
-->
`.figure` , `.figure-img` , `.figure-caption` クラスを使用して、
HTML5の `<figure>` , `<figcaption>` 要素にいくつかのベースラインスタイルを提供します。 
figureの画像サイズはサンプルのように `.img-fluid` クラスを `<img>` に追加して変更します。


{% capture example %}
<figure class="figure">
  <img data-src="holder.js/400x300" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
{% endcapture %}
{% include example.html content=example %}

<!-- Aligning the figure's caption is easy with our [text utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/text/#text-alignment). -->
[text utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/text/#text-alignment) を利用すると、位置の変更が簡単にできます。


{% capture example %}
<figure class="figure">
  <img data-src="holder.js/400x300" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
  <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
</figure>
{% endcapture %}
{% include example.html content=example %}

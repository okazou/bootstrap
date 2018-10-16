---
layout: docs
title: Progress
description: プログレスバーを使用するためのドキュメントと例を示します。
group: components
toc: true
---

<!-- ---
layout: docs
title: Progress
description: Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.
group: components
toc: true
--- -->

<!-- ## How it works

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

- We use the `.progress` as a wrapper to indicate the max value of the progress bar.
- We use the inner `.progress-bar` to indicate the progress so far.
- The `.progress-bar` requires an inline style, utility class, or custom CSS to set their width.
- The `.progress-bar` also requires some `role` and `aria` attributes to make it accessible.

Put that all together, and you have the following examples. -->

## How it works
[the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) は、2つのHTML要素, 幅を設定するCSS, いくつかの属性で構築されています。  

- `.progress` は最大値を示すラッパーとして使用します。
- `.progress-bar` はこれまで進捗状況を示すために使用します。
- `.progress-bar` の幅を設定するには, インラインスタイル, ユーティリティクラス, カスタムCSSが必要です。
- `.progress-bar` は `role` 属性, `aria` 属性が必要です。

下記をご覧ください。

{% capture example %}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- Bootstrap provides a handful of [utilities for setting width]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/sizing/). Depending on your needs, these may help with quickly configuring progress. -->

[utilities for setting width]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/sizing/) を提供しています。



{% capture example %}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Labels

Add labels to your progress bars by placing text within the `.progress-bar`. -->

## Labels

`.progress-bar` 内にテキストを配置して、プログレスバーにラベルを追加します。


{% capture example %}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Height

We only set a `height` value on the `.progress`, so if you change that value the inner `.progress-bar` will automatically resize accordingly. -->

## Height

`.progress` にのみ `height` の値を設定します。値を変更すると、`.progress-bar` はそれに応じて自動的にサイズが変更します。


{% capture example %}
<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Backgrounds

Use background utility classes to change the appearance of individual progress bars. -->

## Backgrounds

下記のように色を設定できます。

{% capture example %}
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Multiple bars

Include multiple progress bars in a progress component if you need. -->

## Multiple bars

プログレスバーに複数のプログレスバーを含めることができます。  


{% capture example %}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar's background color. -->

## Striped

`.progress-bar-striped` に `.progress-bar` を追加してストライプを適用できます。  


{% capture example %}
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Animated stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations. -->

## Animated stripes

CSS3アニメーションを使用して右から左にストライプをアニメーション化するには、`.progress-bar-animated` を `.progress-bar` に適用します。


<div class="bd-example">
  <div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
  </div>
  <button type="button" class="btn btn-secondary bd-toggle-animated-progress" data-toggle="button" aria-pressed="false" autocomplete="off">
    Toggle animation
  </button>
</div>

{% highlight html %}
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
{% endhighlight %}

---
layout: docs
title: 概要(Overview)
description: レイアウトのコンポーネントやオプションには, コンテナ, グリッドシステム, フレキシブルオブジェクト, レスポンシブクラス が組み込まれています。  
group: layout
redirect_from: "/docs/4.1/layout/"
toc: true
---

<!--
---
layout: docs
title: Overview
description: Components and options for laying out your Bootstrap project, including wrapping containers, a powerful grid system, a flexible media object, and responsive utility classes.
group: layout
redirect_from: "/docs/4.1/layout/"
toc: true
---
-->

## Containers
<!--
Containers are the most basic layout element in Bootstrap and are **required when using our default grid system**. Choose from a responsive, fixed-width container (meaning its `max-width` changes at each breakpoint) or fluid-width (meaning it's `100%` wide all the time).

While containers *can* be nested, most layouts do not require a nested container.
-->
コンテナは基本のレイアウトで、**グリッドシステム**を使用する場合に必要です。  
・固定幅のコンテナ(ブレークポイントで `max-width` が変わる)  
・全幅のコンテナ(常に100%の幅)  
から選択できます。
コンテナは入れ子にすることができますが、多くのレイアウトは入れ子のコンテナは必要としません。


<div class="bd-example">
  <div class="bd-example-container">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>

{% highlight html %}
<div class="container">
  <!-- Content here -->
</div>
{% endhighlight %}

<!--
Use `.container-fluid` for a full width container, spanning the entire width of the viewport.
-->
ビューポート全体に広がる全幅で利用するには, `.container-fluid` を使います。

<div class="bd-example">
  <div class="bd-example-container bd-example-container-fluid">
    <div class="bd-example-container-header"></div>
    <div class="bd-example-container-sidebar"></div>
    <div class="bd-example-container-body"></div>
  </div>
</div>

{% highlight html %}
<div class="container-fluid">
  ...
</div>
{% endhighlight %}

## Responsive breakpoints
<!--
Since Bootstrap is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.
-->
Bootstrapはモバイルファーストで開発していて, レイアウトやインターフェースのブレークポイントは [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) を使用している。  
これらのブレークポイント最小のビューポートに基づいていてビューポートの変更に合わせて要素を拡大します。  

下記のブレークポイントをSassファイルに記述しています。

{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
{% endhighlight %}
<!--
Since we write our source CSS in Sass, all our media queries are available via Sass mixins:
-->
メディアクエリはSassのmixin経由で参照できます。  

{% highlight scss %}
// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
{% endhighlight %}

<!-- We occasionally use media queries that go in the other direction (the given screen size *or smaller*): -->
私たちは時によって、他の方向に向かうメディアクエリを使用します。


{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width
{% endhighlight %}

{% include callout-info-mediaqueries-breakpoints.md %}

<!-- Once again, these media queries are also available via Sass mixins: -->
これらのメディアクエリは、Sassミックスインでも利用できます。

{% highlight scss %}
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
// No media query necessary for xl breakpoint as it has no upper bound on its width

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
{% endhighlight %}

<!-- There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths. -->

ブレークポイントの幅(最小,最大)を使用して画面サイズの1つのセグメントを対象とするメディアクエリやミックスインもあります。

{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
{% endhighlight %}

<!-- These media queries are also available via Sass mixins: -->
メディアクエリは Sass mixins でも利用可能です。

{% highlight scss %}
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
{% endhighlight %}

<!-- Similarly, media queries may span multiple breakpoint widths: -->
メディアクエリは複数のブレークポイントの幅にまたがる場合があります。

{% highlight scss %}
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
{% endhighlight %}

The Sass mixin for targeting the same screen size range would be:

{% highlight scss %}
@include media-breakpoint-between(md, xl) { ... }
{% endhighlight %}

## Z-index

<!-- Several Bootstrap components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Bootstrap that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors. There's no reason we couldn't have used `100`+ or `500`+.

We don't encourage customization of these individual values; should you change one, you likely need to change them all. -->

いくつかのBootstrapのコンポーネントでは, コンテンツを配置するための第3の軸を提供することによってレイアウトを制御するのに役立つCSSプロパティである`z-index` を利用しています。`z-index` はナビゲーション、ツールチップ、ポップオーバー、モーダルなどを適切にレイヤーするように設計されています。

これらは、任意の高めの値から始まっている。ツールチップ、ポップオーバー、ナビゲーションバー、ドロップダウン、モーダルなど階層化されたコンポーネント全体で、動作の合理的な一貫性のためこれらの標準セットが必要です。`100+` や `500+` を使用しなかった理由は特にありません。

これらの値のカスタマイズは推奨していません。1つ変えたら、すべて変更する必要があるためです。



{% highlight scss %}
$zindex-dropdown:          1000 !default;
$zindex-sticky:            1020 !default;
$zindex-fixed:             1030 !default;
$zindex-modal-backdrop:    1040 !default;
$zindex-modal:             1050 !default;
$zindex-popover:           1060 !default;
$zindex-tooltip:           1070 !default;
{% endhighlight %}

<!-- To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements. -->

コンポーネント内の重なり合う境界線（例えば、インプットグループ内のボタンやコントロール）を処理するために、デフォルト/ホバー/アクティブ状態に対しては、 `z-index` の値は `1`,`2`,`3` を使用。ホバー/フォーカス/アクティブでは、要素との境界線を表示するのに、より高い `z-index` 値を持つ特定の要素が最前になります。

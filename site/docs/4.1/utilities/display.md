---
layout: docs
title: Display property
description: コンポーネントの display の値をすばやくレスポンシブに切り替えることが可能です。  (一般的な値と印刷にも対応しています。)
group: utilities
toc: true
---
<!-- 
---
layout: docs
title: Display property
description: Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.
group: utilities
toc: true
--- 
-->

 ## How it works
<!--
Change the value of the [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) with our responsive display utility classes. We purposely support only a subset of all possible values for `display`. Classes can be combined for various effects as you need. 
-->

[`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) の値を変更することができます。  
クラスは、必要に応じてさまざまなエフェクトが組み合わせ可能です。  

## Notation
<!-- 
Display utility classes that apply to all [breakpoints]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/overview/#responsive-breakpoints), from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format: 
-->

`xs`から` xl`にはブレークポイントの省略形がありません。  これらのクラスが `min-width：0;`から適用され、メディアクエリにバインドされていないためです。 ただし、残りのブレークポイントにはブレークポイントの省略形が含まれます。  

下記の形式で指定します。

* `.d-{value}` for `xs`
* `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, and `xl`.

<!-- Where *value* is one of: -->
`value` には下記の値が入ります。

* `none`
* `inline`
* `inline-block`
* `block`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

<!-- The media queries effect screen widths with the given breakpoint *or larger*. For example, `.d-lg-none` sets `display: none;` on both `lg` and `xl` screens. -->
メディアクエリは指定したブレークポイントより大きいスクリーン幅に影響があります。  
例えば  `.d-lg-none` はlgとxlの両方に `display: none;` が適用されます。


## Examples
{% capture example %}
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>
{% endcapture %}
{% include example.html content=example %}

## Hiding elements 
<!-- 
For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size.

To hide elements simply use the `.d-none` class or one of the `.d-{sm,md,lg,xl}-none` classes for any responsive screen variation.

To show an element only on a given interval of screen sizes you can combine one `.d-*-none` class with a `.d-*-*` class, for example `.d-none .d-md-block .d-xl-none` will hide the element for all screen sizes except on medium and large devices. 
-->

mobile-friendly の開発を行うために, 要素の表示/非表示はデバイスごとに適用します。
同じサイトを違うバージョンとして作成するのではなく、スクリーンサイズによって要素の表示/非表示を行います。  
  
要素を非表示にするには、 `.d-none`, ` .d- {sm、md、lg、xl} -none` のどれかを使用してください。  
  
指定した範囲の画面サイズで要素を適用する場合は  `.d - * - none` と ` .d - * - * ` を組み合わせることができます。  
例えば、` .d-none .d-md-block .d-xl-none` は、中規模および大規模のデバイスを除くすべての画面サイズの要素を非表示にします。



| Screen Size        | Class |
| ---                | --- |
| Hidden on all      | `.d-none` |
| Hidden only on xs  | `.d-none .d-sm-block` |
| Hidden only on sm  | `.d-sm-none .d-md-block` |
| Hidden only on md  | `.d-md-none .d-lg-block` |
| Hidden only on lg  | `.d-lg-none .d-xl-block` |
| Hidden only on xl  | `.d-xl-none` |
| Visible on all     | `.d-block` |
| Visible only on xs | `.d-block .d-sm-none` |
| Visible only on sm | `.d-none .d-sm-block .d-md-none` |
| Visible only on md | `.d-none .d-md-block .d-lg-none` |
| Visible only on lg | `.d-none .d-lg-block .d-xl-none` |
| Visible only on xl | `.d-none .d-xl-block` |

{% capture example %}
<div class="d-lg-none">hide on screens wider than lg</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>
{% endcapture %}
{% include example.html content=example %}

## Display in print
<!-- 
Change the `display` value of elements when printing with our print display utility classes. Includes support for the same `display` values as our responsive `.d-*` utilities. 
-->

プリントするときは `display` を変更してください。 

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

<!-- The print and display classes can be combined. -->
表示と印刷のクラスを組み合わせることができます。

{% capture example %}
<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
{% endcapture %}
{% include example.html content=example %}

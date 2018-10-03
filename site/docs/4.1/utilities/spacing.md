---
layout: docs
title: Spacing
description: margin , padding を簡単に適用できます。
group: utilities
toc: true
---

<!-- ---
layout: docs
title: Spacing
description: Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element's appearance.
group: utilities
toc: true
--- -->

<!-- ## How it works

Assign responsive-friendly `margin` or `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `.25rem` to `3rem`. -->

## 使い方(How it works)

`margin` や `padding` を要素に簡略なクラスで適用できます。クラスは、`.25rem` から `3rem` までのデフォルトのSassマップから構築されています。

<!-- ## Notation

Spacing utilities that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`. -->

## 記法(Notation)

`xs `から `xl `までの全てのブレークポイントに適用される空白ユーティリティには、ブレークポイントの省略形がありません。  
`min-width：0` 以上から適用され、メディアクエリにバインドされていないためです。  
クラス名は、xsの場合は、`.{property}{sides}-{size}` の形式で指定し、`sm`, `md`, `lg`, `xl` の場合は、`{property}{sides}-{breakpoint}-{size}`の形式で指定します。

<!-- Where *property* is one of: -->
*property*の設定

* `m` - for classes that set `margin`
* `p` - for classes that set `padding`

<!-- Where *sides* is one of: -->
*sides*の設定


* `t` - for classes that set `margin-top` or `padding-top`
* `b` - for classes that set `margin-bottom` or `padding-bottom`
* `l` - for classes that set `margin-left` or `padding-left`
* `r` - for classes that set `margin-right` or `padding-right`
* `x` - for classes that set both `*-left` and `*-right`
* `y` - for classes that set both `*-top` and `*-bottom`
* blank - for classes that set a `margin` or `padding` on all 4 sides of the element

<!-- Where *size* is one of: -->
*size*の設定

* `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
* `1` - (by default) for classes that set the `margin` or `padding` to `$spacer * .25`
* `2` - (by default) for classes that set the `margin` or `padding` to `$spacer * .5`
* `3` - (by default) for classes that set the `margin` or `padding` to `$spacer`
* `4` - (by default) for classes that set the `margin` or `padding` to `$spacer * 1.5`
* `5` - (by default) for classes that set the `margin` or `padding` to `$spacer * 3`
* `auto` - for classes that set the `margin` to auto

<!-- (You can add more sizes by adding entries to the `$spacers` Sass map variable.) -->
`$spacer` の基準値は1rem=16px。`$spacers` Sassマップ変数にエントリを追加することで、さらにサイズの追加が可能です。

<!-- ## Examples

Here are some representative examples of these classes: -->

## 例(Examples)
代表的な例を下記に表示します。  


{% highlight scss %}
.mt-0 {
  margin-top: 0 !important;
}

.ml-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
{% endhighlight %}

<!-- ### Horizontal centering

Additionally, Bootstrap also includes an `.mx-auto` class for horizontally centering fixed-width block level content—that is, content that has `display: block` and a `width` set—by setting the horizontal margins to `auto`. -->

### 中央揃え(Horizontal centering)

固定幅のブロックレベルのコンテンツを水平にセンタリングするための  `.mx-auto` があります。　　

<div class="bd-example">
  <div class="mx-auto" style="width: 200px; background-color: rgba(86,61,124,.15);">
    Centered element
  </div>
</div>

{% highlight html %}
<div class="mx-auto" style="width: 200px;">
  Centered element
</div>
{% endhighlight %}

<!-- ### Negative margin

In CSS, `margin` properties can utilize negative values (`padding` cannot). As of 4.2, we've added negative margin utilities for every non-zero integer size listed above (e.g., `1`, `2`, `3`, `4`, `5`). These utilities are ideal for customizing grid column gutters across breakpoints.

The syntax is nearly the same as the default, positive margin utilities, but with the addition of `n` before the requested size. Here's an example class that's the opposite of `.mt-1`: -->

### Negative margin

CSSでは、`margin` プロパティはマイナスの値が利用可能です。(padding ではできません）  
下記に例を示します。

{% highlight scss %}
.mt-n1 {
  margin-top: -0.25rem !important;
}
{% endhighlight %}

<!-- Here's an example of customizing the Bootstrap grid at the medium (`md`) breakpoint and above. We've increased the `.col` padding with `.px-md-5` and then counteracted that with `.mx-md-n5` on the parent `.row`. -->

下記は `md` のブレークポイント以上にカスタマイズする例です。
`.col `のパディングを `.px-md-5` で増やし、親要素 .row の `.mx-md-n5` でそれを打ち消します。


{% capture example %}
<div class="row mx-md-n5">
  <div class="col py-3 px-md-5 border bg-light">Custom column padding</div>
  <div class="col py-3 px-md-5 border bg-light">Custom column padding</div>
</div>
{% endcapture %}
{% include example.html content=example %}

---
layout: docs
title: Flex
description: Flexを使うと,配置などのレイアウトを簡単に行えます。 複雑な実装はカスタムCSSが必要です。
group: utilities
toc: true
---
<!-- ---
layout: docs
title: Flex
description: Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
group: utilities
toc: true
--- -->

<!-- ## Enable flex behaviors

Apply `display` utilities to create a flexbox container and transform **direct children elements** into flex items. Flex containers and items are able to be modified further with additional flex properties. -->

## Flexの動作を有効にする(Enable flex behaviors)
`display` を適用して, Flexコンテナを作成し, 子要素をFlexアイテムに変換できます。  



{% capture example %}
<div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container!</div>
{% endcapture %}
{% include example.html content=example %}

<!-- Responsive variations also exist for `.d-flex` and `.d-inline-flex`. -->
`.d-flex` と `.d-inline-flex` でレスポンシブにもできます。


{% for bp in site.data.breakpoints %}
- `.d{{ bp.abbr }}-flex`
- `.d{{ bp.abbr }}-inline-flex`{% endfor %}

<!-- ## Direction

Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is `row`. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).

Use `.flex-row` to set a horizontal direction (the browser default), or `.flex-row-reverse` to start the horizontal direction from the opposite side. -->

## 方向(Direction)

`direction` を使用して, コンテナのFlexアイテムの方向を設定できます。  
ほとんどの場合、ブラウザのデフォルトが `row` なので, 左から横並びのクラスは省略可能です。  
- `.flex-row`  : 左から横並び
- `.flex-row-reverse` :  右から横並び 


{% capture example %}
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse bd-highlight">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- Use `.flex-column` to set a vertical direction, or `.flex-column-reverse`  to start the vertical direction from the opposite side. -->

縦並びの設定では
- `.flex-column` : 上から縦並び
- `.flex-column-reverse` : 下から縦並び


{% capture example %}
<div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse bd-highlight">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- Responsive variations also exist for `flex-direction`. -->
レスポンシブな設定では `flex-direction` を使用します。

{% for bp in site.data.breakpoints %}
- `.flex{{ bp.abbr }}-row`
- `.flex{{ bp.abbr }}-row-reverse`
- `.flex{{ bp.abbr }}-column`
- `.flex{{ bp.abbr }}-column-reverse`{% endfor %}

<!-- ## Justify content

Use `justify-content` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if `flex-direction: column`). Choose from `start` (browser default), `end`, `center`, `between`, or `around`. -->

## Justify content
`justify-content` では下記を使用できます。(`flex-direction: column` を適用するとy軸になります。)
`start` , `end`, `center`, `between`, `around`  を使用できます。

<div class="bd-example">
  <div class="d-flex justify-content-start bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-end bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-center bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-between bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex justify-content-around bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>
{% endhighlight %}

<!-- Responsive variations also exist for `justify-content`. -->
`justify-content` はレスポンシブにも対応しています。  


{% for bp in site.data.breakpoints %}
- `.justify-content{{ bp.abbr }}-start`
- `.justify-content{{ bp.abbr }}-end`
- `.justify-content{{ bp.abbr }}-center`
- `.justify-content{{ bp.abbr }}-between`
- `.justify-content{{ bp.abbr }}-around`{% endfor %}

<!-- ## Align items

Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from `start`, `end`, `center`, `baseline`, or `stretch` (browser default). -->

## アイテムの整列(Align items)
`align-items` を使用してFlexアイテムの配置を変更できます。
`start`, `end`, `center`, `baseline`, `stretch` を使用できます。

<div class="bd-example">
  <div class="d-flex align-items-start bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-end bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-center bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-baseline bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex align-items-stretch bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-end">...</div>
<div class="d-flex align-items-center">...</div>
<div class="d-flex align-items-baseline">...</div>
<div class="d-flex align-items-stretch">...</div>
{% endhighlight %}

<!-- Responsive variations also exist for `align-items`. -->
`align-items` はレスポンシブにも対応しています。  

{% for bp in site.data.breakpoints %}
- `.align-items{{ bp.abbr }}-start`
- `.align-items{{ bp.abbr }}-end`
- `.align-items{{ bp.abbr }}-center`
- `.align-items{{ bp.abbr }}-baseline`
- `.align-items{{ bp.abbr }}-stretch`{% endfor %}

<!-- ## Align self

Use `align-self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from the same options as `align-items`: `start`, `end`, `center`, `baseline`, or `stretch` (browser default). -->

## 特定アイテムの整列(Align self)

`align-self` を適用して特定のアイテムの配置を変更できます。  
`start`, `end`, `center`, `baseline`, `stretch` を使用できます。  

<div class="bd-example">
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-start p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-end p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-center p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-baseline p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
  <div class="d-flex bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="align-self-stretch p-2 bd-highlight">Aligned flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="align-self-start">Aligned flex item</div>
<div class="align-self-end">Aligned flex item</div>
<div class="align-self-center">Aligned flex item</div>
<div class="align-self-baseline">Aligned flex item</div>
<div class="align-self-stretch">Aligned flex item</div>
{% endhighlight %}

Responsive variations also exist for `align-self`.
`align-self` はレスポンシブにも対応しています。

{% for bp in site.data.breakpoints %}
- `.align-self{{ bp.abbr }}-start`
- `.align-self{{ bp.abbr }}-end`
- `.align-self{{ bp.abbr }}-center`
- `.align-self{{ bp.abbr }}-baseline`
- `.align-self{{ bp.abbr }}-stretch`{% endfor %}

<!-- ## Fill

Use the `.flex-fill` class on a series of sibling elements to force them into equal widths while taking up all available horizontal space. [Especially useful for equal-width, or justified, navigation.]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/navs/#working-with-flex-utilities) -->

## Fill

`.flex-fill` (flex: 1 1 auto)を使用して、水平スペースを占有しながら、同じ幅に強制できます。等幅、または均等幅のナビゲーションで特に便利です。


{% capture example %}
<div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight">Flex item</div>
  <div class="p-2 flex-fill bd-highlight">Flex item</div>
  <div class="p-2 flex-fill bd-highlight">Flex item</div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- Responsive variations also exist for `flex-fill`. -->
`flex-fill` はレスポンシブにも対応しています。  

{% for bp in site.data.breakpoints %}
- `.flex{{ bp.abbr }}-fill`{% endfor %}

<!-- ## Grow and shrink

Use `.flex-grow-*` utilities to toggle a flex item's ability to grow to fill available space. In the example below, the `.flex-grow-1` elements uses all available space it can, while allowing the remaining two flex items their necessary space. -->

## 伸縮(Grow and shrink)
`.flex-grow-*` を適用するとアイテムの伸縮を設定できます。  
以下の例の `.flex-grow-1`（flex-grow: 1）は使用可能なすべてのスペースを使用し、残りの2つのFlex要素は必要最小限のスペースを使用します。

{% capture example %}
<div class="d-flex bd-highlight">
  <div class="p-2 flex-grow-1 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Third flex item</div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- Use `.flex-shrink-*` utilities to toggle a flex item's ability to shrink if necessary. In the example below, the second flex item with `.flex-shrink-1` is forced to wrap it's contents to a new line, "shrinking" to allow more space for the previous flex item with `.w-100`. -->
`.flex-shrink-*` を適用するとFlexアイテムの縮小できます。
下記の例を参考にしてください。

{% capture example %}
<div class="d-flex bd-highlight">
  <div class="p-2 w-100 bd-highlight">Flex item</div>
  <div class="p-2 flex-shrink-1 bd-highlight">Flex item</div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- Responsive variations also exist for `flex-grow` and `flex-shrink`. -->
 `flex-grow` と `flex-shrink` はレスポンシブに対応しています。

{% for bp in site.data.breakpoints %}
- `.flex{{ bp.abbr }}-{grow|shrink}-0`
- `.flex{{ bp.abbr }}-{grow|shrink}-1`{% endfor %}

<!-- ## Auto margins

Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (`.mr-auto`), and pushing two items to the left (`.ml-auto`).
ems whose parent has a non-default `justify-content` value.** [See this StackOverflow answer](https://stackoverflow.com/a/37535548)
**Unfortunately, IE10 and IE11 do not properly support auto margins on flex it for more details. -->

## 自動マージン（Auto margins）

自動マージンでFlexアイテムを制御する3つの例を以下に示します。  
(IE10 , IE11 では `justify-content` の値を持つFlexアイテムの自動マージンをサポートしていません。 詳細は [See this StackOverflow answer](https://stackoverflow.com/a/37535548) )

{% capture example %}
<div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>

<div class="d-flex bd-highlight mb-3">
  <div class="mr-auto p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>

<div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="ml-auto p-2 bd-highlight">Flex item</div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### With align-items

Vertically move one flex item to the top or bottom of a container by mixing `align-items`, `flex-direction: column`, and `margin-top: auto` or `margin-bottom: auto`. -->

### With align-items

<!-- Vertically move one flex item to the top or bottom of a container by mixing `align-items`, `flex-direction: column`, and `margin-top: auto` or `margin-bottom: auto`. --> -->
`align-items`, `flex-direction：column` と合わせて `margin-top：auto` や `margin-bottom：auto` を組み合わせるとFlexアイテムをコンテナの垂直方向に移動できます。


{% capture example %}
<div class="d-flex align-items-start flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="mb-auto p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>

<div class="d-flex align-items-end flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="mt-auto p-2 bd-highlight">Flex item</div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `.flex-nowrap`, wrapping with `.flex-wrap`, or reverse wrapping with `.flex-wrap-reverse`. -->

## Wrap

コンテナ内でどのように折り返すかを変更できます。
- `.flex-nowrap` : 折り返しなし  
- `.flex-wrap` : 折り返しあり
- `.flex-wrap-reverse` : 逆方向に折り返し

<div class="bd-example">
  <div class="d-flex flex-nowrap bd-highlight" style="width: 8rem;">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex flex-nowrap">
  ...
</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex flex-wrap bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex flex-wrap">
  ...
</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex flex-wrap-reverse bd-highlight">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex flex-wrap-reverse">
  ...
</div>
{% endhighlight %}


<!-- Responsive variations also exist for `flex-wrap`. -->
`flex-wrap` はレスポンシブにも対応しています。


{% for bp in site.data.breakpoints %}
- `.flex{{ bp.abbr }}-nowrap`
- `.flex{{ bp.abbr }}-wrap`
- `.flex{{ bp.abbr }}-wrap-reverse`{% endfor %}

<!-- ## Order

Change the _visual_ order of specific flex items with a handful of `order` utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As `order` takes any integer value (e.g., `5`), add custom CSS for any additional values needed. -->

## Order
`order` を使用して特定のFlexアイテムの表示順を変更できます。

{% capture example %}
<div class="d-flex flex-nowrap bd-highlight">
  <div class="order-3 p-2 bd-highlight">First flex item</div>
  <div class="order-2 p-2 bd-highlight">Second flex item</div>
  <div class="order-1 p-2 bd-highlight">Third flex item</div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- Responsive variations also exist for `order`. -->
`order` はレスポンシブにも対応しています。

{% for bp in site.data.breakpoints %}{% for i in (0..12) %}
- `.order{{ bp.abbr }}-{{ i }}`{% endfor %}{% endfor %}

<!-- ## Align content

Use `align-content` utilities on flexbox containers to align flex items *together* on the cross axis. Choose from `start` (browser default), `end`, `center`, `between`, `around`, or `stretch`. To demonstrate these utilities, we've enforced `flex-wrap: wrap` and increased the number of flex items.

**Heads up!** This property has no effect on single rows of flex items. -->

## Align content
`align-content` をアイテムを整列させることができます。
`start`, `end`, `center`, `between`, `around`, `stretch` から選択できます。 


<div class="bd-example">
  <div class="d-flex align-content-start flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex align-content-start flex-wrap">
  ...
</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-end flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex align-content-end flex-wrap">...</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-center flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex align-content-center flex-wrap">...</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-between flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex align-content-between flex-wrap">...</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-around flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex align-content-around flex-wrap">...</div>
{% endhighlight %}

<div class="bd-example">
  <div class="d-flex align-content-stretch flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>
</div>

{% highlight html %}
<div class="d-flex align-content-stretch flex-wrap">...</div>
{% endhighlight %}

<!-- Responsive variations also exist for `align-content`. -->
`align-content` はレスポンシブにも対応しています。

{% for bp in site.data.breakpoints %}
- `.align-content{{ bp.abbr }}-start`
- `.align-content{{ bp.abbr }}-end`
- `.align-content{{ bp.abbr }}-center`
- `.align-content{{ bp.abbr }}-around`
- `.align-content{{ bp.abbr }}-stretch`{% endfor %}

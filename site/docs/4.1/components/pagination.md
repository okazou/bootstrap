---
layout: docs
title: Pagination
description: ページネーションについてのドキュメントと例です。
group: components
toc: true
---
<!-- ---
layout: docs
title: Pagination
description: Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.
group: components
toc: true
--- -->

<!-- ## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`. -->

## Overview

件数が多く、画面の多くの領域を締める場合はページネーションを活用できます。
ページネーションはリストのHTML要素で構成され,スクリーンリーダーは利用可能なリンクの数を知らせることが可能です。
`<nav>` 要素を使用して、それをリーダーやその他の支援技術を絞り込むためのナビゲーションセクションとして識別します。    

ページにはこのようなナビゲーションセクションが複数存在する可能性があるので, その目的を反映するため `<nav>` に `aria-label` を付けることを推奨します。
例えば, ページネーションを使用して一連の検索結果の間を移動する場合、適切なラベルは `aria-label="検索結果ページ"` となります。


{% capture example %}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Working with icons

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes and the `.sr-only` utility. -->

## Working with icons
ページネーションリンクのテキストの代わりにアイコンやシンボルを使用したい場合は,
`aria` 属性と `.sr-only` ユーティリティを使用してスクリーンリーダーを適切にサポートするようにしてください。

{% capture example %}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Disabled and active states

Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to _try_ to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality. -->

## Disabled and active states
ページリンクは、さまざまな状況に合わせてカスタマイズできます。 
`.disabled` でクリックできないようにしたり, 現在のページを示すために `.active` 使用します。    

`.disabled` は `pointer-events: none` を使用して `<a>` のリンクを無効にしようとしますが, そのCSSプロパティはまだ標準化されておらず、キーボード操作を考慮していません。無効なリンクには常に `tabindex="-1"` を追加して, カスタムJavaScriptを使用して機能を完全に無効にする必要があります。  


{% capture example %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles. -->

オプション `<span>` で 前/次)の矢印の場合に,アンカーを有効または無効にしたり、アンカーを省略してクリック機能を削除したり,意図したスタイルを保持しながらキーボードのフォーカスを妨げたりすることができます。

{% capture example %}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Sizing

Fancy larger or smaller pagination? Add `.pagination-lg` or `.pagination-sm` for additional sizes. -->

## Sizing
`.pagination-lg` や `.pagination-sm` でサイズの変更が可能です。

{% capture example %}
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Alignment

Change the alignment of pagination components with [flexbox utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/). -->

## Alignment

[flexbox utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) を利用して配置を変更できます。



{% capture example %}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

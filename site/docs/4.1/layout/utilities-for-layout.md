---
layout: docs
title: Utilities for layout
description: モバイルフレンドリーでレスポンシブな開発のために、コンテンツの表示、非表示、整列、余白などのユーティリティクラスが組み込まれています。
group: layout
toc: true
---
<!-- ---
layout: docs
title: Utilities for layout
description: For faster mobile-friendly and responsive development, Bootstrap includes dozens of utility classes for showing, hiding, aligning, and spacing content.
group: layout
toc: true
--- -->

## Changing `display`
<!-- 
Use our [display utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/) for responsively toggling common values of the `display` property. Mix it with our grid system, content, or components to show or hide them across specific viewports. 
-->
レスポンシブに `display` を切り替えるには [display utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/) を使用します。 グリッドシステム、コンテンツ、コンポーネントを組み合わせて、特定のビューポートで表示や非表示にすることができます。

## Flexbox options
<!-- 
Bootstrap 4 is built with flexbox, but not every element's `display` has been changed to `display: flex` as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of [our components]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/alerts/) are built with flexbox enabled.

Should you need to add `display: flex` to an element, do so with `.d-flex` or one of the responsive variants (e.g., `.d-sm-flex`). You'll need this class or `display` value to allow the use of our extra [flexbox utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) for sizing, alignment, spacing, and more. 
-->
Bootstrap4はFlexboxで構築されています。不必要な上書きを多く追加し、予期せぬブラウザの動作変更をさけるため、すべての要素の `display` が `display: flex` に変更されているわけではありません。[our components]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/alerts/) のほとんどは、Flexbox対応で構築されています。

`display: flex` を要素に追加する場合は、`.d-flex` や `responsive variants`のいずれか（例：`.d-sm-flex` ）を使用します。
クラスや `display` の値は、サイズ、配置、余白などのFlexユーティリティを使用できるようにするために必要です。

## Margin and padding
<!-- 
Use the `margin` and `padding` [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) to control how elements and components are spaced and sized. Bootstrap 4 includes a five-level scale for spacing utilities, based on a `1rem` value default `$spacer` variable. Choose values for all viewports (e.g., `.mr-3` for `margin-right: 1rem`), or pick responsive variants to target specific viewports (e.g., `.mr-md-3` for `margin-right: 1rem` starting at the `md` breakpoint). 
-->
`margin` と `padding` は [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) を使用して要素とコンポーネントの間隔とサイズを調整できます。Bootstrap4には、`1rem` のデフォルトの `$spacer` 変数で空白ユーティリティに5レベルのスケールが組み込まれています。vieportの値（ `margin-right：1rem` の場合は `.mr-3` など）を選択するか、特定のビューポートをターゲットにするように `responsive variants` を選択します。（例： `md` ブレークポイントから始まる `margin-right：1rem` の場合は `.mr-md-3` ）

## Toggle `visibility`
<!-- 
When toggling `display` isn't needed, you can toggle the `visibility` of an element with our [visibility utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/visibility/). Invisible elements will still affect the layout of the page, but are visually hidden from visitors. 
-->

`display` を切り替える必要がない場合は [visibility utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/visibility/) で要素の可視性を切り替えることができます。目に見えない要素はページのレイアウトに影響があるが視覚的には訪問者には表示されません。

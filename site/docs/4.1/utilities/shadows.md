---
layout: docs
title: Shadows
description: box-shadow を適用すると要素に影をつけることができます。
group: utilities
toc: false
---
<!-- ---
layout: docs
title: Shadows
description: Add or remove shadows to elements with box-shadow utilities.
group: utilities
toc: false
--- -->

<!-- ## Examples

While shadows on components are disabled by default in Bootstrap and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match). -->

## 例(Examples)

コンポーネントの影はデフォルトでは無効になっています。( `$enable-shadows` で有功にすることもできます。)  
`box-shadow` を使うと影の追加や削除ができます。 例のように `shadow-none` では影を削除します。 


{% capture example %}
<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>
{% endcapture %}
{% include example.html content=example %}

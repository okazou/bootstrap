---
layout: docs
title: Visibility
description: 要素の表示を変更せずに可視性を制御できます。
group: utilities
---
<!-- ---
layout: docs
title: Visibility
description: Control the visibility, without modifying the display, of elements with visibility utilities.
group: utilities
--- -->


<!-- Set the `visibility` of elements with our visibility utilities. These utility classes do not modify the `display` value at all and do not affect layout – `.invisible` elements still take up space in the page. Content will be hidden both visually and for assistive technology/screen reader users.

Apply `.visible` or `.invisible` as needed. -->

要素の `visibility` を設定します。これらのユーティリティクラスは、 `display` の値を全く変更せず、レイアウトに影響を与えません。  
`.invisible` 要素はページ内にスペースを残します。コンテンツは、視覚的にもスクリーンリーダーのユーザーにも表示しません。
必要に応じて `.visible` または `.invisible` を適用します。


{% highlight html %}
<div class="visible">...</div>
<div class="invisible">...</div>
{% endhighlight %}

{% highlight scss %}
// Class
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}

// Usage as a mixin
.element {
  @include invisible(visible);
}
.element {
  @include invisible(hidden);
}
{% endhighlight %}

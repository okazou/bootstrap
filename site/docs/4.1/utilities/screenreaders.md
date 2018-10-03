---
layout: docs
title: Screenreaders
description: スクリーンリーダーを除くすべてのデバイスの要素を非表示にします。
group: utilities
toc: true
---

<!-- ---
layout: docs
title: Screenreaders
description: Use screenreader utilities to hide elements on all devices except screen readers.
group: utilities
toc: true
--- -->

<!-- Hide an element to all devices **except screen readers** with `.sr-only`. Combine `.sr-only` with `.sr-only-focusable` to show the element again when it's focused (e.g. by a keyboard-only user). Can also be used as mixins. -->

`.sr-only` でスクリーンリーダーを除くすべてのデバイスで要素を非表示できます。`.sr-only` と `.sr-only-focusable` を組み合わせると、要素がフォーカスされているときに再表示します（例：キーボードのみのユーザーなど）。mixinとしても使用可能です。 

{%- comment -%}
Necessary for following [accessibility best practices]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/#accessibility).
{%- endcomment -%}

{% capture example %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{% endcapture %}
{% include example.html content=example %}

{% highlight scss %}
// Usage as a mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}

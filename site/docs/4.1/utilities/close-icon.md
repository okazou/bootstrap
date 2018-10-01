---
layout: docs
title: Close icon
description: モーダルやアラートなどのコンテントの閉じるボタンに活用できます。
group: utilities
toc: true
---
<!-- ---
layout: docs
title: Close icon
description: Use a generic close icon for dismissing content like modals and alerts.
group: utilities
toc: true
--- -->

<!-- **Be sure to include text for screen readers**, as we've done with `aria-label`. -->
スクリーンリーダーのために `aria-label` を追加しましょう。

{% capture example %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endcapture %}
{% include example.html content=example %}

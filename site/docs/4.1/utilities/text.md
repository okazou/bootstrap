---
layout: docs
title: Text
description: 文字を簡単に配置できます。
group: utilities
toc: true
---
<!-- 
---
layout: docs
title: Text
description: Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.
group: utilities
toc: true
--- 
-->

## Text alignment
<!-- 
Easily realign text to components with text alignment classes. 
-->
`alignment` で簡単にテキストを配置できます。


{% capture example %}
<p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
{% endcapture %}
{% include example.html content=example %}

<!-- For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system. -->
左揃え、右揃え、中央揃えの場合は、グリッドシステムと同じブレークポイントを使用するレスポンシブクラスが使用可能です。  

{% capture example %}
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
{% endcapture %}
{% include example.html content=example %}

## Text wrapping and overflow
<!-- 
Prevent text from wrapping with a `.text-nowrap` class. 
-->
`.text-nowrap` クラスで、テキストが折り返されないようにできます。


{% capture example %}
<div class="text-nowrap bd-highlight" style="width: 8rem;">
  This text should overflow the parent.
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.** -->
長いコンテンツの場合は、`.text-truncate` を追加してテキストを省略する事が可能です。`display: inline-block` または `display: block` が必要です。  

{% capture example %}
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Praeterea iter est quasdam res quas ex communi.
</span>
{% endcapture %}
{% include example.html content=example %}


## Text transform
<!-- 
Transform text in components with text capitalization classes. 
-->
文字の大文字や小文字の変換ができます。


{% capture example %}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{% endcapture %}
{% include example.html content=example %}

<!-- 
Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected. 
-->
`.text-capitalize` が各単語の最初の文字だけをどのように変更するかに注意が必要です。


## Font weight and italics
<!-- 
Quickly change the weight (boldness) of text or italicize text. 
-->
太さ（太字）やテキストをイタリック体に変更できます。  

{% capture example %}
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-light">Light weight text.</p>
<p class="font-italic">Italic text.</p>
{% endcapture %}
{% include example.html content=example %}

## Monospace
<!-- 
Change a selection to our monospace font stack with `.text-monospace`. 
-->
`.text-monospace` を使って等幅フォントスタックが選択可能です.

{% capture example %}
<p class="text-monospace">This is in monospace</p>
{% endcapture %}
{% include example.html content=example %}

## Reset color

<!-- Reset a text or link's color with `.text-reset`, so that it inherits the color from its parent. -->
`.text-reset` を適用するとテキストやリンクの色をリセットする事ができます。

{% capture example %}
<p class="text-muted">
  Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
{% endcapture %}
{% include example.html content=example %}

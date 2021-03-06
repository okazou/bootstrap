---
layout: docs
title: Code
description: インラインコード, マルチラインブロックの表示例です。
group: content
toc: true
---

<!--
---
layout: docs
title: Code
description: Documentation and examples for displaying inline and multiline blocks of code with Bootstrap.
group: content
toc: true
---
-->

## Inline code
<!--Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.-->
インラインスニペットは `<code>` で囲みます。`<code>` の中でHTMLを表現するときはサンプルのようにエスケープが必要です。

{% capture example %}
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
{% endcapture %}
{% include example.html content=example %}

## Code blocks
<!--
Use `<pre>`s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering. You may optionally add the `.pre-scrollable` class, which will set a max-height of 340px and provide a y-axis scrollbar.
-->
複数行のコードには `<pre>` を使用します。
`.pre-scrollable` クラスを使用して max-height : 340px のスクロールバーを利用することができます。

{% capture example %}
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
{% endcapture %}
{% include example.html content=example %}

## Variables

<!-- For indicating variables use the `<var>` tag. -->
変数を表示するには `<var>`タグを使います。

{% capture example %}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{% endcapture %}
{% include example.html content=example %}

## User input

<!--Use the `<kbd>` to indicate input that is typically entered via keyboard.-->
キーボードを表現するには `<kbd>` タグを使います。

{% capture example %}
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endcapture %}
{% include example.html content=example %}

## Sample output
<!-- For indicating sample output from a program use the `<samp>` tag. -->
codeのSampleを表示するには `<samp>` タグを使います。


{% capture example %}
<samp>This text is meant to be treated as sample output from a computer program.</samp>
{% endcapture %}
{% include example.html content=example %}

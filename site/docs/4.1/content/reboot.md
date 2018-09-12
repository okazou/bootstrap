---
layout: docs
title: Reboot
description: Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.
group: content
redirect_from: "/docs/4.1/content/"
toc: true
---
<!-- 
## Approach 
Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.

Here are our guidelines and reasons for choosing what to override in Reboot:

- Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
- Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
- For easier scaling across device sizes, block elements should use `rem`s for `margin`s.
- Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.
-->

## アプローチ(Approach)

Reboot は Normalize に基づいて構築されていて、多くのセレクタを提供しています。スタイルが必要なときはクラスに追加します。  
例えば `<table>` 要素はシンプルな作りになっていて、スタイルを適用したいときは `.table` , `.table-bordered` などが用意されています。  

Rebootを適用するガイドラインがあります。  
- スケーラブルなコンポーネントの間隔をのために、 `em` の代わりに `rem` を使用してください。  
- `margin-top` は避けてください。垂直方向のマージンが壊れ、予期しない結果が生じる可能性があります。  重要なのは単一の方向性がmarginより単純なメンタルモデルであることです。  
- デバイスサイズ全体のスケーリングを容易にするために、ブロック要素は `rem` に対して `margin` を使用する必要があります。  
- できるだけスタイルを継承して、fontや関連するプロパティの宣言を最小限に抑えてください。  

<!--
## Page defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

- The `box-sizing` is globally set on every element—including `*::before` and `*::after`, to `border-box`. This ensures that the declared width of element is never exceeded due to padding or border.
  - No base `font-size` is declared on the `<html>`, but `16px` is assumed (the browser default). `font-size: 1rem` is applied on the `<body>` for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach.
- The `<body>` also sets a global `font-family`, `line-height`, and `text-align`. This is inherited later by some form elements to prevent font inconsistencies.
- For safety, the `<body>` has a declared `background-color`, defaulting to `#fff`.
-->

## デフォルトページ(Page defaults)

`<html>` , `<body>` 要素は、ページ全体のベースがより良くなるように適用されます。  

- `box-sizing` は `*::before` , `*::after` を含むすべての要素に `border-box` を設定するので、要素で宣言した幅がpaddingやborderの幅を超えません。  
  -  `font-size` は `<html>` で宣言されないが、 16px（ブラウザのデフォルト）と想定される。   `<body>` に `font-size: 1rem` が適用され、 アクセスしやすいアプローチを保証しながら、メディアクエリによる簡単なレスポンシブの拡大縮小が可能。  
- `<body>` には  `font-family` , `line-height`, `text-align` が設定されており、フォントの不一致を防止するために、いくつかのフォーム要素によって継承される。  
- `<body>` は、デフォルトの背景色として `background-color` に `#fff` が設定されています。  

<!--
## Native font stack

The default web fonts (Helvetica Neue, Helvetica, and Arial) have been dropped in Bootstrap 4 and replaced with a "native font stack" for optimum text rendering on every device and OS. Read more about [native font stacks in this *Smashing Magazine* article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).
-->

## ネイティブ スタック(Native font stack)

デフォルトのWebフォント（Helvetica Neue, Helvetica, Arial）はBootstrap4で廃止されました。  
デバイスとOSで最適なテキストのレンダリングを行うために"ネイティブ・フォントスタック"になりました。  
[native font stacks in this *Smashing Magazine* article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).


{% highlight sass %}
$font-family-sans-serif:
  // Safari for OS X and iOS (San Francisco)
  -apple-system,
  // Chrome < 56 for OS X (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  "Roboto",
  // Basic web fallback
  "Helvetica Neue", Arial, sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !default;
{% endhighlight %}

<!--
This `font-family` is applied to the `<body>` and automatically inherited globally throughout Bootstrap. To switch the global `font-family`, update `$font-family-base` and recompile Bootstrap.
-->
この `font-family` は <body> に適用されると、自動的に全体に継承されます。 基本の `font-family` を切り替えるには、   `$font-family-base` を変更して、コンパイルします。  

<!--
## Headings and paragraphs

All heading elements—e.g., `<h1>`—and `<p>` are reset to have their `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.
-->
## 見出しと段落について(Headings and paragraphs)

見出し（例： `<h1>` ）と段落 `<p>` では、`margin-top` がリセットされ、  
見出しでは `margin-bottom: .5rem` , 段落では `margin-bottom: 1rem` が適用されます。  

<table>
  <thead>
    <tr>
      <th>Heading</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{ "`<h1></h1>`" | markdownify }}
      </td>
      <td><span class="h1">h1. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h2></h2>`" | markdownify }}
      </td>
      <td><span class="h2">h2. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h3></h3>`" | markdownify }}
      </td>
      <td><span class="h3">h3. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h4></h4>`" | markdownify }}
      </td>
      <td><span class="h4">h4. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h5></h5>`" | markdownify }}
      </td>
      <td><span class="h5">h5. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{ "`<h6></h6>`" | markdownify }}
      </td>
      <td><span class="h6">h6. Bootstrap heading</span></td>
    </tr>
  </tbody>
</table>

<!--
## Lists

All lists—`<ul>`, `<ol>`, and `<dl>`—have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`.
-->

## リスト(Lists)
`<ul>` , `<ol>` , `<dl>` は `margin-top` がリセットされ、  
`margin-bottom: 1rem` が適用され、リストが入れ子になっている場合は、`margin-bottom` はリセットされます。  

<div class="bd-example">
{% capture markdown %}
* Lorem ipsum dolor sit amet
* Consectetur adipiscing elit
* Integer molestie lorem at massa
* Facilisis in pretium nisl aliquet
* Nulla volutpat aliquam velit
  * Phasellus iaculis neque
  * Purus sodales ultricies
  * Vestibulum laoreet porttitor sem
  * Ac tristique libero volutpat at
* Faucibus porta lacus fringilla vel
* Aenean sit amet erat nunc
* Eget porttitor lorem

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem
{% endcapture %}
{{ markdown | markdownify }}
</div>

<!--
For simpler styling, clear hierarchy, and better spacing, description lists have updated `margin`s. `<dd>`s reset `margin-left` to `0` and add `margin-bottom: .5rem`. `<dt>`s are **bolded**.
-->
シンプルなスタイル , わかりやすい階層 , 空白の改善のためにデスクリプションリストでは `margin` が更新されます。  
`<dd>` では `margin-left` が `0` にリセットされ、`margin-bottom: .5rem` が適用されます。 `<dt>` は **bolded** が適用されます。  

<div class="bd-example">
  <dl>
    <dt>Description lists</dt>
    <dd>A description list is perfect for defining terms.</dd>
    <dt>Euismod</dt>
    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.</dd>
    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
    <dt>Malesuada porta</dt>
    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  </dl>
</div>

<!--
## Preformatted text

The `<pre>` element is reset to remove its `margin-top` and use `rem` units for its `margin-bottom`.
-->

## フォーマットされたテキスト(Preformatted text)
`<pre>` 要素は `margin-top` がリセットされ、`margin-bottom` は `rem` 単位になります。  

<div class="bd-example">
<pre>
.example-element {
  margin-bottom: 1rem;
}
</pre>
</div>

<!--
## Tables

Tables are slightly adjusted to style `<caption>`s, collapse borders, and ensure consistent `text-align` throughout. Additional changes for borders, padding, and more come with [the `.table` class]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/tables/).
-->
## テーブル(Tables)
テーブルは、`<caption>` , 罫線 , `text-align` の確保のためにスタイルが調整されます。  
border、paddingを変更したい場合は [the `.table` class]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/tables/).


<div class="bd-example">
  <table>
    <caption>
      This is an example table, and this is its caption to describe the contents.
    </caption>
    <thead>
      <tr>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </table>
</div>

<!--
## Forms

Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:

- `<fieldset>`s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.
- `<legend>`s, like fieldsets, have also been restyled to be displayed as a heading of sorts.
- `<label>`s are set to `display: inline-block` to allow `margin` to be applied.
- `<input>`s, `<select>`s, `<textarea>`s, and `<button>`s are mostly addressed by Normalize, but Reboot removes their `margin` and sets `line-height: inherit`, too.
- `<textarea>`s are modified to only be resizable vertically as horizontal resizing often "breaks" page layout.

These changes, and more, are demonstrated below.
-->
## フォーム(Forms)

フォームもシンプルなスタイルに変更されています。

- `<fieldset>` の borders, padding, margin は適用されていません。  
- `<label>` は `display: inline-block` で設定され、`margin`が適用されています。  
- `<input>` , `<select>` , `<textarea>` , `<button>` は `margin` がリセットされて `line-height: inherit` が適用されます。  
- `<textarea>` は 垂直方向のサイズを変更できるように更新されています。  

デモは下記を参照できます。

<form class="bd-example">
  <fieldset>
    <legend>Example legend</legend>

    <p>
      <label for="input">Example input</label>
      <input type="text" id="input" placeholder="Example input">
    </p>

    <p>
      <label for="select">Example select</label>
      <select id="select">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>

    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>

    <p>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </p>

    <p>
      <label for="textarea">Example textarea</label>
      <textarea id="textarea" rows="3"></textarea>
    </p>

    <p>
      <label for="date">Example date</label>
      <input type="date" id="date">
    </p>

    <p>
      <label for="time">Example time</label>
      <input type="time" id="time">
    </p>

    <p>
      <label for="output">Example output</label>
      <output name="result" id="output">100</output>
    </p>

    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="button" value="Input button">
    </p>

    <p>
      <button type="submit" disabled>Button submit</button>
      <input type="submit" value="Input submit button" disabled>
      <input type="button" value="Input button" disabled>
    </p>
  </fieldset>
</form>

<!-- 
## Misc elements

### Address

The `<address>` element is updated to reset the browser default `font-style` from `italic` to `normal`. `line-height` is also now inherited, and `margin-bottom: 1rem` has been added. `<address>`s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with `<br>`.

-->
## その他の要素(Misc elements)
### 住所(address)
`<address>` は連絡先の情報を表示するために使われ、行の終了には `<br>` を使用します。  
`font-style` を `italic` から `normal` に変更して, `line-height` を継承し, `margin-bottom: 1rem` を適用します。

<div class="bd-example">
  <address>
    <strong>Twitter, Inc.</strong><br>
    1355 Market St, Suite 900<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>

  <address>
    <strong>Full Name</strong><br>
    <a href="mailto:#">first.last@example.com</a>
  </address>
</div>

<!--
### Blockquote

The default `margin` on blockquotes is `1em 40px`, so we reset that to `0 0 1rem` for something more consistent with other elements.
-->
### 引用（Blockquote）

`<blockquote>` の `margin` を `1em 40px` から, `0 0 1rem` に変更しています。  
`.blockquote` が追加されています。  

<div class="bd-example">
  <blockquote class="blockquote">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</div>

<!--
### Inline elements

The `<abbr>` element receives basic styling to make it stand out amongst paragraph text.
-->
### インライン要素(Inline elements)
`<abbr>` は文章の中で目立たせることができます。  


<div class="bd-example">
  Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.
</div>

<!--
### Summary

The default `cursor` on summary is `text`, so we reset that to `pointer` to convey that the element can be interacted with by clicking on it.
-->
### 概要(Summary)
`<summary>` を利用して、カーソル後にクリックをすることで、概要を表示することができます。  

<div class="bd-example">
  <details>
    <summary>Some details</summary>
    <p>More info about the details.</p>
  </details>

  <details open>
    <summary>Even more details</summary>
    <p>Here are even more details about the details.</p>
  </details>
</div>

<!--
## HTML5 `[hidden]` attribute

HTML5 adds [a new global attribute named `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), which is styled as `display: none` by default. Borrowing an idea from [PureCSS](https://purecss.io/), we improve upon this default by making `[hidden] { display: none !important; }` to help prevent its `display` from getting accidentally overridden. While `[hidden]` isn't natively supported by IE10, the explicit declaration in our CSS gets around that problem.
-->
## HTML5 `[hidden]` 属性(HTML5 `[hidden]` attribute)  
HTML5では `display: none` に [a new global attribute named `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) が追加されています。   
IE10ではサポートされていないが、PureCSSを参考に `[hidden] { display: none !important; }` を使ってこれを改善している。   

{% highlight html %}
<input type="text" hidden>
{% endhighlight %}

{% capture callout %}
<!--
##### jQuery incompatibility
`[hidden]` is not compatible with jQuery's `$(...).hide()` and `$(...).show()` methods. Therefore, we don't currently especially endorse `[hidden]` over other techniques for managing the `display` of elements.
-->

##### jQueryとの非互換性(jQuery incompatibility)
[hidden]はjQueryの `$(...).hide()` と `$(...).show()` メソッドと互換性がないため、  
現在のところ、`[hidden]` はjQueryで使用することは推奨していません。

{% endcapture %}
{% include callout.html content=callout type="warning" %}

<!--
To merely toggle the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document, use [the `.invisible` class]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/visibility/) instead.
-->
要素の可視性を切り替えるため、`display` は変更されず、文書の流れに影響を与えます。  
代わりに [the `.invisible` class]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/visibility/) を使います。

---
layout: docs
title: Forms
description: 多様なフォームを作成するために, コントロールスタイル, レイアウトオプション, カスタムコンポーネントについてガイドラインと例を示します。
group: components
toc: true
---
<!-- ---
layout: docs
title: Forms
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
group: components
toc: true
--- -->

## Overview
<!-- 
Bootstrap's form controls expand on [our Rebooted form styles]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/#forms) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Here's a quick example to demonstrate Bootstrap's form styles. Keep reading for documentation on required classes, form layout, and more. 
-->
フォームコントロールは [our Rebooted form styles]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/#forms) で展開します。これらのクラスを使用してカスタマイズされた表示をオプトインし、ブラウザとデバイス間でより一貫性のあるレンダリングを実現します。  
入力項目に `type` 属性を使用してください。(emailや数値情報など)  
フォームスタイルのクラスやレイアウトのドキュメントをお読みください。

{% capture example %}
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}

## Form controls
<!--
Textual form controls—like `<input>`s, `<select>`s, and `<textarea>`s—are styled with the `.form-control` class. Included are styles for general appearance, focus state, sizing, and more.

Be sure to explore our [custom forms](#custom-forms) to further style `<select>`s. 
-->
`<input>`, `<select>`, `<textarea>` のようなテキスト形式のコントロールは `form-control` が付与されています。 

<input>s、<select>s、sのようなテキスト形式のコントロール<textarea>は、その.form-controlクラスでスタイル付けされています。一般的な外観、フォーカス状態、サイジングなどのスタイルが含まれます。
`<select>`のスタイルを変更するには、[custom forms]（＃custom-forms）を必ず調べてください。


{% capture example %}
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- For file inputs, swap the `.form-control` for `.form-control-file`. -->
ファイル入力の場合、 `.form-control-file` の `.form-control` を入れ替えます。  

{% capture example %}
<form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

### Sizing

<!-- Set heights using classes like `.form-control-lg` and `.form-control-sm`. -->
`.form-control-lg` や `.form-control-sm` のようなクラスを使って高さを設定します。  

{% capture example %}
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<select class="form-control form-control-lg">
  <option>Large select</option>
</select>
<select class="form-control">
  <option>Default select</option>
</select>
<select class="form-control form-control-sm">
  <option>Small select</option>
</select>
{% endcapture %}
{% include example.html content=example %}

### Readonly
<!-- 
Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor. 
-->
`readonly` boolean属性を適用して入力値の変更を不可能にします。読み取り専用入力は、（無効な入力と同じように）軽く表示されますが、標準カーソルは保持されます。


{% capture example %}
<input class="form-control" type="text" placeholder="Readonly input here…" readonly>
{% endcapture %}
{% include example.html content=example %}


### Readonly plain text
<!-- 

If you want to have `<input readonly>` elements in your form styled as plain text, use the `.form-control-plaintext` class to remove the default form field styling and preserve the correct margin and padding. 
-->
`<input readonly>` 要素をプレーンテキストのスタイルにしたい場合は,  `.form-control-plaintext` を使ってデフォルトのフォームフィールドスタイルを削除し、正しいマージンとパディングを保持してください。

{% capture example %}
<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
</form>
{% endcapture %}
{% include example.html content=example %}

## Range Inputs
<!-- 
Set horizontally scrollable range inputs using `.form-control-range`. 
-->
`.form-control-range` を使って水平方向にスクロール可能な範囲の入力設定をできます。

{% capture example %}
<form>
  <div class="form-group">
    <label for="formControlRange">Example Range input</label>
    <input type="range" class="form-control-range" id="formControlRange">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}


 ## Checkboxes and radios
<!--
Default checkboxes and radios are improved upon with the help of `.form-check`, **a single class for both input types that improves the layout and behavior of their HTML elements**. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported, but to provide a `not-allowed` cursor on hover of the parent `<label>`, you'll need to add the `disabled` attribute to the `.form-check-input`. The disabled attribute will apply a lighter color to help indicate the input's state.

Checkboxes and radios use are built to support HTML-based form validation and provide concise, accessible labels. As such, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`. 
-->
`.form-check` にてチェックボックス、ラジオは大幅に改善されています。レイアウトと動作を向上させ、両方の入力タイプのための単一のクラスで行えます。
チェックボックスはリスト内の1以上のオプションを選択できます。ラジオは複数のオプションから1つを選択するためのものです。

チェックボックスやラジオでは `not-allowed` によって無効状態もサポートしています。 `disabled` 属性を `.form-check-input` に適用します。無効な属性は色で見分けられるようになります。

チェックボックスとラジオボタンは、HTMLベースのフォーム機能をサポートしています。`<input>` と `<label>` は親子要素ではなく、兄弟要素になります。
少し冗長になるが `<input>` と `<label>` には、関連付けのため `id` と `for` を指定する必要があります。

### Default (stacked)
<!-- 
By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`. 
-->
デフォルトでは、兄弟である任意の数のチェックボックスとラジオボタンが垂直方向に積み重ねられま。 `.form-check` で適切に配置されます。


{% capture example %}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Inline

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`. -->

### Inline

`.form-check-inline` を `.form-check` に適用すると同じ水平行にチェックボックスまたはラジオボタンをグループ化できます。

{% capture example %}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Without labels

Add `.position-static` to inputs within `.form-check` that don't have any label text. Remember to still provide some form of label for assistive technologies (for instance, using `aria-label`). -->

### Without labels

 `<label>` を持たない場合は `.form-check` 内の `input` に `.position-static` を追加します。


{% capture example %}
<div class="form-check">
  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
</div>
<div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Layout

Since Bootstrap applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis. -->

## Layout

bootstrapが適用されると `display: block` と `width: 100%` がフォームコントロールに適用され,フォームはデフォルトで縦方向にスタックします。  
フォームごとにこのレイアウトを変更するには、追加のクラスを使用できます。


<!-- ### Form groups

The `.form-group` class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed. Use it with `<fieldset>`s, `<div>`s, or nearly any other element. -->

### Form groups

`.form-group` はフォームに構造体を適用できます。ラベル、コントロール、オプションのヘルプテキスト、フォーム検証メッセージを提供しています。  
デフォルトでは `margin-bottom` が適用されますが `.form-inline` に追加のスタイルが取り込まれます。
`<fieldset>` や `<div>` などほぼすべての要素に使用します。


{% capture example %}
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Form grid

More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. -->

### Form grid
複雑なフォームは、グリッドクラスを使用して構築できます。列, 幅, 追加の配置オプションをフォームレイアウト適用します。

{% capture example %}
<form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- #### Form row

You may also swap `.row` for `.form-row`, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts. -->

#### Form row

`.form-row` でよりコンパクトなレイアウトにもできます。

{% capture example %}
<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- More complex layouts can also be created with the grid system. -->
さらに複雑なレイアウトをグリッドシステムで作成することもできます。

{% capture example %}
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- #### Horizontal form

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to specify the width of your labels and controls. Be sure to add `.col-form-label` to your `<label>`s as well so they're vertically centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline. -->

#### Horizontal form

`.row` をフォームグループに追加して `col-*-*` を使用してラベルとコントロールの幅を指定することで、水平フォームを作成できます。  
`.col-form-label`を適用するとフォームコントロールの中央に垂直に配置されます。

場合によっては, `margin` や `padding` ユーティリティを用いてカスタマイズして作成する必要があります。
たとえば `padding-top` で積み重ねられたラベルを整列させます。


{% capture example %}
<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- ##### Horizontal form label sizing

Be sure to use `.col-form-label-sm` or `.col-form-label-lg` to your `<label>`s or `<legend>`s to correctly follow the size of `.form-control-lg` and `.form-control-sm`. -->


##### Horizontal form label sizing

`.col-form-label-sm` や `.col-form-label-lg` を `<label>` や `<legend>` 適用すると下記のようにサイズになります。


{% capture example %}
<form>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- #### Column sizing

As shown in the previous examples, our grid system allows you to place any number of `.col`s within a `.row` or `.form-row`. They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining `.col`s equally split the rest, with specific column classes like `.col-7`. -->

#### Column sizing

グリッドシステムでは 複数の `.col` を `.row` や `.form-row` をに適用することができます。利用可能な幅を均等に分割します。
下記のように `.col-7` を適用していスペースを取ることができます。  


{% capture example %}
<form>
  <div class="form-row">
    <div class="col-7">
      <input type="text" class="form-control" placeholder="City">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="State">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Zip">
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- #### Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes `.col` to `.col-auto` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents. -->


#### Auto-sizing

フレックスボックスユーティリティを使用しています。 `.col` を `.col-auto` に変更して列が必要なだけのスペースを占めるようにしています。別の言い方をすれば、列は内容に基づいてサイズが決まります。


{% capture example %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck">
        <label class="form-check-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- You can then remix that once again with size-specific column classes. -->
サイズ別の列クラスを使用して、これを再度リミックスすることができます。

{% capture example %}
<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
      </div>
    </div>
    <div class="col-auto my-1">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
        <label class="form-check-label" for="autoSizingCheck2">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- And of course [custom form controls](#custom-forms) are supported. -->
[custom form controls](#custom-forms) もサポートされています。

{% capture example %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-auto my-1">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
        <label class="custom-control-label" for="customControlAutosizing">Remember my preference</label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Inline forms

Use the `.form-inline` class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.

- Controls are `display: flex`, collapsing any HTML white space and allowing you to provide alignment control with [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) and [flexbox]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) utilities.
- Controls and input groups receive `width: auto` to override the Bootstrap default `width: 100%`.
- Controls **only appear inline in viewports that are at least 576px wide** to account for narrow viewports on mobile devices.

You may need to manually address the width and alignment of individual form controls with [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) (as shown below). Lastly, be sure to always include a `<label>` with each form control, even if you need to hide it from non-screenreader visitors with `.sr-only`. -->

### Inline forms
`.form-inline` を使用して、一連のラベル、フォームコントロール、ボタンを1つの水平行に表示します。インラインフォーム内のフォームコントロールは、デフォルトの状態と異なります。

コントロールは `display: flex` です。スペースやフレックスボックスのユーティリティで整列を制御できるようにします。
コントロールとインプットグループは `width: auto` となります。 
コントロールは、モバイルデバイス上の狭いビューポートに対応するために、576ピクセル幅のビューポートにのみインラインで表示されます。
個々のフォームコントロールの幅とアライメントをスペーシングユーティリティー（下記参照）で手動で指定する必要があるかもしれません。`<label>` スクリーンリーダーでない訪問者から非表示にする必要がある場合でも、常に各フォームコントロールに `.sr-only` を含めるようにしてください

{% capture example %}
<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
  </div>

  <div class="form-check mb-2 mr-sm-2">
    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
    <label class="form-check-label" for="inlineFormCheck">
      Remember me
    </label>
  </div>

  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- Custom form controls and selects are also supported. -->
カスタムフォームのコントロールと選択もサポートされています。

{% capture example %}
<form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <div class="custom-control custom-checkbox my-1 mr-sm-2">
    <input type="checkbox" class="custom-control-input" id="customControlInline">
    <label class="custom-control-label" for="customControlInline">Remember my preference</label>
  </div>

  <button type="submit" class="btn btn-primary my-1">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
##### Alternatives to hidden labels
Assistive technologies such as screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class. There are further alternative methods of providing a label for assistive technologies, such as the `aria-label`, `aria-labelledby` or `title` attribute. If none of these are present, assistive technologies may resort to using the `placeholder` attribute, if present, but note that use of `placeholder` as a replacement for other labelling methods is not advised.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

<!-- ## Help text

Block-level help text in forms can be created using `.form-text` (previously known as `.help-block` in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like `.text-muted`. -->

## Help text

フォーム内のブロックレベルのヘルプテキストは `.form-text`（v3では `.help-block` ）を使用して作成できます。インラインヘルプテキストは、以下のようなインラインHTML要素とユーティリティクラス(`.text-muted。` のような)を使用して柔軟に実装できます。

{% capture callout %}
##### Associating help text with form controls

Help text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

`Help text below inputs can be styled with `.form-text`. This class includes `display: block` and adds some top margin for easy spacing from the inputs above.`

ヘルプテキストにはスタイルを付けることができます。
 `.form-text` には`display: block` から簡単にスペーシングできるように、いくつかのマージンが含まれています。

{% capture example %}
<label for="inputPassword5">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
{% endcapture %}
{% include example.html content=example %}

<!-- Inline text can use any typical inline HTML element (be it a `<small>`, `<span>`, or something else) with nothing more than a utility class. -->

インラインテキストは、ユーティリティクラス以外の通常のインラインHTML要素（`<small>`, `<span>` など）を使用できます。


{% capture example %}
<form class="form-inline">
  <div class="form-group">
    <label for="inputPassword6">Password</label>
    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

## Disabled forms

<!-- Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter. -->
`disabled`にboolean属性を追加して, 下記のようなユーザーとのやりとりが可能です。

{% highlight html %}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
{% endhighlight %}

<!-- Add the `disabled` attribute to a `<fieldset>` to disable all the controls within. -->
すべてのコントロールを無効にするには、`disabled` 属性を `<fieldset>` に追加します。

{% capture example %}
<form>
  <fieldset disabled>
    <div class="form-group">
      <label for="disabledTextInput">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label for="disabledSelect">Disabled select menu</label>
      <select id="disabledSelect" class="form-control">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
      <label class="form-check-label" for="disabledFieldsetCheck">
        Can't check this
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
##### Caveat with anchors

By default, browsers will treat all native form controls (`<input>`, `<select>` and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes `<a ... class="btn btn-*">` elements, these will only be given a style of `pointer-events: none`. As noted in the section about [disabled state for buttons]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#disabled-state) (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn't fully supported in Internet Explorer 10, and won't prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

{% capture callout %}
#### Cross-browser compatibility

While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don't fully support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.
{% endcapture %}
{% include callout.html content=callout type="danger" %}

<!-- ## Validation

Provide valuable, actionable feedback to your users with HTML5 form validation–[available in all our supported browsers](https://caniuse.com/#feat=form-validation). Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript. -->

## Validation
ブラウザ [available in all our supported browsers](https://caniuse.com/#feat=form-validation) でHTML5フォーム検証機能をして貴重なフィードバックをユーザーに提供します。ブラウザのデフォルト検証フィードバックから選択するか、組み込みクラスとスターターJavaScriptを使用してカスタムメッセージを実装します。

{% capture callout %}
We currently recommend using custom validation styles, as native browser default validation messages are not consistently exposed to assistive technologies in all browsers (most notably, Chrome on desktop and mobile).
{% endcapture %}
{% include callout.html content=callout type="warning" %}

<!-- ### How it works

Here's how form validation works with Bootstrap:

- HTML form validation is applied via CSS's two pseudo-classes, `:invalid` and `:valid`. It applies to `<input>`, `<select>`, and `<textarea>` elements.
- Bootstrap scopes the `:invalid` and `:valid` styles to parent `.was-validated` class, usually applied to the `<form>`. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
- To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the `.was-validated` class from the `<form>` again after submission.
- As a fallback, `.is-invalid` and `.is-valid` classes may be used instead of the pseudo-classes for [server side validation](#server-side). They do not require a `.was-validated` parent class.
- Due to constraints in how CSS works, we cannot (at present) apply styles to a `<label>` that comes before a form control in the DOM without the help of custom JavaScript.
- All modern browsers support the [constraint validation API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api), a series of JavaScript methods for validating form controls.
- Feedback messages may utilize the [browser defaults](#browser-defaults) (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.
- You may provide custom validity messages with `setCustomValidity` in JavaScript.

With that in mind, consider the following demos for our custom form validation styles, optional server side classes, and browser defaults. -->

### How it works

Bootstrapで検証がどのように機能するかは下記です。
- HTMLフォームの検証は、CSSの疑似クラス、`:invalid` と `:valid` を経由して適用されます。 `<input>`, `<select>`, `<textarea>` 要素に適用されます。
- Bootstrapは `:invalid` と `:valid` を親の `.was-validated` に適用します。通常は `<form>` に適用しますが, それ以外の場合、値のない任意の必須フィールドは、ページのロード時に無効として表示されます。それらをアクティブにするタイミングを選択することが可能です。
- フォームの外観をリセットするには（例：AJAXを使用した動的フォーム送信の場合）submit後に再び `<form>` から `.was-validated` を削除します。
- フォールバックとして `.is-invalid` と `.is-valid` を [server side validation](#server-side) の疑似クラスの代わりに使用可能です。 (親要素に `.was-validated` は必要ない。)
- CSSの仕組みの制約から、JavaScriptなしでDOMのフォームコントロールの前にある `<label>` にスタイルを適用することは不可能です。
- 最新ブラウザでは、フォームコントロールを検証する一連のJavaScriptメソッドである [constraint validation API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api) はサポートされます。
- フィードバックメッセージは、[browser defaults](#browser-defaults)（各ブラウザごとに異なり、CSS経由では変更不可です）や追加のHTMLとCSSを使用したカスタムフィードバックスタイルを利用可能です。
- JavaScriptで `setCustomValidity` を使用してカスタムのメッセージを提供可能です。


<!-- ### Custom styles

For custom Bootstrap form validation messages, you'll need to add the `novalidate` boolean attribute to your `<form>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the `:invalid` and `:valid` styles applied to your form controls.

Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for `<select>`s are only available with `.custom-select`, and not `.form-control`. -->

### Custom styles

フォーム検証メッセージの場合は、`<form>` に `novalidate` booleanの属性を追加する必要があります。これにより、ブラウザのデフォルトのフィードバックツールチップは無効になりますが、JavaScriptのフォーム検証APIにはまだアクセスできません。以下のフォームで送信すると、BootstrapのJavaScriptは送信ボタンを傍受し、フィードバックを中継します。送信しようとすると、フォームコントロールに `:invalid` と `:valid` スタイルが適用されます。  
カスタムフィードバックスタイルではカスタムの色, 枠線, フォーカススタイル, 背景アイコンを適用して、フィードバックをよりよく伝えることができます。`<select>` の背景アイコンは `.custom-select` だけで利用でき `.form-control` では利用不可です。


{% capture example %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom05">Zip</label>
      <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript. -->

### Browser defaults

カスタム検証フィードバックメッセージやJavaScriptでフォームの動作を変更するせずに, ブラウザのデフォルトが使用可能です。  
フィードバックのスタイルはCSSでスタイルすることはできません。JavaScriptを使用してフィードバックテキストをカスタマイズすることは可能です。  

{% capture example %}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">First name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Last name</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">State</label>
      <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Server side

We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes. -->

### Server side

クライアント側で検証をすることを推奨します。サーバー側の検証が必要な場合は無効や有効なフォームフィールドを `.is-invalid` と `.is-valid` で指定可能です。 `.invalid-feedback` もサポートされます。

{% capture example %}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Supported elements

Our example forms show native textual `<input>`s above, but form validation styles are also available for `<textarea>`s and custom form controls. -->

### Supported elements
サンプルフォームは、上記のテキストの `<input>` を示しているがフォームの検証スタイルは `<textarea>` とカスタムフォームコントロールでも利用可能です。


{% capture example %}
<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea">Textarea</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="custom-control custom-checkbox mb-3">
    <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
    <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
  </div>
  <div class="custom-control custom-radio mb-3">
    <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="form-group">
    <select class="custom-select" required>
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>

  <div class="custom-file">
    <input type="file" class="custom-file-input" id="validatedCustomFile" required>
    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
    <div class="invalid-feedback">Example invalid custom file feedback</div>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Tooltips

If your form layout allows it, you can swap the `.{valid|invalid}-feedback` classes for `.{valid|invalid}-tooltip` classes to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup. -->

### Tooltips
フォームレイアウトで許可されている場合は `.{valid|invalid}-feedback` を `.{valid|invalid}-tooltip` に置き換えると,検証フィードバックをスタイル付きツールチップで表示可能です。ツールヒントの位置を決めるため親要素に `position: relative` が入っていること確認してください。下記の例では、列クラスには既にこれがあリマスが場合によっては別の設定が必要です。


{% capture example %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">City</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endcapture %}
{% include example.html content=example %}

<!-- ## Custom forms

For even more customization and cross browser consistency, use our completely custom form elements to replace the browser defaults. They're built on top of semantic and accessible markup, so they're solid replacements for any default form control. -->

## Custom forms
カスタマイズやクロスブラウザの一貫性をさらに高めるには、カスタムのフォーム要素を使用して、ブラウザのデフォルトを置き換えます。セマンティックでアクセシブルなマークアップの上に構築されているため、デフォルトのフォームコントロールの代わりに使用可能です。


<!-- ### Checkboxes and radios

Each checkbox and radio is wrapped in a `<div>` with a sibling `<span>` to create our custom control and a `<label>` for the accompanying text. Structurally, this is the same approach as our default `.form-check`.

We use the sibling selector (`~`) for all our `<input>` states—like `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`'s state.

We hide the default `<input>` with `opacity` and use the `.custom-control-label` to build a new custom form indicator in its place with `::before` and `::after`. Unfortunately we can't build a custom one from just the `<input>` because CSS's `content` doesn't work on that element.

In the checked states, we use **base64 embedded SVG icons** from [Open Iconic](https://github.com/iconic/open-iconic). This provides us the best control for styling and positioning across browsers and devices. -->

### Checkboxes and radios

チェックボックスとラジオは`<div>` , `<span>` でラップされ、カスタムコントロールと　`<label>` に付随するテキストを作成します。構造的には、これはデフォルト( `.form-check` )と同じアプローチです。  

`:checked` のように `<input>` の状態に兄弟セレクタ（ `~` ）を使用して、カスタムフォームのインジケータに適切なスタイルを設定します。
`.custom-control-label` と組み合わせると `<input>` の状態に基づいて各アイテムのテキストのスタイルを設定することも可能です。

デフォルトの `<input>` は `opacity` で非表示にして `.custom-control-label` を使用して、`::before` と `::after` で新しいカスタムフォームのインジケータを構築します。CSSの content はその要素では動作しないので `<input>` だけでカスタムを構築することはできません。

チェック状態では、[Open Iconic](https://github.com/iconic/open-iconic) から **base64 embedded SVG icons** を使用してブラウザやデバイス間でのスタイルと配置が最適なコントロールを提供します。



#### Checkboxes

{% capture example %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- Custom checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it). -->
カスタムチェックボックスは、 JavaScript経由で手動で設定された場合は `:indeterminate` が使用可能です。

<div class="bd-example bd-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Check this custom checkbox</label>
  </div>
</div>

<!-- If you're using jQuery, something like this should suffice: -->
jQueryを使用している場合は下記になります。

{% highlight js %}
$('.your-checkbox').prop('indeterminate', true)
{% endhighlight %}

#### Radios

{% capture example %}
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

#### Inline

{% capture example %}
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="customRadioInline2">Or toggle this other custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- #### Disabled

Custom checkboxes and radios can also be disabled. Add the `disabled` boolean attribute to the `<input>` and the custom indicator and label description will be automatically styled. -->

#### Disabled
カスタムのチェックボックスやラジオを無効にすることも可能です。 disabled boolean属性を `<input>` に追加すると、カスタムインジケータとラベルの説明が自動的にスタイルされます。


{% capture example %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
  <label class="custom-control-label" for="customCheckDisabled">Check this custom checkbox</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" id="radio3" name="radioDisabled" id="customRadioDisabled" class="custom-control-input" disabled>
  <label class="custom-control-label" for="customRadioDisabled">Toggle this custom radio</label>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Select menu

Custom `<select>` menus need only a custom class, `.custom-select` to trigger the custom styles. Custom styles are limited to the `<select>`'s initial appearance and cannot modify the `<option>`s due to browser limitations. -->

### Select menu

`<select>` メニューはカスタムクラスのみを必要として `.custom-select` で切替可能です。
カスタムスタイルは　`<select>` の最初の外観に制限されており、ブラウザの制限のために `<option>` を変更することは不可能です。

{% capture example %}
<select class="custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endcapture %}
{% include example.html content=example %}

<!-- You may also choose from small and large custom selects to match our similarly sized text inputs. -->
同様のサイズのテキスト入力と一致するように、小さなカスタム選択から選択することもできます。

{% capture example %}
<select class="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="custom-select custom-select-sm">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endcapture %}
{% include example.html content=example %}

<!-- The `multiple` attribute is also supported: -->
`multiple`属性もサポートしています。  

{% capture example %}
<select class="custom-select" multiple>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endcapture %}
{% include example.html content=example %}

<!-- As is the `size` attribute: -->
size 属性は下記のの通りです。

{% capture example %}
<select class="custom-select" size="3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
{% endcapture %}
{% include example.html content=example %}

<!-- ### Range

Create custom `<input type="range">` controls with `.custom-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only IE and Firefox support "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it. -->

### Range

`.custom-range` でカスタムの `<input type="range">` コントロールを作成できます。背景と値はどのブラウザでも同じように表示されます。  
IEとFirefoxでは進行状況を視覚的に示す手段としてサムの左右からトラックを"埋め込む"ことをサポートしているため、現在のところサポートしていません。

{% capture example %}
<label for="customRange1">Example range</label>
<input type="range" class="custom-range" id="customRange1">
{% endcapture %}
{% include example.html content=example %}

<!-- Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes. -->
レンジ入力は、それぞれ `min` と `max` に `0` と `100` の暗黙の値を持つます。`min` 属性と `max` 属性を使用するユーザーには新しい値が指定可能です。

{% capture example %}
<label for="customRange2">Example range</label>
<input type="range" class="custom-range" min="0" max="5" id="customRange2">
{% endcapture %}
{% include example.html content=example %}

<!-- By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`. -->

デフォルトでは、レンジ入力は整数値です。これを変更するには `step` 値を指定する。以下の例では、step="0.5" を使用してステップ数を2倍にしています。


{% capture example %}
<label for="customRange3">Example range</label>
<input type="range" class="custom-range" min="0" max="5" step="0.5" id="customRange3">
{% endcapture %}
{% include example.html content=example %}

### File browser

{% capture callout %}
Recommended plugin to animate custom file input: [bs-custom-file-input](https://www.npmjs.com/package/bs-custom-file-input)
{% endcapture %}
{% include callout.html content=callout type="info" %}

<!-- The file input is the most gnarly of the bunch and requires additional JavaScript if you'd like to hook them up with functional *Choose file...* and selected file name text. -->

ファイルの入力は機能的にプレースホルダーの"ファイルを選択..."を選択したファイル名のテキストに変わるようにするには追加のJavaScriptが必要です。



{% capture example %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- We hide the default file `<input>` via `opacity` and instead style the `<label>`. The button is generated and positioned with `::after`. Lastly, we declare a `width` and `height` on the `<input>` for proper spacing for surrounding content. -->

`opacity` を使ってデフォルトファイル `<input>` を隠し、代わりに `<label>` 使用します。
ボタンは生成されて `::after` で配置。最後に周囲のコンテンツの適切な間隔のために `<input>` に幅と高さを宣言します。



<!-- #### Translating or customizing the strings

The [`:lang()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) is used to allow for translation of the "Browse" text into other languages. Override or add entries to the `$custom-file-text` Sass variable with the relevant [language tag](https://en.wikipedia.org/wiki/IETF_language_tag) and localized strings. The English strings can be customized the same way. For example, here's how one might add a Spanish translation (Spanish's language code is `es`): -->

#### Translating or customizing the strings
[`:lang()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) を使用して ボタンの"Browse"テキストを他の言語に翻訳して上書きします。関連する [language tag](https://en.wikipedia.org/wiki/IETF_language_tag) とローカライズされた文字列を使用して `$custom-file-text` Sass変数にエントリを再定義したり追加するだけで、英語の文字列も同様にカスタマイズ可能です。例えば、日本語の翻訳を追加する方法は次のとおり（日本語の言語コードは `ja`）。

{% highlight scss %}
$custom-file-text: (
  en: "Browse",
  es: "Elegir"
);
{% endhighlight %}

<!-- Here's `lang(es)` in action on the custom file input for a Spanish translation: -->
上記の設定でスペイン語 `lang(es)`に翻訳したカスタムファイル入力：

{% capture example %}
<div class="custom-file">
  <input type="file" class="custom-file-input" id="customFileLang" lang="es">
  <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- You'll need to set the language of your document (or subtree thereof) correctly in order for the correct text to be shown. This can be done using [the `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) on the `<html>` element or the [`Content-Language` HTTP header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12), among other methods. -->

正しいテキストが表示されるようにするには文書（またはそのサブツリー）の言語を正しく設定する必要があります。これは、他のメソッドの中でも、要素または[`Content-Language` HTTP header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12) を使用して [the `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) 行うことができます。

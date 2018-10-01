---
layout: docs
title: Buttons
description: フォームやダイアログなどのアクションにカスタムボタンスタイルを利用できます。 サイズや状態管理に対応しています。
group: components
redirect_from: "/docs/4.1/components/"
toc: true
---

<!--
---
layout: docs
title: Buttons
description: Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
redirect_from: "/docs/4.1/components/"
toc: true
---
-->
<!--
## Examples

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
-->
## 例(Examples)
いくつかの定義済みのボタンスタイルがあり, それぞれ目的を持っています。

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}

<button type="button" class="btn btn-link">Link</button>
{% endcapture %}
{% include example.html content=example %}

{% include callout-warning-color-assistive-technologies.md %}

<!--
## Button tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.
-->
## ボタンタグ(Button tags)
`.btn` クラスは `<button>` 要素で使用するために設計されていますが, `<a>` や `<input>` 要素でも利用できます。   
（ブラウザによってはレンダリングされる内容に差異が可能性があります） 
`.btn` を `a` で機能のトリガーとして利用する場合は　`role="button"` を適用する必要があります。

{% capture example %}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{% endcapture %}
{% include example.html content=example %}

<!--
## Outline buttons

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.
-->
## アウトライン ボタン(Outline buttons)
アウトラインボタン：`.btn-outline-*` を適用すると枠線を残してボタンの背景色を透過することができます。

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}
{% endcapture %}
{% include example.html content=example %}

<!--
## Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.
-->
## サイズ(Sizes)
ボタンのサイズを `.btn-lg` , `.btn-sm`  を適用すると変更できます。 


{% capture example %}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{% endcapture %}
{% include example.html content=example %}

<!--
Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.
-->
.btn-block. を適用すると, 親要素の幅に合わせることができます。

{% capture example %}
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
{% endcapture %}
{% include example.html content=example %}

<!--
## Active state
Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.
-->
## アクティブステータス(Active state)
ボタンを押すと, 押された状態のままに表示することができます。(背景やボーダーが暗くなり, 影がつきます) 
擬似クラスを使うので,  `<button>` にクラスを追加する必要はありません。  
強制的に押された状態を表示するには `aria-pressed="true"` とします。



{% capture example %}
<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
{% endcapture %}
{% include example.html content=example %}

<!--
## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.
-->
## 無効ステータス(Disabled state)
ボタンを無効状態にするには `aria-disabled="true"` を適用します。


{% capture example %}
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
{% endcapture %}
{% include example.html content=example %}

<!--
Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons. In browsers which support that property, you won't see the disabled cursor at all.
- Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
-->
無効化ボタンを `<a>` 要素で使用した場合はすこし動きが違います。
- `<a>` は `disabled` 属性をサポートしていません。 `.disabled` クラスを利用する必要があります。
- アンカーボタンを無効化したスタイルを含んでいます。ブラウザがその機能をサポートしているのであればカーソルは見えなくなるでしょう。
- 無効化するボタンには aria-distabled="true" 属性をつけてください (スクリーンリーダー用)


{% capture example %}
<a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}


##### Link functionality caveat

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.



{% endcapture %}
{% include callout.html content=callout type="warning" %}
<!--
## Button plugin

Do more with buttons. Control button states or create groups of buttons for more components like toolbars.
-->
<!--
### Toggle states

Add `data-toggle="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to the `<button>`.
-->
## ボタンプラグイン (Button plugin)
コントロールボタンで, ツールバーのようなコンポーネントのボタンの状態を示したり, ボタンのグループが作成可能です。

### トグルステータス(Toggle states)
ボタンを押された状態に切り替えるには, `data-toggle="button"` を追加します。
ボタンをあらかじめ押された状態に切り替えておく場合は, `.active` クラスと `aria-pressed="true"` を `<button>` に適用します。


{% capture example %}
<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Single toggle
</button>
{% endcapture %}
{% include example.html content=example %}

<!--
### Checkbox and radio buttons

Bootstrap's `.button` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling. Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable their toggling behavior via JavaScript and add `.btn-group-toggle` to style the `<input>`s within your buttons. **Note that you can create single input-powered buttons or groups of them.**

The checked state for these buttons is **only updated via `click` event** on the button. If you use another method to update the input—e.g., with `<input type="reset">` or by manually applying the input's `checked` property—you'll need to toggle `.active` on the `<label>` manually.

Note that pre-checked buttons require you to manually add the `.active` class to the input's `<label>`.
-->
### チェックボックスとラジオボタン(Checkbox and radio buttons)
`.button` スタイルは、 `<label>` などの他の要素に適用すると, チェックボックスやラジオボタンの切り替えを行うことが可能です。  
`.btn` グループに `data-toggle="buttons"` を追加してJavaScript経由で切替動作を有効にします。
単一またはグループの入力電源ボタンも作成可能。

これらのボタンのチェック状態は、クリックイベントによってのみ更新されます。  
例えば `<input type="reset">` で入力を更新するために別のメソッドを使用する場合や,`input`の `checked` プロパティに適用する場合は、`<label>` を `.active` を切り替える必要があります。  
事前にボタンをチェック済みにしておくには、`<label>` に `.active` クラスを追加する必要があります。

{% capture example %}
<div class="btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="checkbox" checked autocomplete="off"> Checked
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio
  </label>
</div>
{% endcapture %}
{% include example.html content=example %}

<!--
### Methods
-->
### メソッド(Methods)

| Method | Description |
| --- | --- |
| `$().button('toggle')` | Toggles push state. Gives the button the appearance that it has been activated. |
| `$().button('dispose')` | Destroys an element's button. |

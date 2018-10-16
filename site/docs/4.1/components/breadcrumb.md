---
layout: docs
title: Breadcrumb
description: ページを階層化して、現在のページの位置を示します。
group: components
---
<!--
---
layout: docs
title: Breadcrumb
description: Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
group: components
---
-->

<!--
## Example
-->
## Example

{% capture example %}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!--
## Changing the separator

Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by changing `$breadcrumb-divider`. The [quote](https://sass-lang.com/documentation/Sass/Script/Functions.html#quote-instance_method) function is needed to generate the quotes around a string, so if you want `>` as separator, you can use this:
-->
## Changing the separator
セパレーターは [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) と [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content) により自動で追加されます。  
`$breadcrumb-divider` によってセパレーターを変更できます。　The [quote](https://sass-lang.com/documentation/Sass/Script/Functions.html#quote-instance_method) 関数を利用して,
`>` をセパレータとして使いたい場合は、次のように使用できます。  

```scss
$breadcrumb-divider: quote(">");
```
<!-->
It's also possible to use a **base64 embedded SVG icon**:
-->
**base64 embedded SVG icon** を利用することもできます。  
```scss
$breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);
```
<!--
The separator can be removed by setting `$breadcrumb-divider` to `none`:
-->
`$breadcrumb-divider` を `none` に設置すると、セパレーターをなくすことができます。

```scss
$breadcrumb-divider: none;
```

<!--
## Accessibility

Since breadcrumbs provide a navigation, it's a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
-->

## Accessibility
`<nav>` 要素に `aria-label="breadcrumb"` を適用してラベルを待たせたり、 
現在のページを示すために `aria-current="page" 適用することができます。

詳細は [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb)

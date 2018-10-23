---
layout: docs
title: Navbar
description: レスポンシブなヘッダー, ナビバーなどのドキュメントと例を示します。
group: components
toc: true
---
<!-- 
---
layout: docs
title: Navbar
description: Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
group: components
toc: true
--- 
-->


## How it works
<!-- 
Here's what you need to know before getting started with the navbar:

- Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl}` for responsive collapsing and [color scheme](#color-schemes) classes.
- Navbars and their contents are fluid by default. Use [optional containers](#containers) to limit their horizontal width.
- Use our [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) and [flex]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Navbars are hidden by default when printing. Force them to be printed by adding `.d-print` to the `.navbar`. See the [display]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/) utility class.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.

Read on for an example and list of supported sub-components. 
-->

navbarを始める前に下記を確認してください。

- `.navbar` は `.navbar-expand{-sm|-md|-lg|-xl}` と [color scheme](#color-schemes) が必要です。
- コンテンツはデフォルトでは幅一杯に表示します。 Use [optional containers](#containers) で横幅の制限が可能です。
- [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) や [flex]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) を使用して、ナビゲーションバー内の間隔や配置を制御します。
- デフォルトでレスポンシブになっているが, 変更可能です。レスポンシブの動作はJavaScriptの折り畳みプラグインに依存します。
- 印刷時にはデフォルトで非表示になっています。強制的に印刷させる場合は `.navbar` に `.d-print` を追加します。詳しくは [display]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/)  を参照してください。
- `<nav>` 要素を使用してアクセシビリティを確認するか、一般的な `<div>` などの要素を使用してナビゲーションバーに `role="navigation"` を追加します。


例とサポートされているサブコンポーネントのリストを参照してください。


## Supported content
<!-- 
Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.navbar-brand` for your company, product, or project name.
- `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.navbar-toggler` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- `.form-inline` for any form controls and actions.
- `.navbar-text` for adding vertically centered strings of text.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

Here's an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the `lg` (large) breakpoint. 
-->

ナビゲーションバーにはサブコンポーネントが組み込まれています。
下記が使用できるコンポーネントですが、詳細は例をみてください。

- `.navbar-brand` for your company, product, or project name.
- `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.navbar-toggler` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- `.form-inline` for any form controls and actions.
- `.navbar-text` for adding vertically centered strings of text.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.


{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

This example uses [color]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/) (`bg-light`) and [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) (`my-2`, `my-lg-0`, `mr-sm-0`, `my-sm-0`) utility classes.


### Brand
<!-- 
The `.navbar-brand` can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles. 
-->
`.navbar-brand` はほとんどの要素で適用可能です。ユーティリティクラスやカスタムスタイルを必要とする要素がある場合にはアンカーリンクに設定するのが最適です。  
`.navbar-brand` にイメージを追加するには、カスタムスタイルやユーティリティが必要になります。  
下記の例を参考にしてください。


{% capture example %}
<!-- As a link -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
</nav>

<!-- As a heading -->
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- Adding images to the `.navbar-brand` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate. -->

`.navbar-brand` にイメージを適用することは, いつも適切なサイズにカスタムスタイルやユーティリティを必要とします。下記に例があります。


{% capture example %}
<!-- Just an image -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
  </a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<!-- Image and text -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Bootstrap
  </a>
</nav>
{% endcapture %}
{% include example.html content=example %}

### Nav
<!-- 
Navbar navigation links build on our `.nav` options with their own modifier class and require the use of [toggler classes](#toggler) for proper responsive styling. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.

Active states—with `.active`—to indicate the current page can be applied directly to `.nav-link`s or their immediate parent `.nav-item`s. 
-->
ナビゲーションリンクは、独自の修飾子クラスを使用して `.nav` オプションを構築し、適切なレスポンシブスタイルのために切替クラスを使用する必要があります。
ナビゲーションバーのコンテンツを安全に配置させるためにナビゲーションはできるだけ多く空白を占有するようになります。

`.active` を使用したアクティブ状態は、現位置のページを `.nav-link` や直接の親 `.nav-items` に直接適用可能なことを示します。

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- And because we use classes for our navs, you can avoid the list-based approach entirely if you like. -->
navのクラスを使用すれば `list-based` のアプローチを完全に回避可能です。

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- You may also utilize dropdowns in your navbar nav. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for `.nav-item` and `.nav-link` as shown below. -->

ナビゲーションにドロップダウンを使用することも可能です。ドロップダウンのメニューには配置のために囲み要素が必要なので以下に示すように `.nav-item` と `.nav-link` に別々の入れ子要素を使用します。  

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

### Forms
<!-- 
Place various form controls and components within a navbar with `.form-inline`. 
-->
さまざまなフォームコントロールとコンポーネントを `.form-inline` でナビゲーションバー内に配置します。


{% capture example %}
<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- Immediate children elements in `.navbar` use flex layout and will default to `justify-content: between`. Use additional [flex utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) as needed to adjust this behavior. -->

`.navbar` の直下の子要素はFlexレイアウトを使用し、デフォルトで `justify-content:between` を設定します。この動作を調整するには追加の [flex utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) を使用します。

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
{% endcapture %}
{% include example.html content=example %}

Input groups work, too:

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- 
Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements. 
-->
ナビゲーションフォームの一部として様々なボタンがサポートされています。異なるサイズの要素の配置が可能です。

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
  </form>
</nav>
{% endcapture %}
{% include example.html content=example %}

### Text
<!-- 
Navbars may contain bits of text with the help of `.navbar-text`. This class adjusts vertical alignment and horizontal spacing for strings of text. 
-->


`.navbar-text` で 文字列の縦方向の配置と横方向の間隔を調整できます。

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <span class="navbar-text">
    Navbar text with an inline element
  </span>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- Mix and match with other components and utilities as needed. -->
他のコンポーネントやユーティリティと組み合わせることもできます。

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

## Color schemes
<!-- 
Theming the navbar has never been easier thanks to the combination of theming classes and `background-color` utilities. Choose from `.navbar-light` for use with light background colors, or `.navbar-dark` for dark background colors. Then, customize with `.bg-*` utilities. 
-->

テーマのクラスと `background-color` ユーティリティの組み合わせにより, 色の変更が可能です。
明るめの色は `.navbar-light` , 暗めの色は `.navbar-dark` を選択できます。 `.bg-*` ユーティリティでカスタマイズもできます。



<div class="bd-example">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</div>

{% highlight html %}
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
{% endhighlight %}

## Containers
<!-- 
Although it's not required, you can wrap a navbar in a `.container` to center it on a page or add one within to only center the contents of a [fixed or static top navbar](#placement). 
-->
`.container` でナビゲーションバーを囲んでページ上に配置したり、[fixed or static top navbar](#placement) でコンテンツを中央にのみ配置することが可能です。

{% capture example %}
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified `.navbar-expand{-sm|-md|-lg|-xl}` class. This ensures we're not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed. -->

コンテナがnavbar内にある場合、指定された` .navbar-expand{-sm|-md|-lg|-xl}` クラスよりも下のブレークポイントでは水平方向のpaddigが削除されます。
これにより、ナビゲーションバーが折り畳まれているときは、狭いビューポートで不必要にpaddingが倍増することはありません。


{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

## Placement
<!-- 
Use our [position utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/position/) to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

Also note that **`.sticky-top` uses `position: sticky`, which [isn't fully supported in every browser](https://caniuse.com/#feat=css-sticky)**. 
-->
[position utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/position/) を使用して動的な位置を取ることができます。
上, 下, 上に達したら固定などを選択できます。 `position: fixed` を使用した固定ナビーゲーションでは他の要素との重複を避けるため、CSSでの設定がが必要な場合があります。

`.sticky-top` の `position: sticky` は すべてのブラウザでサポートされるわけではないことに注意が必要です。  
[isn't fully supported in every browser](https://caniuse.com/#feat=css-sticky)

{% capture example %}
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Default</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="navbar fixed-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Fixed top</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="navbar fixed-bottom navbar-light bg-light">
  <a class="navbar-brand" href="#">Fixed bottom</a>
</nav>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<nav class="navbar sticky-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Sticky top</a>
</nav>
{% endcapture %}
{% include example.html content=example %}


## Responsive behaviors
<!-- 
Navbars can utilize `.navbar-toggler`, `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl}` classes to change when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `.navbar-expand` class on the navbar. For navbars that always collapse, don't add any `.navbar-expand` class. 
-->
ナビバーは `.navbar-toggler`, `.navbar-collapse`, `.navbar-expand{-sm|-md|-lg|-xl}` クラスを使用して,コンテンツがボタンの後で折りたたまれたときに変化可能です。特定の要素を表示するか非表示にするかを簡単に選択可能です。  
折りたたむことのないナビバーの場合は、`.navbar-expand` をナビゲーションバーに適用します。
常に折りたたむナビゲーションバーの場合は、`.navbar-expand` を適用しないでください。

### Toggler
<!-- 
Navbar togglers are left-aligned by default, but should they follow a sibling element like a `.navbar-brand`, they'll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.

With no `.navbar-brand` shown in lowest breakpoint: 
-->

トグルはデフォルトで左揃えになっていますが `.navbar-brand` のような兄弟要素に従うと, 自動的に右端に配置されます。マークアップを元に戻すと、トグルの配置が逆になります。以下に、異なるスタイルの例を示します。

`.navbar-brand` は最も低いブレークポイントには表示されません：

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Hidden brand</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- With a brand name shown on the left and toggler on the right: -->
左にブランド名、右にトグル：

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

<!-- With a toggler on the left and brand name on the right: -->
左にトグル、右にブランド名:

{% capture example %}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

### External content
<!-- 
Sometimes you want to use the collapse plugin to trigger hidden content elsewhere on the page. Because our plugin works on the `id` and `data-target` matching, that's easily done! 
-->

### External content
折りたたみプラグインを使用して, 隠しコンテンツにすることもできます。プラグインが動作するために `id` と `data-target` のマッチングを行えます。



{% capture example %}
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
{% endcapture %}
{% include example.html content=example %}

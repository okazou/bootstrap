---
layout: docs
# title: Theming Bootstrap
# description: Customize Bootstrap 4 with our new built-in Sass variables for global style preferences for easy theming and component changes.
title: Bootstrap テーマ
description: Sass 変数を使って, 簡単なテーマやコンポーネントの変更して Bootstrap をカスタマイズします。
group: getting-started
toc: true
redirect_from: "/docs/4.1/getting-started/options/"
---

<!-- ## Introduction

In Bootstrap 3, theming was largely driven by variable overrides in LESS, custom CSS, and a separate theme stylesheet that we included in our `dist` files. With some effort, one could completely redesign the look of Bootstrap 3 without touching the core files. Bootstrap 4 provides a familiar, but slightly different approach.

Now, theming is accomplished by Sass variables, Sass maps, and custom CSS. There's no more dedicated theme stylesheet; instead, you can enable the built-in theme to add gradients, shadows, and more. -->

## イントロダクション

Bootstrap 3 では, LESS, カスタム CSS および `dist` ファイルに含まれていたテーマ用スタイルシートの変数を上書きすることによってテーマを設定していました。Bootstrap 4 は Bootstrap 3 とは少し異なるアプローチで使い慣れた方法を提供します。

Bootstrap 4 は Sass 変数, Sass マップおよびカスタム CSS によってテーマを設定します。テーマ専用のスタイルシートはありません。代わりに, 組み込みのテーマでグラデーションやシャドウを追加することができます。

<!-- ## Sass

Utilize our source Sass files to take advantage of variables, maps, mixins, and more. -->

## Sass

Sass のソースファイルで, 変数, マップ, ミックスインなどを活用してください。

<!-- ### File structure

Whenever possible, avoid modifying Bootstrap's core files. For Sass, that means creating your own stylesheet that imports Bootstrap so you can modify and extend it. Assuming you're using a package manager like npm, you'll have a file structure that looks like this: -->

### ファイル構造

Bootstrap のコアファイルはなるべく変更しないでください。Sass では独自のスタイルシートを作成して Bootstrap をインポートして, 変更・拡張することが可能です。npm のようなパッケージマネージャを使っている場合, 次のようなファイル構造になります。

{% highlight plaintext %}
your-project/
├── scss
│   └── custom.scss
└── node_modules/
    └── bootstrap
        ├── js
        └── scss
{% endhighlight %}

<!-- If you've downloaded our source files and aren't using a package manager, you'll want to manually setup something similar to that structure, keeping Bootstrap's source files separate from your own. -->

パッケージマネージャを使わずソースファイルをダウンロードしている場合は, Bootstrap のソースファイルを自分のものとは別にして, その構造を手動で同じような構造にしたいと思うでしょう。

{% highlight plaintext %}
your-project/
├── scss
│   └── custom.scss
└── bootstrap/
    ├── js
    └── scss
{% endhighlight %}

<!-- ### Importing

In your `custom.scss`, you'll import Bootstrap's source Sass files. You have two options: include all of Bootstrap, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins. -->

### インポート

あなたの `custom.scss` では, Bootstrap の Sass ソースファイルをインポートします。Bootstrap をすべて含めるか, 必要な部分を選択するか 2 つのオプションがあります。後者を推奨しますが, コンポーネントにはいつかの要件と依存関係があることに注意してください。また, プラグイン用にいくつかの JavaScript を組み込む必要があります。

{% highlight scss %}
// Custom.scss
// Option A: Include all of Bootstrap

@import "../node_modules/bootstrap/scss/bootstrap";
{% endhighlight %}

{% highlight scss %}
// Custom.scss
// Option B: Include parts of Bootstrap

// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

// Optional
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/code";
@import "../node_modules/bootstrap/scss/grid";
{% endhighlight %}

<!-- With that setup in place, you can begin to modify any of the Sass variables and maps in your `custom.scss`. You can also start to add parts of Bootstrap under the `// Optional` section as needed. We suggest using the full import stack from our `bootstrap.scss` file as your starting point. -->

この設定を実行すると `custom.scss` 内の Sass 変数・マップを修正することができます。必要に応じて `// Optional` 以下に Bootstrap の一部を追加することも可能です。`bootstrap.scss` ファイルの全て入っている状態から編集することをお薦めします。

<!-- ### Variable defaults

Every Sass variable in Bootstrap 4 includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying Bootstrap's source code. Copy and paste variables as needed, modify their values, and remove the `!default` flag. If a variable has already been assigned, then it won't be re-assigned by the default values in Bootstrap.

You will find the complete list of Bootstrap's variables in `scss/_variables.scss`.

Variable overrides within the same Sass file can come before or after the default variables. However, when overriding across Sass files, your overrides must come before you import Bootstrap's Sass files.

Here's an example that changes the `background-color` and `color` for the `<body>` when importing and compiling Bootstrap via npm: -->

### 変数のデフォルト値

Bootstrap のすべての Sass 変数はソースコードを変更せずに自分の Sass で変数のデフォルト値を上書きできる `!default` フラグが含まれています。必要に応じて変数をコピー＆ペーストし, 値を変更して `!default` を削除します。変数がすでに割り当てられている場合, デフォルト値でにはなりません。

Bootstrap の完全な変数リストは `scss/_variables.scss` にあります。

同じ Sass ファイル内の変数上書きは, デフォルト値の前後に来る可能性があります。ただし, Sass ファイルを上書きするときは, Bootstrap の Sass ファイルをインポートする前に上書きする必要があります。

Bootstrap を npm で読み込んでコンパイルするときに `<body>` の `background-color` と `color` を変更する例を次に示します:

{% highlight scss %}
// Your variable overrides
$body-bg: #000;
$body-color: #111;

// Bootstrap and its default variables
@import "../node_modules/bootstrap/scss/bootstrap";
{% endhighlight %}

<!-- Repeat as necessary for any variable in Bootstrap, including the global options below. -->

以下のグローバルオプションを含め, 任意の Bootstrap 変数に必要なだけ繰り返します。

<!-- ### Maps and loops

Bootstrap 4 includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the `!default` flag and can be overridden and extended.

Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making _removing_ items from a map slightly more difficult. -->

### マップとループ

Bootstrap には, 関連する CSS 群を簡単に生成できるように, いくつかの Sass マップ・キー値ペアを用意しています。Sass 変数と同様に `!default` フラグが含まれており, 上書きして拡張可能です。

いくつかの Sass マップはデフォルトで空のマップにマージされます。これは, 指定した Sass マップを簡単に拡張するためものものですが, マップから項目を削除しにくくなります。

<!-- #### Modify map

To modify an existing color in our `$theme-colors` map, add the following to your custom Sass file: -->

#### マップの変更

`$theme-colors` マップのデフォルト色を変更するには, カスタム Sass ファイルに次の行を追加します:

{% highlight scss %}
$theme-colors: (
  "primary": #0074d9,
  "danger": #ff4136
);
{% endhighlight %}

<!-- #### Add to map

To add a new color to `$theme-colors`, add the new key and value: -->

#### マップの追加

`$theme-colors` マップの色を追加るには, 新しいキーと値を追加します:

{% highlight scss %}
$theme-colors: (
  "custom-color": #900
);
{% endhighlight %}

<!-- #### Remove from map

To remove colors from `$theme-colors`, or any other map, use `map-remove`. Be aware you must insert it between our requirements and options: -->

#### マップの削除

`$theme-colors` やその他のマップから色を削除するには `map-remove` を使います。Requied と Optional の間に挿入しなければいけないことに注意してください。

{% highlight scss %}
// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

// Optional
@import "../node_modules/bootstrap/scss/root";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
...
{% endhighlight %}

<!-- #### Required keys

Bootstrap assumes the presence of some specific keys within Sass maps as we used and extend these ourselves. As you customize the included maps, you may encounter errors where a specific Sass map's key is being used.

For example, we use the `primary`, `success`, and `danger` keys from `$theme-colors` for links, buttons, and form states. Replacing the values of these keys should present no issues, but removing them may cause Sass compilation issues. In these instances, you'll need to modify the Sass code that makes use of those values. -->

#### 必須キー

Bootstrap は, Sass マップ内のいくつかの特定のキーを前提に設計されています。特定キーが含まれているマップでキーを変更すると, エラーが発生することがあります。

例えば, リンク, ボタン, フォームの状態については `$theme-colors` の `primary`, `success` そして `danger` キーを使用します。キーの値を置き換えても問題ありませんが, 削除すると Sass コンパイルで問題が発生する可能性があります。その場合は, これらのキーに依存している Sass コードを変更する必要があります。

<!-- ### Functions

Bootstrap utilizes several Sass functions, but only a subset are applicable to general theming. We've included three functions for getting values from the color maps: -->

### 関数(Functions)

Bootstrap はいくつかの Sass 関数を利用しますが, サブセットのみが一般的なテーマに適用されます。カラーマップから値を取得するために 3 つの関数を使っています。

{% highlight scss %}
@function color($key: "blue") {
  @return map-get($colors, $key);
}

@function theme-color($key: "primary") {
  @return map-get($theme-colors, $key);
}

@function gray($key: "100") {
  @return map-get($grays, $key);
}
{% endhighlight %}

<!-- These allow you to pick one color from a Sass map much like how you'd use a color variable from v3. -->

これにより v3 のカラー変数の同様の使い方で Sass マップから 1 つの色を選択できます。

{% highlight scss %}
.custom-element {
  color: gray("100");
  background-color: theme-color("dark");
}
{% endhighlight %}

<!-- We also have another function for getting a particular _level_ of color from the `$theme-colors` map. Negative level values will lighten the color, while higher levels will darken. -->

`$teheme-colors` マップから特定のレベルの色を作る関数もあります。負のレベルは色を明るくし, 正のレベルは色を暗くします。

{% highlight scss %}
@function theme-color-level($color-name: "primary", $level: 0) {
  $color: theme-color($color-name);
  $color-base: if($level > 0, #000, #fff);
  $level: abs($level);

  @return mix($color-base, $color, $level * $theme-color-interval);
}
{% endhighlight %}

<!-- In practice, you'd call the function and pass in two parameters: the name of the color from `$theme-colors` (e.g., primary or danger) and a numeric level. -->

実際には, 関数に `$theme-colors` の色の名前(primary や danger など)とレベル(数値)の 2 つのパラメータを渡します。

{% highlight scss %}
.custom-element {
  color: theme-color-level(primary, -10);
}
{% endhighlight %}

<!-- Additional functions could be added in the future or your own custom Sass to create level functions for additional Sass maps, or even a generic one if you wanted to be more verbose. -->

機能を追加したり, 独自のカスタム Sass を追加したり, Sass マップ用にレベル関数を作成したり, 汎用の関数を追加することができます。

<!-- ### Color contrast

One additional function we include in Bootstrap is the color contrast function, `color-yiq`. It utilizes the [YIQ color space](https://en.wikipedia.org/wiki/YIQ) to automatically return a light (`#fff`) or dark (`#111`) contrast color based on the specified base color. This function is especially useful for mixins or loops where you're generating multiple classes.

For example, to generate color swatches from our `$theme-colors` map: -->

### カラーコントラスト

Bootstrap の機能でカラーコントラスト関数 `color-yiq` があります。[YIQ color space](https://en.wikipedia.org/wiki/YIQ) を使用して, 指定したベースカラーに基づいて, ライト(`#fff`)またはダーク(`#000`)のコントラストカラーを自動的に返します。この関数は, 複数のクラスを生成するミックスインやループで便利です。

例えば `$theme-colors` マップからカラースウォッチを生成するには:

{% highlight scss %}
@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-yiq($value);
  }
}
{% endhighlight %}

<!-- It can also be used for one-off contrast needs: -->

また, 1 回限りの用途にも使えます。

{% highlight scss %}
.custom-element {
  color: color-yiq(#000); // returns `color: #fff`
}
{% endhighlight %}

<!-- You can also specify a base color with our color map functions: -->

カラーマップ関数で基本色を指定することもできます:

{% highlight scss %}
.custom-element {
  color: color-yiq(theme-color("dark")); // returns `color: #fff`
}
{% endhighlight %}

<!-- ## Sass options

Customize Bootstrap 4 with our built-in custom variables file and easily toggle global CSS preferences with new `$enable-*` Sass variables. Override a variable's value and recompile with `npm run test` as needed.

You can find and customize these variables for key global options in Bootstrap's `scss/_variables.scss` file. -->

## Sass オプション

カスタム変数ファイルを使って Bootstrap をカスタマイズし, 新しい `$enable-*` Sass 変数でグローバルな CSS 設定を容易に切り替えることができます。変数の値を上書きし, 必要に応じて `npm run test` を実行して再コンパイルします。

`scss/_variables.scss` ファイルの主要オプションでカスタマイズすることができます。

<!-- | Variable                    | Values                             | Description                                                                            |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$spacer`                   | `1rem` (default), or any value > 0 | Specifies the default spacer value to programmatically generate our [spacer utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/). |
| `$enable-rounded`           | `true` (default) or `false`        | Enables predefined `border-radius` styles on various components. |
| `$enable-shadows`           | `true` or `false` (default)        | Enables predefined `box-shadow` styles on various components. |
| `$enable-gradients`         | `true` or `false` (default)        | Enables predefined gradients via `background-image` styles on various components. |
| `$enable-transitions`       | `true` (default) or `false`        | Enables predefined `transition`s on various components. |
| `$enable-hover-media-query` | `true` or `false` (default)        | **Deprecated** |
| `$enable-grid-classes`      | `true` (default) or `false`        | Enables the generation of CSS classes for the grid system (e.g., `.container`, `.row`, `.col-md-1`, etc.). |
| `$enable-caret`             | `true` (default) or `false`        | Enables pseudo element caret on `.dropdown-toggle`. |
| `$enable-print-styles`      | `true` (default) or `false`        | Enables styles for optimizing printing. |
| `$enable-validation-icons`  | `true` (default) or `false`        | Enables `background-image` icons within textual inputs and some custom forms for validation states. | -->

| Variable                    | Values                             | Description                                                                            |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$spacer`                   | `1rem` (標準), or 0 より大きい任意の値 | デフォルトのスペーサーの値, [ユーティリティ：スペーサ]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/)に反映されます。 |
| `$enable-rounded`           | `true` (標準) or `false`        | 各コンポーネントの角丸(`border-radius`)を有効にします。 |
| `$enable-shadows`           | `true` or `false` (標準)        | 各コンポーネントのボックスシャドウ(`box-shadow`)を有効にします。 |
| `$enable-gradients`         | `true` or `false` (標準)        | 各コンポーネントの `background-image` によるグラデーションを有効にします。 |
| `$enable-transitions`       | `true` (標準) or `false`        | 各コンポーネントのトランジション(`transition`)を有効にします。 |
| `$enable-hover-media-query` | `true` or `false` (標準)        | **廃止予定** |
| `$enable-grid-classes`      | `true` (標準) or `false`        | グリッドシステムの CSS クラスを有効にする(例 `.container`, `.row`, `.col-md-1` など)。 |
| `$enable-caret`             | `true` (標準) or `false`        | `.dropdown-toggle` のキャレット(疑似要素)を有効にする。 |
| `$enable-print-styles`      | `true` (標準) or `false`        | 印刷を最適化するスタイルを有効にする。 |
| `$enable-validation-icons`  | `true` (標準) or `false`        | テキストインプットおよびバリデートしたカスタムフォームの `background-image` アイコンを有効にする。 |

<!-- ## Color

Many of Bootstrap's various components and utilities are built through a series of colors defined in a Sass map. This map can be looped over in Sass to quickly generate a series of rulesets. -->

## カラー

Bootstrap の様々なコンポーネントとユーティリティの多くは Sass マップで定義された色によって構築されています。このマップは Sass でループされ, 一連のルールセットをすぐに生成することができます。

<!-- ### All colors

All colors available in Bootstrap 4, are available as Sass variables and a Sass map in `scss/_variables.scss` file. This will be expanded upon in subsequent minor releases to add additional shades, much like the [grayscale palette](#grays) we already include. -->

### すべてのカラー

Bootstrap では全ての色を Sass 変数として `scss/_variables.scss` ファイルの Sass マップで使用可能です。標準で入っている [グレースケール](#グレースケール) と同様に追加の明度が追加されます。

<div class="row">
  {% for color in site.data.colors %}
    {% unless color.name == "white" or color.name == "gray" or color.name == "gray-dark" %}
    <div class="col-md-4">
        <div class="p-3 mb-3 swatch-{{ color.name }}">{{ color.name | capitalize }}</div>
    </div>
    {% endunless %}
  {% endfor %}
</div>

<!-- Here's how you can use these in your Sass: -->

Sass でこれらを使用する方法は次の通りです:

{% highlight scss %}
// With variable
.alpha { color: $purple; }

// From the Sass map with our `color()` function
.beta { color: color("purple"); }
{% endhighlight %}

<!-- [Color utility classes]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/) are also available for setting `color` and `background-color`. -->

[カラーユーティリティクラス]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/) は `color` と `background-color` の設定にも使用できます。

{% capture callout %}
In the future, we'll aim to provide Sass maps and variables for shades of each color as we've done with the grayscale colors below.
{% endcapture %}
{% include callout.html content=callout type="info" %}

<!-- ### Theme colors

We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstraps's `scss/_variables.scss` file. -->

### テーマカラー

`scss/_variables.scss` ファイルに Sass 変数と Sass マップをセットし, 全ての色を使って, カラースキーマのためのカラーパレットを作成します。

<div class="row">
  {% for color in site.data.theme-colors %}
    <div class="col-md-4">
      <div class="p-3 mb-3 swatch-{{ color.name }}">{{ color.name | capitalize }}</div>
    </div>
  {% endfor %}
</div>

<!-- ### Grays -->

<!-- An expansive set of gray variables and a Sass map in `scss/_variables.scss` for consistent shades of gray across your project. -->

### グレースケール

`scss/_variables.scss` ファイルのグレー変数と Sass マップで生成されるグレースケールの一覧を表示します。

<div class="row mb-3">
  <div class="col-md-4">
    {% for color in site.data.grays %}
      <div class="p-3 swatch-{{ color.name }}">{{ color.name | capitalize }}</div>
    {% endfor %}
  </div>
</div>

<!-- Within `scss/_variables.scss`, you'll find Bootstrap's color variables and Sass map. Here's an example of the `$colors` Sass map: -->

`scss/_variables.scss`　ファイルには, カラー変数と Sass マップがあります。次に `$colors` Sass マップの例を示します:

{% highlight scss %}
$colors: (
  "blue": $blue,
  "indigo": $indigo,
  "purple": $purple,
  "pink": $pink,
  "red": $red,
  "orange": $orange,
  "yellow": $yellow,
  "green": $green,
  "teal": $teal,
  "cyan": $cyan,
  "white": $white,
  "gray": $gray-600,
  "gray-dark": $gray-800
) !default;
{% endhighlight %}

<!-- Add, remove, or modify values within the map to update how they're used in many other components. Unfortunately at this time, not _every_ component utilizes this Sass map. Future updates will strive to improve upon this. Until then, plan on making use of the `${color}` variables and this Sass map. -->

Sass マップの値を追加, 削除, 変更して, 各コンポーネントにどのように反映されるかを確認します。現時点では, すべてのコンポーネントがこの Sass マップを使用しているわけではありません。今後のアップデートでは, これを改善する予定です。今までは, `${color}` 変数と Sass マップを使用することを検討していました。

<!-- ## Components

Many of Bootstrap's components and utilities are built with `@each` loops that iterate over a Sass map. This is especially helpful for generating variants of a component by our `$theme-colors` and creating responsive variants for each breakpoint. As you customize these Sass maps and recompile, you'll automatically see your changes reflected in these loops. -->

## コンポーネント

ほとんどの Bootstrap コンポーネントは `@each` ループで構築されており, Sass マップを繰り返し処理しています。これは `$theme-colors` と各ブレイクポイントのレスポンシブクラスを生成する際に役立ちます。これらの Sass マップをカスタムして再コンパイルすると, 変更した内容が自動的に反映されます。

<!-- ### Modifiers

Many of Bootstrap's components are built with a base-modifier class approach. This means the bulk of the styling is contained to a base class (e.g., `.btn`) while style variations are confined to modifier classes (e.g., `.btn-danger`). These modifier classes are built from the `$theme-colors` map to make customizing the number and name of our modifier classes.

Here are two examples of how we loop over the `$theme-colors` map to generate modifiers to the `.alert` component and all our `.bg-*` background utilities. -->

### 修飾子

ほとんどの Bootstrap コンポーネントは, ベースモデルのクラスを修飾するアプローチで構築されています。これはスタイリングの大部分がベースクラス(例えば `.btn`)に含まれ, バリエーションは修飾子クラス(例えば `.btn-danger`)に限定されることを意味します。これらの修飾子クラスは `$theme-colors` マップから構築され, 修飾子の種類だけクラスが生成されます。

`.alert` コンポーネントと `.bg-*` ユーティリティをの修飾子を生成するために `$theme-colors` マップをループする 2 つの例を示します:

{% highlight scss %}
// Generate alert modifier classes
@each $color, $value in $theme-colors {
  .alert-#{$color} {
    @include alert-variant(theme-color-level($color, -10), theme-color-level($color, -9), theme-color-level($color, 6));
  }
}

// Generate `.bg-*` color utilities
@each $color, $value in $theme-colors {
  @include bg-variant('.bg-#{$color}', $value);
}
{% endhighlight %}

<!-- ### Responsive

These Sass loops aren't limited to color maps, either. You can also generate responsive variations of your components or utilities. Take for example our responsive text alignment utilities where we mix an `@each` loop for the `$grid-breakpoints` Sass map with a media query include. -->

### レスポンシブ

Sass ループはカラーに限らず, コンポーネントやユーティリティなどの様々なバリエーションを生成することができます。例えば, レスポンシブなテキスト寄せであれば, `$grid-breakpoins` Sass マップとメディアクエリによって構築されます。

{% highlight scss %}
@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .text#{$infix}-left   { text-align: left !important; }
    .text#{$infix}-right  { text-align: right !important; }
    .text#{$infix}-center { text-align: center !important; }
  }
}
{% endhighlight %}

<!-- Should you need to modify your `$grid-breakpoints`, your changes will apply to all the loops iterating over that map. -->

`$grid-breakpoints` を変更すると, このマップを利用している箇所すべてに適用されます。

<!-- ## CSS variables

Bootstrap 4 includes around two dozen [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) in its compiled CSS. These provide easy access to commonly used values like our theme colors, breakpoints, and primary font stacks when working in your browser's Inspector, a code sandbox, or general prototyping. -->

## CSS 変数

Bootstrap には, コンパイルされた CSS に 20 以上の[CSS カスタムプロパティ(変数)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)が含まれています。これらは, デベロッパーツール, コードサンドボックス, プロトタイピングのときに, テーマカラー, ブレイクポイント, フォントファミリーなどよく使う値に簡単にアクセスできます。

<!-- ### Available variables

Here are the variables we include (note that the `:root` is required). They're located in our `_root.scss` file. -->

### 利用可能な変数

`_root.scss` ファイルに変数が含まれています(`:root` は必須です)。

{% highlight css %}
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
{% endhighlight %}

<!-- ### Examples

CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, here we're resetting our page's font and link styles with CSS variables. -->

### 例

CSS 変数は, Sass 変数と同様に柔軟に扱うことができますが, Sass とは異なりコンパイルする必要がありません。例えば, ページのフォントとリンクスタイルを CSS 変数にセットします。

{% highlight css %}
body {
  font: 1rem/1.5 var(--font-family-sans-serif);
}
a {
  color: var(--blue);
}
{% endhighlight %}

<!-- ### Breakpoint variables

While we originally included breakpoints in our CSS variables (e.g., `--breakpoint-md`), **these are not supported in media queries**, but they can still be used _within_ rulesets in media queries. These breakpoint variables remain in the compiled CSS for backward compatibility given they can be utilized by JavaScript. [Learn more in the spec.](https://www.w3.org/TR/css-variables-1/#using-variables)

Here's an example of **what's not supported:** -->

### ブレイクポイント変数

ブレークポイントの CSS 変数(例えば `--breakpoint-md`)は, **メディアクエリでサポートされていません**が, ルールセット内で使用することができます。これらのブレークポイント変数は JavaScript で利用できる下位互換性のためにコンパイルされたファイルに残っています。[詳細はこちらを御覧ください。](https://www.w3.org/TR/css-variables-1/#using-variables)

**サポートされていない**例は次のとおりです:

{% highlight css %}
@media (min-width: var(--breakpoint-sm)) {
  ...
}
{% endhighlight %}

<!-- And here's an example of **what is supported:** -->

**サポートされている**例は次のとおりです:

{% highlight css %}
@media (min-width: 768px) {
  .custom-element {
    color: var(--primary);
  }
}
{% endhighlight %}

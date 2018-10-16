---
layout: docs
title: Carousel
description: 画像やスライドをよこにスライドさせて複数表示させるコンポーネントです。
group: components
toc: true
---
<!-- ---
layout: docs
title: Carousel
description: A slideshow component for cycling through elements—images or slides of text—like a carousel.
group: components
toc: true
--- -->

<!-- ## How it works

The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

In browsers where the [Page Visibility API](https://www.w3.org/TR/page-visibility/) is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).

Please be aware that nested carousels are not supported, and carousels are generally not compliant with accessibility standards.

Lastly, if you're building our JavaScript from source, it [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util). -->

## How it works
カルーセルはコンテンツを繰り返し表示するするためのスライドショーです。 CSS 3D と JavaScriptで構築するされている。  
前後(previous/next)のコントロールもサポートされています。
[Page Visibility API](https://www.w3.org/TR/page-visibility/) がサポートされているブラウザでは, ブラウザのタブがアクティブではない場合やウィンドウが最小化されいる場合など,
ページが表示されていない場合はカルーセルは動きません。またネストされたカルーセルはサポートされていません。
ソースからjavaScriptを構築す流場合は [`util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util) が必要です。


<!-- ## Example

Carousels don't automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they're not explicitly required. Add and customize as you see fit. 

 **The `.active` class needs to be added to one of the slides** otherwise the carousel will not be visible. Also be sure to set a unique id on the `.carousel` for optional controls, especially if you're using multiple carousels on a single page. Control and indicator elements must have a `data-target` attribute (or `href` for links) that matches the id of the `.carousel` element. -->

## Example

カルーセルは自動的にスライドのサイズを正規化しません。 ユーティリティやカスタムスタイルでコンテンツのサイズを適切にする必要があります。　　
前後(previous/next)のコントロールはサポートされているが, 明示的に必要とされているわけではないので、適切と思うようにカスタマイズや追加してください。　　

** スライドの中に `.active` クラスが1つ必要です。ない場合は表示されません。　　
複数のカルーセルを1つのページで使う場合には、 `.carousel` にユニークなIDを付与する必要があります。コントロール要素とインジケータ要素には `.carousel` 要素のIDと一致する data-target属性（リンクの場合は `href` ）が必要です。　　


<!-- ### Slides only

Here's a carousel with slides only. Note the presence of the `.d-block` and `.w-100` on carousel images to prevent browser default image alignment. -->

＃＃スライドのみ(Slides only)
スライドのみのカルーセルを表示します。  
ブラウザのデフォルトのイメージの配置を防ぐために、カルーセルのイメージ上に `.d-block` と `.w-100` が存在することに注意します。   

{% capture example %}
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### With controls

Adding in the previous and next controls: -->

### With controls

前後(previous/next)のコントロールを追加します。



{% capture example %}
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### With indicators

You can also add the indicators to the carousel, alongside the controls, too. -->

### With indicators
インジケータをカルーセルに追加可能です。  

{% capture example %}
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{% endcapture %}
{% include example.html content=example %}

<!-- ### With captions

Add captions to your slides easily with the `.carousel-caption` element within any `.carousel-item`. They can be easily hidden on smaller viewports, as shown below, with optional [display utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/). We hide them initially with `.d-none` and bring them back on medium-sized devices with `.d-md-block`. -->

### With captions

`.carousel-item` に `.carousel-caption` を適用して、スライドにキャプションが追加できます。  
[display utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/) を使用してビューポートに対して非表示にできます。  
 `.d-none .d-md-block` のようにします。  


<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

{% highlight html %}
<div class="carousel-item">
  <img src="..." alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div>
{% endhighlight %}

<!-- ### Crossfade

Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide. -->

### Crossfade
`.carousel-fade` を適用すると、スライドをアニメーションで切り替えます。  

{% capture example %}
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{% endcapture %}
{% include example.html content=example %}


<!-- ## Usage

### Via data attributes

Use data attributes to easily control the position of the carousel. `data-slide` accepts the keywords `prev` or `next`, which alters the slide position relative to its current position. Alternatively, use `data-slide-to` to pass a raw slide index to the carousel `data-slide-to="2"`, which shifts the slide position to a particular index beginning with `0`.

The `data-ride="carousel"` attribute is used to mark a carousel as animating starting at page load. **It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.** -->

## Usage

データ属性を使用して、カルーセルの位置をコントロールできます。
`data-slide` は `prev`, `next` を受け取り、スライドの現在の位置からの相対的な位置が変更されます。  
または `data-slide-to` を使用して, スライドの位置を 0 から始まる特定のインデックスにシフトします。  

`data-ride="carousel"` 属性は、ページの読み込み時にカルーセルをアニメーションとするために使用します。


### Via JavaScript

マニュアルでカルーセルを呼びます。

{% highlight js %}
$('.carousel').carousel()
{% endhighlight %}

<!-- ### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-interval=""`. -->

### Options

オプションは、データの属性やJavaScriptを使用して渡すことが可能です。 `data-` にオプション名を追加します。( `data-interval=""` のように)


<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>interval</td>
      <td>number</td>
      <td>5000</td>
      <td>The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.</td>
    </tr>
    <tr>
      <td>keyboard</td>
      <td>boolean</td>
      <td>true</td>
      <td>Whether the carousel should react to keyboard events.</td>
    </tr>
    <tr>
      <td>pause</td>
      <td>string | boolean</td>
      <td>"hover"</td>
      <td><p>If set to <code>"hover"</code>, pauses the cycling of the carousel on <code>mouseenter</code> and resumes the cycling of the carousel on <code>mouseleave</code>. If set to <code>false</code>, hovering over the carousel won't pause it.</p>
      <p>On touch-enabled devices, when set to <code>"hover"</code>, cycling will pause on <code>touchend</code> (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.</p></td>
    </tr>
    <tr>
      <td>ride</td>
      <td>string</td>
      <td>false</td>
      <td>Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>boolean</td>
      <td>true</td>
      <td>Whether the carousel should cycle continuously or have hard stops.</td>
    </tr>
  </tbody>
</table>

<!-- ### Methods -->
### Methods

{% include callout-danger-async-methods.md %}

#### `.carousel(options)`

<!-- Initializes the carousel with an optional options `object` and starts cycling through items. -->
`object` オプションを使用してアイテムのスライドを開始します。

{% highlight js %}
$('.carousel').carousel({
  interval: 2000
})
{% endhighlight %}

#### `.carousel('cycle')`

<!-- Cycles through the carousel items from left to right. -->
左から右にアイテムがスライドします。

#### `.carousel('pause')`

<!-- Stops the carousel from cycling through items. -->
アイテムのスライドを停止します。

#### `.carousel(number)`

Cycles the carousel to a particular frame (0 based, similar to an array). **Returns to the caller before the target item has been shown** (i.e. before the `slid.bs.carousel` event occurs).
特定のアイテムにスライドします。


#### `.carousel('prev')`

<!-- Cycles to the previous item. **Returns to the caller before the previous item has been shown** (i.e. before the `slid.bs.carousel` event occurs). -->
前のアイテムにスライドします。


#### `.carousel('next')`

<!-- Cycles to the next item. **Returns to the caller before the next item has been shown** (i.e. before the `slid.bs.carousel` event occurs). -->
次のアイテムにスライドします。

#### `.carousel('dispose')`

<!-- Destroys an element's carousel. -->
アイテムを破棄します。


<!-- ### Events

Bootstrap's carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:

- `direction`: The direction in which the carousel is sliding (either `"left"` or `"right"`).
- `relatedTarget`: The DOM element that is being slid into place as the active item.
- `from`: The index of the current item
- `to`: The index of the next item

All carousel events are fired at the carousel itself (i.e. at the `<div class="carousel">`). -->

### Events
カルーセルの機能を操作するための2つのイベントがあります。  

- `direction`: スライドされる方向
- `relatedTarget`: アクティブなアイテムとして配置するDOM要素
- `from`: 現在のアイテムのindex
- `to`: 次のアイテムのindex
  
<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>slide.bs.carousel</td>
      <td>This event fires immediately when the <code>slide</code> instance method is invoked.</td>
    </tr>
    <tr>
      <td>slid.bs.carousel</td>
      <td>This event is fired when the carousel has completed its slide transition.</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})
{% endhighlight %}

### Change transition duration

The transition duration of `.carousel-item` can be changed with the `$carousel-transition` Sass variable before compiling or custom styles if you're using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (eg. `transition: transform 2s ease, opacity .5s ease-out`).

### Change transition duration

<!-- The transition duration of `.carousel-item` can be changed with the `$carousel-transition` Sass variable before compiling or custom styles if you're using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (eg. `transition: transform 2s ease, opacity .5s ease-out`). -->
`.carousel-item` はコンパイル前の `$carousel-transition` で変更することもできます。

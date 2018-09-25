---
layout: docs
# title: Accessibility
# description: A brief overview of Bootstrap's features and limitations for the creation of accessible content.
title: アクセシビリティ
description: アクセシブルなコンテンツを作るための Bootstrap の機能と制限の概要を知りましょう。
group: getting-started
toc: true
---

<!-- Bootstrap provides an easy-to-use framework of ready-made styles, layout tools, and interactive components, allowing developers to create websites and applications that are visually appealing, functionally rich, and accessible out of the box. -->

Bootstrap は定義されたスタイル, レイアウトツール, インタラクティブなコンポーネント群を提供しているので, 開発者は豊富な機能で魅力的でアクセシブルな Web サイトやアプリケーションを開発することができます。

<!-- ## Overview and Limitations

The overall accessibility of any project built with Bootstrap depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with Bootstrap that fulfill [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0](https://www.w3.org/TR/WCAG20/) (A/AA/AAA), [Section 508](https://www.section508.gov/) and similar accessibility standards and requirements. -->

## 概要と制限

Bootstrap で構築された成果物の全体的なアクセシビリティは, マークアップ, スタイリング, スクリプティングに含まれています。これらが正しく実装されていれば [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0](https://www.w3.org/TR/WCAG20/) (A/AA/AAA), [Section 508](https://www.section508.gov/) および同様のアクセシビリティ標準と要件を満たす Web サイトやアプリケーションを構築することが可能です。

The overall accessibility of any project built with Bootstrap depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with Bootstrap that fulfill [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0](https://www.w3.org/TR/WCAG20/) (A/AA/AAA), [Section 508](https://www.section508.gov/) and similar accessibility standards and requirements.

<!-- ### Structural markup

Bootstrap's styling and layout can be applied to a wide range of markup structures. This documentation aims to provide developers with best practice examples to demonstrate the use of Bootstrap itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

### Interactive components

Bootstrap's interactive components—such as modal dialogs, dropdown menus and custom tooltips—are designed to work for touch, mouse and keyboard users. Through the use of relevant [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/intro/aria) roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because Bootstrap's components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.

### Color contrast

Most colors that currently make up Bootstrap's default palette—used throughout the framework for things such as button variations, alert variations, form validation indicators—lead to *insufficient* color contrast (below the recommended [WCAG 2.0 color contrast ratio of 4.5:1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)) when used against a light background. Authors will need to manually modify/extend these default colors to ensure adequate color contrast ratios.

### Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.sr-only` class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users. -->

### 構造的なマークアップ

Bootstrap のスタイリングとレイアウトは, 多くのマークアップ構造に適用可能です。このドキュメントは, 開発者にベストプラクティスを提供して Bootstrap の使い方を説明し, 潜在的なアクセシビリティの問題を解決し, 適切な構造的マークアップを提供することを目指しています。

### インタラクティブなコンポーネント

モーダル, ドロップダウン, ツールチップなどの Bootstrap コンポーネントは, タッチ, マウス, キーボードを使うユーザに適しています。関連する [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/intro/aria) の役割と属性を用いて, これらのコンポーネントは, 補助的な技術(スクリーンリーダなど)で理解・操作可能であるべきです。

Bootstrap コンポーネントは汎用的に設計されているので, コンポーネントの正確な役割と機能をより正確に伝えるために <abbr title="Accessible Rich Internet Applications">ARIA</abbr> の役割と属性, JavaScript の動作を追加しなければなりません。これはドキュメントに記載しています。

### カラーコントラスト

デフォルトの Bootstrap カラーのバリエーションはボタン, アラート, フォームのバリデーションなどコンポーネント全体で使われており, 明るい背景の場合は, 色のコントラストが不十分です(推奨 [WCAG 2.0 カラーコントラスト比 4.5:1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html))。作者は適切なカラーコントラスト比を確保するために, デフォルトカラーを手動で調整する必要があいｒます。

### 視覚的な非表示コンテンツ

視覚的に隠したほうが良いが, スクリーンリーダのような支援技術でアクセス可能なコンテンツは `.sr-only` でスタイリングすることができます。これは, 視覚的な情報(色によって示される意味など)を視覚障害者に伝えることに役立ちます。

{% highlight html %}
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  This action is not reversible
</p>
{% endhighlight %}

<!-- For visually hidden interactive controls, such as traditional "skip" links, `.sr-only` can be combined with the `.sr-only-focusable` class. This will ensure that the control becomes visible once focused (for sighted keyboard users).

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{% endhighlight %} -->

`.sr-only` は `.sr-only-focusable` と組み合わせることができます。これにより focus したコントロールが確実に分かるようになります。

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{% endhighlight %}

<!-- ### Reduced motion

Bootstrap includes support for the [`prefers-reduced-motion` media feature](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion). In browsers/environments that allow the user to specify their preference for reduced motion, most CSS transition effects in Bootstrap (for instance, when a modal dialog is opened or closed) will be disabled. Currently, support is limited to Safari on macOS and iOS.

## Additional resources

- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)
- [The A11Y Project](https://a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Colour Contrast Analyser (CCA)](https://developer.paciellogroup.com/resources/contrastanalyser/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer) -->

### モーションの抑制

Bootstrap にはモーションを抑制する [`prefers-reduced-motion` media feature](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) をサポートしています。ユーザがモーションを小さくしたり制御できるブラウザ環境では Bootstrap のほとんどの CSS トランジション(モーダルを閉じたり開いたりした場合など) は無効になります。現在, Mac OS と iOS の Safari に限って有効です。

## その他のリソース

- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)
- [The A11Y Project](https://a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Colour Contrast Analyser (CCA)](https://developer.paciellogroup.com/resources/contrastanalyser/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)

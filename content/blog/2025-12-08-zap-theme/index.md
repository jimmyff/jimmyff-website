+++
title = "Zap: A fast, ultra-minimal Zola theme"
date = 2025-12-08
[taxonomies]
tags = ["coding", "web"]
[extra]
open_graph_image = "/blog/2025-12-08-zap-theme/blog-post.webp"
+++

{{ image(src="zap.webp", alt="Zap theme") }}

Ever since I went minimal with my last website theme ([Inky](https://www.getzola.org/themes/inky/)), I've been wanting to go ultra-minimal. I wanted to see how much I could strip back to get TUI vibes: fast, lightweight with zero bloat.

This weekend I finally built [Zap](https://github.com/jimmyff/zola-zap), an ultra-minimal theme for [Zola](https://www.getzola.org/) (the wonderful Rust-based static site generator). It's designed to be as minimal as possible while still being functional: light/dark mode toggle, optional inline SVG icons via a sprite sheet, responsive images, and vibrant [OKLCH](/blog/prism-dart-flutter-color-package/) colors. The entire base CSS is inlined in the HTML—no external stylesheet requests. I also replaced the old search index with Fuse.js, which generates a significantly smaller index.

{{ image (src="blog-post.webp", alt="The old theme 'Inky' on the left, new 'Zap' theme in dark mode central and light mode right.") }}

_Comparison showing (from left) the old Inky theme and Zap dark + light mode._

---

## Does it live up to its name?

Perfect scores from PageSpeed Insights! 100 across the board for performance, accessibility, best practices, and SEO.

{{ image (src="results.webp", alt="PageSpeed Insights showing perfect 100 scores") }}

## Bonus: Analytics

I took the opportunity to add support for [Umami](https://umami.is/) analytics. It's privacy-focused and lightweight—a nice change from the usual suspects.

---

Looking forward to publishing more content on my shiny refreshed site in 2026!

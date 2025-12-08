+++
title = "Zap: A minimal theme for Zola"
date = 2025-12-08
[taxonomies]
tags = ["coding", "web"]
[extra]
open_graph_image = "/blog/2025-12-08-zap-theme/blog-post.webp"
+++

Ever since I went minimal with my last website theme [Inky](https://www.getzola.org/themes/inky/), I've wanting to go ultra-minimal. I wanted see how much I can strip back to get TUI vibes: fast, lightweight with zero bloat.

This weekend I finally got around to it and I built [Zap](https://github.com/jimmyff/zola-zap), a minimal theme for the [Zola](https://www.getzola.org/) static site generator. It's designed to be as minimal as possible while still being functional: light/dark mode toggle, optional inline SVG icons via a sprite sheet, responsive images, and vibrant [OKLCH](/blog/prism-dart-flutter-color-package/) colors. The entire base CSS is inlined in the HTML—no external stylesheet requests. I also replaced the old search index with a Fuse.js which generates a significantly smaller index.

I've also taken the opportunity to switch to [Umami](https://umami.is/) for analytics. It's privacy-focused, lightweight, and doesn't require cookie banners. A nice change from the usual suspects.

Looking forward to publishing more content on my shiny refreshed site in 2026!

{{ image (src="blog-post.webp", alt="The old theme 'Inky' on the left, new 'Zap' theme in dark mode central and light mode right.") }}

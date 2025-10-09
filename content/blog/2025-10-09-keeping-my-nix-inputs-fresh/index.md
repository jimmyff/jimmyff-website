+++
title = "Keeping my Nix inputs fresh"
date = 2025-10-09
[taxonomies]
tags = ["coding", "nix"]
[extra]
open_graph_image = "/blog/2025-10-09-keeping-my-nix-inputs-fresh/stay-fresh.webp"
+++

Nix's approach to reproducibility means programs live in read-only storage and can't self-update—you manage everything manually. After [moving to Nix full-time](/blog/beyond-package-management-how-nix-refactored-my-digital-life/), my initial setup meant updating everything at once: AI tools, developer tooling, and my desktop environment. This got annoying fast, since I like to update AI stuff almost daily, dev tools weekly, and my desktop maybe monthly.

I split my nixpkgs into specialized inputs (`pkgs-ai`, `pkgs-dev-tools`, `pkgs-desktop`) so I could update them independently, but I had no easy way to see which inputs actually had updates available.

{{ image(src="flake-freshness.webp", alt="Terminal output showing flake-freshness checking packages across nixpkgs inputs") }}

So, I created a little nushell script called [flake-freshness](https://github.com/jimmyff/nixfiles/tree/main/scripts/flake-freshness) that checks my inputs and shows what needs updating. It compares my `flake.lock` versions against upstream, caches the results to avoid repeated `nix eval` calls.

I run it on system startup so I get a quick overview before deciding what to update. It's made managing multiple inputs a lot less of a chore.

## {{ image (src="stay-fresh.webp", alt="Splatoon characters Callie & Marie with the text 'Stay Fresh!'") }}

My entire Nix config, including other scripts like this, is available on GitHub: [github.com/jimmyff/nixfiles](https://github.com/jimmyff/nixfiles). Stay Fresh! 🦑

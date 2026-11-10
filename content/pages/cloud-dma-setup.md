---
route: /guides/cloud-dma-setup/
seoTitle: Cloud DMA Setup Guide | Hyper-V on Windows 10/11
metaDescription: Enable Hyper-V, size RAM and CPU, and finish Cloud DMA single-PC setup on Windows 10/11 before loading Caliber-compatible tooling from partner listings.
schemaTypes:
  - WebPage
  - BreadcrumbList
  - HowTo
layout: article
articlePublished: '2026-01-15'
heroImage:
  src: /images/caliber/caliber-snow-combat.webp
  alt: Caliber operators in a snow-covered industrial tactical zone
figures:
  - alt: Caliber urban combat scene illustrating supported Windows PC gameplay
    src: /images/caliber/caliber-urban-combat.webp
---

# Cloud DMA setup on a single PC

Use this walkthrough after you purchase a Cloud DMA lifetime license and before you launch Caliber-related tooling from a partner listing.

## Enable virtualization

Turn on Intel VT-x or AMD-V in firmware, then enable Hyper-V and core isolation features in Windows 10 or 11.

## Allocate resources

Reserve enough RAM and CPU threads for the host OS and the Hyper-V guest. Under-provisioning causes unstable DMA sessions.

## Optional hosting

Static server, GREENWARD, or AWS add-ons are configured outside this site. Budget and verify vendor instructions before going live.

## Verify before Caliber

Confirm the guest boots cleanly, then compare [Caliber pricing](/caliber-cheats-price/) and the [SARD guide](/guides/caliber-sard-anti-cheat/) for compatibility context.

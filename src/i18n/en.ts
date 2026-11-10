import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Caliber Cheats',
    domain: 'caliber-cheats.com',
    title: 'Caliber Cheats for PC | ESP, Aimbot & Plans',
    description:
      'Compare listed Caliber ESP, aimbot, radar and recoil features. Review $35/$150 plans, Cloud DMA requirements, and SARD anti-cheat context.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: '/#features', label: 'Features' },
    { href: '/caliber-esp/', label: 'Caliber ESP' },
    { href: '/caliber-aimbot/', label: 'Aimbot' },
    { href: '/caliber-cheats-price/', label: 'Pricing' },
    { href: '/caliber-cheats-review/', label: 'Review' },
    { href: '/guides/caliber-sard-anti-cheat/', label: 'SARD guide' },
    { href: '/faq/', label: 'FAQ' },
  ],
  hero: {
    status: 'Caliber — Windows 10 & 11 listings',
    eyebrow: 'Independent Caliber guides',
    titleLine1: 'Caliber Cheats',
    titleLine2: 'ESP, aimbot & radar',
    subtitle:
      'Listed Caliber ESP, aimbot, radar, and recoil modules for PC. Cloud DMA is sold separately and is required on supported builds—we do not promise undetected status.',
    ctaPrimary: 'Buy now',
    ctaDiscord: 'Compare plans',
    modesLabel: 'Supported OS',
    modes: ['Windows 10', 'Windows 11', 'Cloud DMA add-on'],
    metrics: [
      { label: 'Platform', strong: 'Windows PC' },
      { label: 'Plans', strong: '3' },
      { label: 'Currency', strong: 'USD' },
      { label: 'Market', strong: 'Worldwide' },
    ],
  },
  features: {
    eyebrow: 'Cheat features',
    title: 'Caliber modules you can review before checkout',
    subtitle:
      'Player ESP, aim assistance, radar, and recoil options from the current Caliber listing—no unrelated game bundles.',
    items: [
      {
        title: 'Enemy ESP',
        subtitle: 'Threat readouts',
        desc: 'Track enemies with boxes, skeletons, health state, and distance caps so you can read fights without guessing.',
        bullets: [
          'Enemy box, skeleton, and name tags',
          'Health bars and distance readouts',
          'Off-screen indicators where supported',
        ],
        tags: ['enemy esp', 'skeleton esp', 'health bars'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Loot ESP',
        subtitle: 'Rarity at a glance',
        desc: 'Highlight weapons and loot tiers so you spend less time searching the floor during runs.',
        bullets: ['Weapon rarity highlights', 'Pickup distance tags', 'Configurable loot filters'],
        tags: ['loot esp', 'rarity', 'pickups'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Soft aim',
        subtitle: 'Optional combat assist',
        desc: 'Configurable FOV and smoothing—leave modules off until you confirm status and accept combat risk.',
        bullets: ['Aim key and FOV sliders', 'Smoothing and bone selection', 'Visible checks where listed'],
        tags: ['soft aim', 'fov', 'combat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-2',
      },
      {
        title: 'Radar',
        subtitle: '2D awareness',
        desc: 'Compact radar beside ESP so you track threats and loot without covering the whole screen.',
        bullets: ['Enemy and loot blips', 'Adjustable range and zoom', 'Pairs with ESP toggles'],
        tags: ['radar', '2d overlay', 'awareness'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Recoil & spread',
        subtitle: 'Weapon handling',
        desc: 'Tune recoil and spread options around your loadout instead of fighting every gun differently.',
        bullets: ['Recoil control sliders', 'Spread reduction options', 'Per-weapon presets where supported'],
        tags: ['recoil', 'spread', 'weapons'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-5 lg:row-start-3',
      },
      {
        title: 'Compatibility',
        subtitle: 'Windows PC',
        desc: 'Windows 10 and 11 with the supported Steam or official client—confirm Cloud DMA notes before launch.',
        bullets: ['Windows 10 & 11 64-bit', 'Steam / official client', 'Review requirements guide first'],
        tags: ['windows', 'steam', 'requirements'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-3',
      },
      {
        title: 'Overlay options',
        subtitle: 'Readable HUD',
        desc: 'Stream-friendly overlay modes, combat toggles, and color sets keep the menu usable in long sessions.',
        bullets: ['Stream-proof overlay option', 'Combat mode toggles', 'Custom crosshair and colors'],
        tags: ['overlay', 'stream proof', 'hud'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Configuration',
        subtitle: 'Save what you use',
        desc: 'Menu keys, panic keys, and saveable profiles keep settings organized instead of enabling everything at once.',
        bullets: ['Custom menu and panic keys', 'Saveable configuration profiles', 'Visible and hidden color sets'],
        tags: ['configs', 'hotkeys', 'profiles'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'A Caliber–focused catalog—not a mixed-game marketplace',
    subtitle:
      'Plans, Cloud DMA, and HWID utilities stay on Caliber PC with listed features only and support you can reach before checkout.',
    usLabel: 'Caliber Cheats',
    otherLabel: 'Typical listing',
    rows: [
      {
        title: 'Caliber only',
        desc: 'Pricing, guides, and checkout paths stay on Caliber PC instead of bundling unrelated titles.',
      },
      {
        title: 'Listed features only',
        desc: 'We document ESP, radar, soft aim, and recoil options from the live listing—no invented automation extras.',
      },
      {
        title: 'Monthly and lifetime plans',
        desc: 'Pick $35 monthly (31-day) access or a $150 lifetime license. Cloud DMA and HWID are separate checkouts.',
      },
      {
        title: 'Status before launch',
        desc: 'Game and Windows updates can shift compatibility—read Support and requirements guides after patches.',
      },
      {
        title: 'Windows PC requirements',
        desc: 'Windows 10/11 on Steam or the official client. Cloud DMA Hyper-V setup is documented separately.',
      },
      {
        title: 'Support on the record',
        desc: 'Open Support with your order email, Windows build, and any loader or Hyper-V errors.',
      },
    ],
    metrics: [
      {
        value: '$35',
        title: 'Monthly plan',
        desc: '31-day Caliber cheat access billed in USD.',
      },
      {
        value: '$150',
        title: 'Lifetime plan',
        desc: 'One-time USD purchase for long-term cheat access while the product remains available.',
      },
      {
        value: '$50',
        title: 'Cloud DMA license',
        desc: 'Lifetime Hyper-V infrastructure license—add-ons priced separately.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to a configured overlay in',
    titleHighlight: 'three clear steps',
    intro:
      'Confirm compatibility, finish checkout, then follow delivery notes for Windows PC, Cloud DMA where required, and your saved cheat profile.',
    ctaPrimary: 'Compare plans',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: '/caliber-cheats-price/',
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Confirm status and requirements',
        desc: 'Review the PC requirements guide and Cloud DMA notes before you buy or launch Caliber.',
      },
      {
        step: 'Step 2',
        title: 'Choose a plan and complete checkout',
        desc: 'Select monthly, lifetime, Cloud DMA, or HWID utilities—each product has its own secure checkout.',
      },
      {
        step: 'Step 3',
        title: 'Configure ESP, radar, and keys',
        desc: 'Enable the modules you need, set hotkeys, and save a conservative profile before long sessions.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Built for Caliber on Windows PC.',
    subtitle: 'Confirm Steam or official client support and Cloud DMA prerequisites before launch.',
    items: ['Windows 10 & 11', 'Steam client', 'Official client', 'Cloud DMA option', 'HWID utility', 'Secure checkout', 'Setup guides', 'Email support'],
  },
  cheats: {
    eyebrow: 'Elite cheat',
    title: 'Your product Elite cheats',
    subtitle: 'Full ranked suite—map hack, scripts, bots, Skin Changer, and priority patch delivery.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Your product Elite',
        desc: 'Private secondary product tools build with Auto Farm Bot, Auto Kill Steal, Auto Dagon, Skin Changer and direct dev support.',
        features: ['Auto Farm Bot', 'Auto Kill Steal', 'Auto Dagon', 'Full map hack suite', 'Skin Changer', 'Priority patch queue'],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'Caliber products',
    subtitle: 'Main cheat plans, HWID Spoofer, and Cloud DMA license—three focused utilities for PC.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs—follow the portal setup guide before launching Your product.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC',
        subtitle: 'Unban & governance control',
        desc: 'All-in-one appeal workspace for Steam restrictions, Anti-cheat bans and security holds—custom workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Skin Changer',
        subtitle: 'Unlock every cosmetic locally',
        desc: 'Lightweight Skin Changer for hero outfits, weapon skins and rare variants—local preview without Steam store purchases.',
        features: ['Hero skin swap', 'Weapon & effect customizer', 'Arcana preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Placeholder blog intro — add articles when your content is ready.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'Placeholder blog article one',
        slug: 'placeholder-article-one',
        image: '/images/caliber/caliber-blog-overview.webp',
        desc: 'Short excerpt placeholder for the first sample blog post.',
        date: 'Jan 1, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Placeholder blog article two',
        slug: 'placeholder-article-two',
        image: '/images/caliber/caliber-supply-interaction.webp',
        desc: 'Short excerpt placeholder for the second sample blog post.',
        date: 'Jan 2, 2026',
        readTime: '4 min read',
      },
      {
        tag: 'Updates',
        title: 'Placeholder blog article three',
        slug: 'placeholder-article-three',
        image: '/images/caliber/caliber-snow-combat.webp',
        desc: 'Short excerpt placeholder for the third sample blog post.',
        date: 'Jan 3, 2026',
        readTime: '3 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Scripts', title: 'Combos that adapt to your hero', desc: 'Auto Combo, Orbwalker, Smart Cast and Delay Setting in one scripts tab.' },
      { num: '02', label: 'Vision', title: 'Map hack that stays readable', desc: 'Filter by distance, team color, ward type and smoke alert sensitivity.' },
      { num: '03', label: 'Minimap', title: 'Runes and rotates on lock', desc: 'Rune timers, enemy hints and minimap hack on a compact overlay.' },
      { num: '04', label: 'Heroes', title: 'Per-hero script profiles', desc: 'Save Hero , Hero , Hero and support scripts and swap with hotkeys.' },
      { num: '05', label: 'Bots', title: 'Farm & lane automation', desc: 'Auto Farm Bot, stack timer and courier manager for efficient farming.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Separate ranked, Turbo and casual presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved config.',
    titleAfter: '',
    subtitle:
      'A straight path from reviewing Caliber compatibility to a profile you can reuse every session.',
    ctaLabel: 'Compare plans',
    ctaHref: '/caliber-cheats-price/',
    ctaSecondary: 'Read setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check requirements',
        desc: 'Read the PC requirements and Cloud DMA guides after any Caliber or Windows update.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose a plan',
        desc: 'Select monthly, lifetime, Cloud DMA, or HWID Spoofer—each with its own checkout link.',
      },
      {
        num: '03',
        phase: 'Setup',
        title: 'Follow Windows instructions',
        desc: 'Use delivery email notes for loader access, Hyper-V where listed, and supported clients.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save a conservative profile',
        desc: 'Enable readable ESP and radar options first, then save configs once settings feel stable.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Your product plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you queue ranked.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe script delays and map hack ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or hero configs? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Support for checkout help, Cloud DMA setup & licenses',
    subtitle: 'Use this support page for checkout questions, Cloud DMA setup, and license delivery after purchase.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about monthly or lifetime plans and Cloud DMA.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: "We're here for checkout, Cloud DMA setup, and license delivery questions.",
        linkLabel: 'support@caliber-cheats.com',
        href: 'mailto:support@caliber-cheats.com',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Plans, features, Cloud DMA, and Windows requirements—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Setup guides',
        desc: 'Hyper-V, RAM, and client compatibility for Cloud DMA.',
        linkLabel: 'Read Hyper-V setup steps',
        href: '/guides/cloud-dma-setup/',
      },
    ],
    ticketTitle: 'Support: Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout via our secure partner.' },
      { title: 'Platform', desc: 'Windows 10 or 11, Caliber client (Steam or Official), and Cloud DMA status.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader, Hyper-V, or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Your product cheats are online?',
        a: 'The live status banner is on caliber-cheats.com and in the Discord #status channel. Always check after a Your product or Anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Your product.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party product utilities?',
        a: 'Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Your product via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Skin Changer live at caliber-cheats.com/products/dota-2-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    explore: 'Explore',
    tagline:
      'Caliber ESP, aimbot, and radar guides plus Cloud DMA setup resources at caliber-cheats.com.',
    exploreLinks: [
      { href: '/#features', label: 'Feature overview', ariaLabel: 'Features' },
      { href: '/caliber-cheats-price/', label: 'Cheat plans', ariaLabel: 'Pricing' },
      { href: '/#products', label: 'All products', ariaLabel: 'Products' },
      { href: '/guides/cloud-dma-setup/', label: 'Setup walkthrough', ariaLabel: 'Setup guide' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Caliber Cheats — guides, pricing & cloud',
      description:
        'Caliber Cheats publishes PC feature guides, Cloud DMA setup, pricing, and support resources at caliber-cheats.com.',
      sections: [
        {
          heading: 'Caliber Cheats: Who we are',
          paragraphs: [
            'Caliber Cheats is an independent resource for PC players exploring soft aim, enemy and loot ESP, radar, and related configuration options. We publish pricing, system requirements, and Cloud DMA setup guides so you can evaluate the product before checkout.',
            'We are not affiliated with, endorsed by, or sponsored by the game publisher or its licensors. Product names are used for identification only.',
            'Caliber cheats content on this site explains supported features, plan lengths, and the separate Cloud DMA license—without claiming official publisher approval.',
            'Listed offers on this site include a $35 monthly cheat plan, a $150 lifetime cheat plan, and a $50 lifetime Cloud DMA license, each with separate checkout flows.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Caliber cheat plans (monthly and lifetime), the Cloud DMA infrastructure license, Hyper-V setup steps, and pre-purchase FAQ. Content is updated when requirements or checkout flows change.',
            'Review the system requirements and Cloud DMA pages before purchase so your Windows PC matches the listed configuration.',
            'Caliber cheats guides focus on Windows 10 and 11, supported clients, and realistic setup order: requirements, Cloud DMA, then cheat checkout.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, Cloud DMA, checkout, or license delivery are handled through email support. Include your order email, Windows version, and any loader or Hyper-V error text when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy — analytics, cookies & Caliber Cheats',
      description:
        'Privacy at Caliber Cheats: how we handle analytics, cookies, and contact data when you use caliber-cheats.com.',
      sections: [
        {
          heading: 'Privacy: information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on caliber-cheats.com.',
            'Privacy practices here apply only to pages hosted on caliber-cheats.com, not to third-party checkout or payment processors.',
            'If you email support@caliber-cheats.com, we process your message to answer checkout, Cloud DMA, or license questions—not for marketing lists.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
            'We do not sell personal data. Privacy-related requests should include enough detail for us to locate your message or account reference from checkout.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
            'Privacy controls in your browser also limit measurement cookies while still allowing you to read public pages.',
            'We do not use cookies to store checkout credentials; payment data stays on the external checkout provider.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions — purchase, license, refund policy details',
      description:
        'Purchase, license, refund, and use terms for Caliber cheat and Cloud DMA products at caliber-cheats.com.',
      sections: [
        {
          heading: 'Terms: agreement and purchases',
          paragraphs: [
            'Last updated: November 2026. By using caliber-cheats.com or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Caliber cheat software (monthly or lifetime plans) and a separate Cloud DMA infrastructure license, delivered through external checkout and license delivery flows for supported Windows PCs.',
            'Feature lists on pricing and product pages describe what is included at the time of purchase. Modules or requirements can change when the game or supported configuration updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. caliber-cheats.com does not process or store payment card numbers.',
            'After purchase, follow instructions from your order email and the Cloud DMA setup guide before launching Caliber.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. Device or HWID limits depend on your plan and are enforced by the checkout provider.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes unless required by applicable law. We do not refund change-of-mind purchases, account penalties, or issues caused by ignoring setup guides or unsupported hardware.',
            'If the product does not work as described on a supported setup—Windows 10/11, listed client, Cloud DMA configured per the guide—contact us through the Support page with your order email, Windows version, and screenshots or exact error text.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Caliber can conflict with game updates and anti-cheat or publisher enforcement. You use this software at your own risk, including possible account action.',
            'Review requirements and setup guides before every session, especially after game patches.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or setup questions, use the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Caliber Cheats Support',
      description:
        'Get support for checkout, Cloud DMA setup, and license delivery at caliber-cheats.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'View plans',
    browseCheatsMobile: 'View plans',
    homeAria: 'Caliber Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Caliber Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
};

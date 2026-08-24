import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { links } from "./constants";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Finalist",
  tagline: "Run scrims and tournaments your community actually shows up for",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // The site is served from the custom domain, not the Pages default. This has
  // to be the domain people actually land on: Docusaurus builds every canonical
  // URL, og:url and og:image from it, and pointing them at finalistbot.github.io
  // while the content lives at docs.finalist.live splits the two hosts in search.
  url: "https://docs.finalist.live",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "finalistbot", // Usually your GitHub org/user name.
  projectName: "finalistbot.github.io", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Font hosts are on separate origins and block first paint; warm the
  // connections while the HTML is still parsing.
  headTags: [
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://api.fontshare.com" },
    },
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  // Brand faces, the same pairing and the same sources as the app: Clash Display
  // for headings (Fontshare — there is no npm package), Inter for body.
  // src/css/custom.css points --ifm-heading-font-family at them.
  stylesheets: [
    {
      href: "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap",
      type: "text/css",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/finalistbot/finalistbot.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/finalistbot/finalistbot.github.io/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/finalist.png",
    colorMode: {
      // The app is dark-first — the marketing site is hardcoded dark and can't
      // even be switched — so the docs open dark to match. A visitor whose OS
      // says light still gets light; this only decides the no-preference case.
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Finalist",
      logo: {
        alt: "Finalist Logo",
        src: "img/finalist.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        {
          href: links.supportServer,
          label: "Support Server",
          position: "right",
        },
        {
          href: links.botInvite,
          label: "Invite Bot",
          position: "right",
        },
        {
          href: links.github,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: links.supportServer,
            },
            {
              label: "Github",
              href: links.github,
            },
            {
              label: "Youtube",
              href: links.youtube,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Finalist.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

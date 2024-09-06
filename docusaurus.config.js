// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

//TODO: modify page's font-size


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Andy Walking",
  // tagline: "Dinosaurs are cool",
  // favicon: "img/favicon.ico", 

  // Set the production url of your site here
  url: "https://southandy.github.io",
  baseUrl: "/note/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "southAndy", // Usually your GitHub org/user name.
  projectName: "note", // Usually your repo name.
  deploymentBranch:'gh-pages',

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Andy Walking",
        //todo add logo
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "techNoteSidebar",
            position: "left",
            label: "Tech Notes",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/southAndy",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      // code block theme
      prism: {
        theme: prismThemes.dracula, // lightTheme's setting
        darkTheme: prismThemes.dracula, // darkTheme's setting
      },
      editCurrentVersion:false
    }),
};

export default config;

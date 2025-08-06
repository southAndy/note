// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Andy Walking",
  // tagline: "Dinosaurs are cool",
  favicon: "img/andy-walking-logo.png", 

  // Set the production url of your site here
  url: "https://www.andy-walking.dev/",
  baseUrl: "/",

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
  // i18n: {
  //   defaultLocale: "zh-Hans",
  //   locales: ["zh-Hans", "en"],
  // },
  scripts:[
    {
      src:'https://kit.fontawesome.com/acf9539b1e.js'

    },
  ],
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
      // image: "img/andy-walking-logo.svg",
      navbar: {
        title: "Andy Walking",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/andy-walking-logo.svg",
        // },
        items: [
          {
            type: "docSidebar",
            sidebarId: "techNoteSidebar",
            position: "left",
            label: "Tech Notes",
          },
          {
            href: "https://github.com/southAndy",
            label: "GitHub",
            position: "right",
          },
          {
            href:'https://www.linkedin.com/in/yi-yang-t-2124491a2/',
            label:'Linkedin',
            position:'right'
          }
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()}, Inc. Built with Docusaurus.`,
      },
      // code block theme
      prism: {
        theme: prismThemes.duotoneLight, // lightTheme's setting
        darkTheme: prismThemes.duotoneDark, // darkTheme's setting
      },
      editCurrentVersion:false
    }),
};

export default config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type { import('@docusaurus/types').DocusaurusConfig } */
const config = {
  title: '@noodl/core',
  tagline: 'Neural Object Oriented Dynamic Language',
  url: 'https://noodljs.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  organizationName: 'aitmed',
  projectName: '@noodl/core',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'http://gitlab.aitmed.com/pfftdammitchris/aitmed-noodl-web.git',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '@noodl/core',
        logo: {
          alt: '@noodl/core logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'api/modules',
            position: 'left',
            label: 'API Reference',
          },
          {
            type: 'doc',
            docId: 'handbook',
            position: 'left',
            label: 'Handbook',
          },
          {
            href: 'https://aitmed.com',
            label: 'AiTmed',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright ?? ${new Date().getFullYear()} @noodl/core`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config

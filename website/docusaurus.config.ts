import {themes as prismThemes} from 'prism-react-renderer';

const algoliaConfig = require('./algolia.config.json');
const googleAnalyticsConfig = require('./google-analytics.config.json');

const lightCodeTheme = prismThemes.nightOwlLight;
const darkCodeTheme = prismThemes.nightOwl;

const isEmptyObject = (obj) => Object.keys(obj).length === 0;

const isSearchable = !isEmptyObject(algoliaConfig);
const hasGoogleAnalytics = !isEmptyObject(googleAnalyticsConfig);
const googleAnalytics = hasGoogleAnalytics ? { 'googleAnalytics': googleAnalyticsConfig } : null;

const websiteConfig = {
  title: 'sbt-docusaur',
  tagline: 'sbt plugin for Docusaurus',
  url: 'https://sbt-docusaur.kevinly.dev',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'Kevin-Lee', // Usually your GitHub org/user name.
  projectName: 'sbt-docusaur', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java', 'scala'],
    },
    navbar: {
      title: 'sbt-docusaur',
      logo: {
        alt: 'sbt-docusaur Logo',
        src: 'img/sbt-docusaur-logo-32x32.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/Kevin-Lee/sbt-docusaur',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Config',
              to: 'docs/config/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Kevin-Lee/sbt-docusaur',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} sbt-docusaur, Website Built with Docusaurus.<br /><div>One icon made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        ...googleAnalytics,
      },
    ],
  ],
};

if (isSearchable) {
  websiteConfig['themeConfig']['algolia'] = algoliaConfig;
}

module.exports = websiteConfig;

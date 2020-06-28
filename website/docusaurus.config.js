const algoliaConfig = require('./algolia.config.json');

const isEmptyObject = obj => {
  for (field in obj) return false;
  return true;
};

const isSearchable = !isEmptyObject(algoliaConfig)

const websiteConfig = {
  title: 'sbt-docusaur',
  tagline: 'sbt plugin for Docusaurus',
  url: 'https://kevin-lee.github.io',
  baseUrl: '/sbt-docusaur/',
  favicon: 'img/favicon.png',
  organizationName: 'Kevin-Lee', // Usually your GitHub org/user name.
  projectName: 'sbt-docusaur', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['scala'],
    },
    navbar: {
      title: 'sbt-docusaur',
      logo: {
        alt: 'sbt-docusaur Logo',
        src: 'img/sbt-docusaur-logo-32x32.png',
      },
      links: [
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
      copyright: `Copyright © ${new Date().getFullYear()} sbt-docusaur, Website Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

if (isSearchable) {
  websiteConfig['themeConfig']['algolia'] = algoliaConfig;
}

module.exports = websiteConfig;

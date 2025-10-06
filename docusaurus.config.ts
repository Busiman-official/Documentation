import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Busiman - Business management',
  tagline: 'All-in-one business management platform that helps you handle inventory, departments, and daily operations with real-time updates and notifications. ',
  favicon: 'https://lh3.googleusercontent.com/p/AF1QipNdAaM1zzLbdDepo_pZKBHgKJZQKSd3QDXF4pOJ=s1360-w1360-h1020-rw',
  future: {
    v4: true,
  },
  url: 'https://Busiman-official.github.io',
  baseUrl: '/',
  organizationName: 'Busiman-official',
  projectName: 'documentation',
  onBrokenLinks: 'throw',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          lastVersion: '1.0',
          onlyIncludeVersions: ['1.0'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Busiman',
      logo: {
        alt: 'Busiman Logo',
        src: 'https://lh3.googleusercontent.com/p/AF1QipNdAaM1zzLbdDepo_pZKBHgKJZQKSd3QDXF4pOJ=s1360-w1360-h1020-rw',
      },
      items: [
        { href:"https://busiman.in", label: 'Go to Busiman', position: 'right' },
        {
          href: 'https://github.com/Busiman-official/documentation',
          label: 'Contribute',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'X',
    //           href: 'https://x.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

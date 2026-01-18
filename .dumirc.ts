import { defineConfig } from 'dumi';

export default defineConfig({
  logo: '/logo.png',
  locales: [{ id: 'en-US', name: 'English' }],
  resolve: {
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'React Render Controls',
    description:
      'A lightweight, headless React component library for declarative conditional rendering, pattern matching, and list mapping.',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
      {
        title: 'Components',
        link: '/components',
      },
      {
        title: 'Playground',
        link: '/playground',
      },
      {
        title: 'API',
        link: '/api',
      },
    ],
    nprogress: true,
  },
  styles: [
    `
    .dumi-default-sidebar {
      --dumi-sidebar-width: 320px !important;
      width: 320px !important;
      min-width: 320px !important;
    }

    .dumi-default-header-left {
      width: 320px !important;
    `,
  ],
});

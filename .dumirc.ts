import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    { id: 'en-US', name: 'English' },
  ],
  resolve: {
    codeBlockMode: 'passive',
  },
  themeConfig: {
    name: 'React Render Controls',
    description: 'A lightweight, headless React component library for declarative conditional rendering, pattern matching, and list mapping.',
    nav: [
      {
        title: 'Guide',
        link: '/guide/getting-started',
      },
      {
        title: 'Components',
        link: '/components/render-list',
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
      --dumi-sidebar-width: 280px !important;
      width: 280px !important;
      min-width: 280px !important;
    }
    `,
  ],
});

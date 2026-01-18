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
        children: [
          { title: 'RenderList', link: '/components/render-list' },
          { title: 'RenderIf', link: '/components/render-if' },
          { title: 'RenderMatch', link: '/components/render-match' },
          { title: 'RenderSwitch', link: '/components/render-switch' },
        ],
      },
      {
        title: 'API',
        link: '/api',
      },
    ],
  },
});

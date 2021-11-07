
import chalk from 'chalk';

import type { ScaffoldInfo } from './types';

export const scaffoldInfos = {
  // --- GitHub Template ---
  github: {
    title: 'Template',
    link: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository',
    description: 'Custom template based on github repository.',
  },

  // --- Web App ---
  vite: {
    title: 'Vite',
    link: 'https://vitejs.dev/',
    description: 'Next Generation Frontend Tooling',
  },
  cra: {
    title: 'Create React App',
    link: 'https://create-react-app.dev/',
    description: 'Set up a modern web app by running one command.',
  },
  umi: {
    title: 'UmiJS',
    link: 'https://umijs.org/',
    description: '🍙 Extensible enterprise-level front-end application framework.',
  },
  vue: {
    title: 'Vue.js',
    link: 'https://vuejs.org/',
    description: 'The Progressive JavaScript Framework',
  },
  svelte: {
    title: 'Svelte',
    link: 'https://svelte.dev/',
    description: 'Cybernetically enhanced web apps',
  },
  angular: {
    title: 'Angular',
    link: 'https://angular.io/',
    description: 'The modern web developer\'s platform',
  },

  // --- Cross Platform ---
  // --- mini
  taro: {
    title: 'Taro',
    link: 'https://github.com/NervJS/taro',
    description: '多端统一开发解决方案',
  },
  uni: {
    title: 'uni-app',
    link: 'https://uniapp.dcloud.io',
    description: '一个使用 Vue.js 开发跨平台应用的前端框架',
  },
  // kbone: {
  //   title: 'Kbone',
  //   link: 'https://github.com/Tencent/kbone',
  //   description: '一个致力于微信小程序和 Web 端同构的解决方案',
  // },
  // --- electron
  'electron-quick-start': {
    title: 'electron-quick-start',
    link: 'https://github.com/electron/electron-quick-start',
    description: 'Clone to try a simple Electron app',
  },
  'electron-quick-start-typescript': {
    title: 'electron-quick-start',
    link: 'https://github.com/electron/electron-quick-start-typescript',
    description: 'Clone to try a simple Electron app (in TypeScript)',
  },

  // --- Extension ---
  vscode: {
    title: 'Extension API',
    link: 'https://code.visualstudio.com/api',
    description: 'Visual Studio Code has a rich extension API. Learn how to create your own extensions for VS Code.',
  },
  chrome: {
    title: 'chrome-extension-quick-start',
    link: 'https://github.com/metahot/chrome-extension-quick-start',
    description: 'Clone to try a simple chrome extension',
  },
} as ScaffoldInfo;

export function aboutScaffold(type: string) {
  const data = scaffoldInfos[type];
  if (!data) return;
  return console.log(chalk.gray`
${'='.repeat(12)} More ${'='.repeat(12)}
[${data.title}](${chalk.cyan(data.link)})
${data.description}
`);
}
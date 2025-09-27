import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 手动配置侧边栏结构
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '快速开始',
      items: [
        'getting-started/interface',
        'getting-started/basic-usage',
      ],
    },
    {
      type: 'category',
      label: '功能特性',
      items: [
        'features/themes',
        'features/ai-services',
        'features/content-check',
        'features/cloud-storage',
      ],
    },
    {
      type: 'category',
      label: '高级功能',
      items: [
        'advanced/preview-mode',
        'advanced/text-selection',
      ],
    },
  ],
};

export default sidebars;

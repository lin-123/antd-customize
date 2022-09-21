import { defineConfig } from 'dumi';

const logo =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

export default defineConfig({
  // mfsu: {}, 不好用， 现在经常有缓存
  favicon: logo,
  logo: logo,
  outputPath: 'docs-dist',
  mode: 'doc',
  dynamicImport: {},
  extraBabelPlugins: [
    // ['import', { libraryName: 'antd', style: true }, 'antd'],
  ],
  // exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // more config: https://d.umijs.org/config
});

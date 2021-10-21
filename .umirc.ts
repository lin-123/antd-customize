import { defineConfig } from 'dumi';
import path from 'path';
import fs from 'fs';

const logo =
  'http://storage.360buyimg.com/web-uc-static/find-site/rainbow-logo-nofillcolor.svg?Expires=3740809762&AccessKey=XOZfrjeQBISYqdZa&Signature=K0m39dZFbhUtDfguTpgLeiM69Ng%3D';
export default defineConfig({
  mfsu: {},
  title: 'find-react主题开发',
  favicon: logo,
  logo: logo,
  outputPath: 'docs-dist',
  mode: 'doc',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@jd/find-react',
        customStyleName: (name) => {
          const cssPath = path.resolve(__dirname, `src/components/${name}`);
          if (fs.existsSync(cssPath)) {
            return cssPath;
          }
          return `@jd/find-react/lib/${name}/style`;
        },
      },
      '@jd/find-react',
    ],
  ],
  lessLoader: {
    modifyVars: {
      hack: `true;@import "${path.resolve(
        __dirname,
        'src/style/index.less',
      )}";`,
    },
  },
  // exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // more config: https://d.umijs.org/config
});

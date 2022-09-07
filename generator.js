const fs = require('fs');
const antd = require('antd');
const lodash = require('lodash');

const componentArr = Object.keys(antd);

const generate = (componentName) => {
  const content = `import { ${componentName} } from 'antd';
import 'antd/es/${lodash.kebabCase(componentName)}/style';
import './index.less';

export default ${componentName};\r\n`;

  // 遍历生成代理component组件
  fs.mkdir(
    `./src/components/${lodash.kebabCase(componentName)}`,
    { recursive: true },
    (err) => {
      if (err) return false;
      // 写content，往src/${componentName}/index.js写
      fs.writeFile(
        `./src/components/${lodash.kebabCase(componentName)}/index.tsx`,
        content,
        function (err) {
          if (err) {
            console.log(err);
          }
        },
      );
      fs.writeFile(
        `./src/components/${lodash.kebabCase(componentName)}/index.less`,
        '',
        function (err) {
          if (err) {
            console.log(err);
          }
        },
      );
    },
  );
};

let componentList = `import './style';\r\n`;
componentArr.map((item) => {
  generate(item);
  // 拼接组件导出目录
  componentList += `\r\nimport ${item} from './components/${lodash.kebabCase(
    item,
  )}';\r\nexport { ${item} };\r\n`;
});

fs.writeFile('./src/index.ts', componentList, function (err) {
  if (err) {
    console.log('生成目录失败');
  }
});

const fs = require('fs');
const path = require('path');
const antd = require('antd');
const lodash = require('lodash');

const componentArr = Object.keys(antd);

// 递归创建目录 异步方法
function mkdirs(dirname, callback) {
  fs.exists(dirname, function (exists) {
    if (exists) {
      callback();
    } else {
      console.log(path.dirname(dirname));
      mkdirs(path.dirname(dirname), function () {
        fs.mkdir(dirname, callback);
        console.log(
          '在' + path.dirname(dirname) + '目录创建好' + dirname + '目录',
        );
      });
    }
  });
}

const generate = (componentName) => {
  const content = `import { ${componentName} } from 'antd';
import 'antd/es/${lodash.kebabCase(componentName)}/style';
import './index.less';

export default ${componentName};`;

  // 遍历生成代理component组件
  mkdirs(`./src/component/${lodash.kebabCase(componentName)}`, () => {
    // 写content，往src/${componentName}/index.js写
    fs.writeFile(
      `./src/component/${lodash.kebabCase(componentName)}/index.tsx`,
      content,
      function (err) {
        if (err) {
          console.log(err);
        }
      },
    );
    fs.writeFile(
      `./src/component/${lodash.kebabCase(componentName)}/index.less`,
      '',
      function (err) {
        if (err) {
          console.log(err);
        }
      },
    );
  });
};

let componentList = `import './style';\r\n`;
componentArr.map((item) => {
  generate(item);
  // 拼接组件导出目录
  componentList += `\r\nimport ${item} from './component/${lodash.kebabCase(
    item,
  )}';\r\nexport { ${item} };\r\n`;
});

fs.writeFile('./src/index.ts', componentList, function (err) {
  if (err) {
    console.log('生成目录失败');
  }
});

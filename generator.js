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
  import 'antd/es/${lodash.kebabCase(componentName)}/style/index.js';
  export default ${componentName};`;

  mkdirs(`./src/component/${lodash.kebabCase(componentName)}`, () => {
    // 写content，往src/${componentName}/index.js写
    fs.writeFile(
      `./src/component/${lodash.kebabCase(componentName)}/index.js`,
      content,
      function (err) {
        if (err) {
          console.log(err);
        }
      },
    );
  });
};

componentArr.map((item) => {
  generate(item);
});

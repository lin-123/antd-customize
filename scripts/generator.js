/**
 * 自动初始化代理组件库
 *
 */
const fs = require('fs');
const antd = require('antd');
const lodash = require('lodash');
const { argv } = require('process');

// 是否重写
// const overwrite = argv.overwrite || false

const generate = async (componentName, filename) => {
  const pathPrefix = `./src/${lodash.kebabCase(componentName)}`;

  // 遍历生成代理component组件
  await fs.mkdirSync(pathPrefix);
  await fs.writeFileSync(`${pathPrefix}/index.tsx`, `import ${componentName} from 'antd/es/${filename}';
import 'antd/es/${filename}/style';
import './index.less';

export default ${componentName};
  `);

  await fs.writeFileSync(`${pathPrefix}/index.less`, '// todo');
};

async function genMain() {
  const exists = await fs.readdirSync('src');
  const exclude = exists.reduce((pre, cur) => Object.assign(pre, { [cur]: true }), {});
  // 过滤掉已生成文件
  const compnentList = Object.keys(antd).filter(componentName => !exclude[lodash.kebabCase(componentName)]);

  const main = compnentList.map(componentName => {
    const filename = lodash.kebabCase(componentName);
    generate(componentName, filename);

    // 拼接组件导出目录
    return `export { default as ${componentName} } from '/components/${filename};`;
  }).join('\r\n');

  await fs.appendFileSync('./src/index.ts', main);

  console.log('初始化完成', compnentList);
}

genMain();

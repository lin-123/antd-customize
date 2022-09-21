/**
 * 自动初始化代理组件库
 *
 * 命令：
 *    node scripts/generator.js [overwrite]
 *
 *    overwrite 代表是否写原初始化内容
 */
const fs = require('fs');
const antd = require('antd');
const lodash = require('lodash');
const { argv } = require('process');

// 是否重写
const overwrite = argv.slice(2).includes('overwrite') || false;

const generate = async (componentName, filename) => {
  const pathPrefix = `./src/${lodash.kebabCase(componentName)}`;

  if (overwrite) {
    const dirExist = await fs.existsSync(pathPrefix);
    if (dirExist) {
      await fs.rmdirSync(pathPrefix);
    }
  }
  // 遍历生成代理component组件
  await fs.mkdirSync(pathPrefix);
  await fs.writeFileSync(
    `${pathPrefix}/index.tsx`,
    `import ${componentName} from 'antd/es/${filename}';
import 'antd/es/${filename}/style';
import './index.less';

export default ${componentName};
  `,
  );

  await fs.writeFileSync(`${pathPrefix}/index.less`, '// todo');
};

async function genMain() {
  const exists = overwrite ? [] : await fs.readdirSync('src');
  console.log(exists);
  const exclude = exists.reduce(
    (pre, cur) => Object.assign(pre, { [cur]: true }),
    {},
  );
  // 过滤掉已生成文件
  const compnentList = Object.keys(antd).filter(
    (componentName) => !exclude[lodash.kebabCase(componentName)],
  );

  const main = compnentList
    .map((componentName) => {
      const filename = lodash.kebabCase(componentName);
      generate(componentName, filename);

      // 拼接组件导出目录
      return `export { default as ${componentName} } from './${filename}';`;
    })
    .join('\r\n');

  const mainPath = './src/index.ts';
  if (overwrite) {
    await fs.writeFileSync(mainPath, ["import './style';", main].join('\r\n'));
  } else {
    await fs.appendFileSync(mainPath, main);
  }

  console.log('初始化完成', compnentList);
}

genMain();

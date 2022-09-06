export default {
  esm: {
    input: 'src', // 默认编译目录
    platform: 'browser', // 默认构建为 Browser 环境的产物
    output: 'es',
  },
  umd: {
    output: 'dist',
  },
};

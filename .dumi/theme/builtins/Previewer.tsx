import React from 'react';
import Previewer from 'dumi-theme-default/es/builtins/Previewer';
import { kebabCase } from 'lodash';

const antBaseUrl = 'https://ant-design.gitee.io/components';
export default (props) => {
  // 跳转到 antd 的对于链接
  const { title } = props;
  const demoUrl = title ? `${antBaseUrl}/${kebabCase(title)}-cn` : antBaseUrl;

  return (
    <Previewer {...props} hideActions={['CSB', 'RIDDLE']} demoUrl={demoUrl} />
  );
};

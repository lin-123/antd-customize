import React from 'react';
import Layout from 'dumi-theme-default/es/layout';
import styles from './index.less';

export default ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <div className={styles['preview-wrapper']}>{children}</div>
    </Layout>
  );
};

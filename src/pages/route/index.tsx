import Layout from '@/components/Layout';

import * as styles from './styles.css.ts';

const RoutePage = () => {
  return (
    <Layout bg="#FFFFFF" menu={false}>
      <img className={styles.map} src="/static/image_map.png" alt="map" />

      <div className={styles.root}>
        <div className={styles.sheet}>asdf</div>
      </div>
    </Layout>
  );
};

export default RoutePage;

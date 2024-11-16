import { Link } from 'react-router-dom';

import SearchIcon from '@/assets/icons/SearchIcon.tsx';
import Layout from '@/components/Layout';
import { rem } from '@/utils/pxto.ts';

import * as styles from './styles.css.ts';

const RoutePage = () => {
  return (
    <Layout bg="#FFFFFF" menu={false}>
      <img className={styles.map} src="/static/image_map.png" alt="map" />

      <div className={styles.inputRoot}>
        <div className={styles.inputContainer}>
          <div className={styles.search}>
            <SearchIcon />
            <p className={styles.accentText}>어디로 이동하시겠어요?</p>
          </div>
        </div>
      </div>

      <div className={styles.root}>
        <div className={styles.sheet}>
          <div className={styles.sectionBetween}>
            <p className={styles.sectionTitle}>경로 및 노선 선택</p>
            <p className={styles.sectionSubtitle}>소요시간 짧은 순</p>
          </div>

          <Link to={'/?ticket=1'}>
            <img
              className={styles.route}
              style={{ marginTop: rem(24) }}
              src="/static/image_route1.png"
              alt="Route1"
            />
          </Link>
          <img
            className={styles.route}
            style={{ marginTop: rem(16) }}
            src="/static/image_route2.png"
            alt="Route2"
          />
        </div>
      </div>
    </Layout>
  );
};

export default RoutePage;

import { Link } from 'react-router-dom';

import Layout from '@/components/Layout';
import Search from '@/components/Search';
import { rem } from '@/utils/pxto.ts';

import * as styles from './styles.css.ts';
import FilterAltIcon from '@/assets/icons/FilterAltIcon.tsx';

const RoutePage = () => {
  return (
    <Layout bg="#FFFFFF" menu={false}>
      <img className={styles.map} src="/static/image_map.png" alt="map" />

      <div className={styles.fixed} style={{ top: rem(48), bottom: 'auto' }}>
        <div className={styles.searchContainer}>
          <Search />
        </div>
      </div>

      <div className={styles.fixed} style={{ top: 'auto' }}>
        <div className={styles.sheet}>
          <div className={styles.sheetHeader}>
            <p className={styles.sheetHeaderTitle}>경로 및 노선 선택</p>
            <p className={styles.sheetHeaderSubTitle}>
              소요시간 짧은 순
              <FilterAltIcon size="12px" />
            </p>
          </div>

          <Link to={'/?ticket=1'}>
            <img
              className={styles.route}
              style={{ marginTop: rem(24) }}
              src="/static/image_route1.svg"
              alt="Route1"
              draggable={false}
            />
          </Link>
          <img
            className={styles.route}
            style={{ marginTop: rem(16) }}
            src="/static/image_route2.svg"
            alt="Route2"
            draggable={false}
          />
        </div>
      </div>
    </Layout>
  );
};

export default RoutePage;

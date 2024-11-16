import { Link } from 'react-router-dom';
import ApartmentIcon from '@/assets/icons/ApartmentIcon.tsx';
import CalendarClockIcon from '@/assets/icons/CalendarClockIcon.tsx';
import ChevronForwardIcon from '@/assets/icons/ChevronForwardIcon.tsx';
import DoorOpenIcon from '@/assets/icons/DoorOpenIcon.tsx';
import SearchIcon from '@/assets/icons/SearchIcon.tsx';
import Layout from '@/components/Layout';
import MovePass from '@/pages/dashboard/MovePass';
import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

import * as styles from './styles.css.ts';

const DashboardPage = () => {
  const query = new URLSearchParams(window.location.search);
  const ticket = query.get('ticket');

  return (
    <Layout>
      <section
        style={{
          paddingInline: theme.sizes.appInlinePadding,
          marginTop: rem(32),
        }}
      >
        <p className={styles.sectionTitle}>
          김이동님,
          <br />
          오늘도 즐거운 하루 되세요!
        </p>

        <Link to={'/route'} className={styles.search}>
          <SearchIcon />
          <p className={styles.accentText}>어디로 이동하시겠어요?</p>
        </Link>
      </section>

      <section
        style={{
          paddingInline: theme.sizes.appInlinePadding,
          marginTop: rem(24),
        }}
      >
        <p className={styles.sectionTitle}>즉시 탑승</p>
        <div style={{ display: 'flex', marginTop: rem(16), gap: rem(12) }}>
          <div className={styles.card}>
            <ApartmentIcon color={theme.colors.primary} />
            <p className={styles.cardSubTitle}>회사로</p>
            <h3 className={styles.cardTitle}>호계사거리</h3>
          </div>
          <div className={styles.card}>
            <DoorOpenIcon color={theme.colors.primary} />
            <p className={styles.cardSubTitle}>집으로</p>
            <h3 className={styles.cardTitle}>흥덕중심상업지구</h3>
          </div>
        </div>

        <div className={styles.cardHorizon} style={{ marginTop: rem(12) }}>
          <CalendarClockIcon color={theme.colors.secondary} />
          <div className={styles.cardContent}>
            <p className={styles.accentText}>탑승 예약</p>
            <div>
              <p className={styles.accentText}>
                <span style={{ fontWeight: 400 }}>출발</span> 07:30
              </p>
              <p className={styles.accentText}>
                <span style={{ fontWeight: 400 }}>복귀</span> 18:30
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          paddingInline: theme.sizes.appInlinePadding,
          marginTop: rem(32),
        }}
      >
        <div className={styles.sectionBetween}>
          <p className={styles.sectionTitle}>정기 이용권</p>
          <p className={styles.sectionSubtitle}>
            갱신 및 변경 <ChevronForwardIcon color="rgba(0, 0, 0, 0.7)" size="16px" />
          </p>
        </div>
        {ticket && <MovePass />}
      </section>
    </Layout>
  );
};

export default DashboardPage;

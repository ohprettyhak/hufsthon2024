import ArrowRangeIcon from '@/assets/icons/ArrowRangeIcon.tsx';
import TransitTicketIcon from '@/assets/icons/TransitTicketIcon.tsx';
import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

import * as styles from './styles.css.ts';

const MovePass = () => {
  return (
    <div className={styles.root} style={{ marginTop: rem(16) }}>
      <div className={styles.headerBetween}>
        <span className={styles.branding}>
          <TransitTicketIcon color={theme.colors.white} />
          <p>
            move<span>pass</span>
          </p>
        </span>
        <span className={styles.ticket}>
          <p className={styles.expiration}>이용권 유효기간</p>
          <p className={styles.date}>2024. 11. 1 - 2024. 11. 30</p>
        </span>
      </div>

      <div className={styles.button}>
        <span>흥덕중심상업지구</span>
        <ArrowRangeIcon color={theme.colors.white} />
        <span>호계사거리</span>
      </div>
    </div>
  );
};

export default MovePass;

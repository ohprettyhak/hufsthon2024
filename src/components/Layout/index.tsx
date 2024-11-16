import { clsx } from 'clsx';
import { ReactNode } from 'react';

import Menu from '@/components/Menu';

import * as styles from './styles.css.ts';

type LayoutProps = {
  children: ReactNode;
  menu?: boolean;
  bg?: string;
};

const Layout = ({
  children,
  menu = true,
  bg = 'linear-gradient(180deg, #ECEFFF 15%, #FFFFFF 100%)',
}: LayoutProps) => {
  return (
    <div className={styles.root}>
      <main
        className={clsx(styles.main, styles.mainBottomPadding)}
        style={{ background: bg }}
        data-animate={true}
        data-animate-speed="slow"
      >
        {children}
        {menu && <Menu />}
      </main>
    </div>
  );
};

export default Layout;

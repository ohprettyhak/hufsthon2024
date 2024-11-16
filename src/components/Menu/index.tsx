import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

import { MENU } from '@/constants/menu.tsx';
import { theme } from '@/styles/theme.css.ts';

import * as styles from './styles.css';

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.root}>
      {MENU.map(({ key, icon: Icon, path }) => {
        const isActive = pathname === path;

        return (
          <motion.div
            key={key}
            className={styles.item}
            initial={{
              backgroundColor: theme.colors.border_highlight,
            }}
            animate={{
              backgroundColor: isActive ? theme.colors.primary : theme.colors.border_highlight,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link to={path}>
              <motion.div
                animate={{
                  color: isActive ? theme.colors.white : theme.colors.black,
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon />
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Menu;

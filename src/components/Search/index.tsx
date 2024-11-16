import { clsx } from 'clsx';
import { ComponentProps } from 'react';

import SearchIcon from '@/assets/icons/SearchIcon.tsx';

import * as styles from './styles.css.ts';

type SearchProps = ComponentProps<'div'> & {
  className?: string;
};

const Search = ({ className, ...props }: SearchProps) => {
  return (
    <div className={clsx(styles.search, className)} {...props}>
      <SearchIcon />
      <p className={styles.searchText}>어디로 이동하시겠어요?</p>
    </div>
  );
};

export default Search;

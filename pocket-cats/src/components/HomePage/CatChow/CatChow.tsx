import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CatChow.module.css';
import { CatChowsIcon } from './CatChowsIcon';

interface Props {
  className?: string;
}
/* @figmaId 22:1600 */
export const CatChow: FC<Props> = memo(function CatChow(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.catChows}></div>
      <div className={classes.catChows2}>
        <CatChowsIcon className={classes.icon} />
      </div>
      <div className={classes._56}>5/6</div>
    </div>
  );
});

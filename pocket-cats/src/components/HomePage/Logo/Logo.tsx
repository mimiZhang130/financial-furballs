import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse13Icon } from './Ellipse13Icon';
import classes from './Logo.module.css';

interface Props {
  className?: string;
}
/* @figmaId 32:3129 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse13}>
        <Ellipse13Icon className={classes.icon} />
      </div>
      <div className={classes.image4}></div>
    </div>
  );
});

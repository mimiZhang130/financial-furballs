import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Icon_IconLockBorderFalse.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 5:515 */
export const Icon_IconLockBorderFalse: FC<Props> = memo(function Icon_IconLockBorderFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});

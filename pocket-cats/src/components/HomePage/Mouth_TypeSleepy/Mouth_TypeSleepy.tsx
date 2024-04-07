import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse5Icon } from './Ellipse5Icon';
import classes from './Mouth_TypeSleepy.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse5?: ReactNode;
  };
}
/* @figmaId 2:92 */
export const Mouth_TypeSleepy: FC<Props> = memo(function Mouth_TypeSleepy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse5}>{props.swap?.ellipse5 || <Ellipse5Icon className={classes.icon} />}</div>
    </div>
  );
});

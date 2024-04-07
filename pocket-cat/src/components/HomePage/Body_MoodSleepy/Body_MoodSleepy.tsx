import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Body_MoodSleepy.module.css';
import { BodyIcon } from './BodyIcon';

interface Props {
  className?: string;
  classes?: {
    body?: string;
  };
  swap?: {
    body?: ReactNode;
  };
}
/* @figmaId 2:81 */
export const Body_MoodSleepy: FC<Props> = memo(function Body_MoodSleepy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={`${props.classes?.body || ''} ${classes.body}`}>
        {props.swap?.body || <BodyIcon className={classes.icon} />}
      </div>
    </div>
  );
});

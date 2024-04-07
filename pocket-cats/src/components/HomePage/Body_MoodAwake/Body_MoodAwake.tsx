import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Body_MoodAwake.module.css';
import { BodyIcon } from './BodyIcon';
import { TailStrokeIcon } from './TailStrokeIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    body?: string;
  };
  swap?: {
    tailStroke?: ReactNode;
    body?: ReactNode;
  };
}
/* @figmaId 2:69 */
export const Body_MoodAwake: FC<Props> = memo(function Body_MoodAwake(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.tailStroke}>{props.swap?.tailStroke || <TailStrokeIcon className={classes.icon} />}</div>
      <div className={`${props.classes?.body || ''} ${classes.body}`}>
        {props.swap?.body || <BodyIcon className={classes.icon2} />}
      </div>
    </div>
  );
});

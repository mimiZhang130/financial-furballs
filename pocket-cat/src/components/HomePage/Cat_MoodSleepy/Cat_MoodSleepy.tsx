import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Body_MoodSleepy } from '../Body_MoodSleepy/Body_MoodSleepy';
import { Face_MoodSleepy } from '../Face_MoodSleepy/Face_MoodSleepy';
import classes from './Cat_MoodSleepy.module.css';

interface Props {
  className?: string;
  classes?: {
    body?: string;
    mouth?: string;
    root?: string;
  };
  swap?: {
    body?: ReactNode;
    ellipse3Stroke?: ReactNode;
    ellipse4Stroke?: ReactNode;
    ellipse5?: ReactNode;
  };
}
/* @figmaId 2:122 */
export const Cat_MoodSleepy: FC<Props> = memo(function Cat_MoodSleepy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Body_MoodSleepy
        classes={{ body: props.classes?.body || '' }}
        swap={{
          body: props.swap?.body,
        }}
      />
      <Face_MoodSleepy
        className={classes.face}
        classes={{ mouth: props.classes?.mouth || '' }}
        swap={{
          ellipse3Stroke: props.swap?.ellipse3Stroke,
          ellipse4Stroke: props.swap?.ellipse4Stroke,
          ellipse5: props.swap?.ellipse5,
        }}
      />
    </div>
  );
});

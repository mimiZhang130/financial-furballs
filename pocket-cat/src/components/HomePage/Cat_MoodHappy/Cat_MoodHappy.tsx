import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Body_MoodAwake } from '../Body_MoodAwake/Body_MoodAwake';
import { Face_MoodHappy } from '../Face_MoodHappy/Face_MoodHappy';
import classes from './Cat_MoodHappy.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    body2?: string;
    vectorStroke?: string;
    mouth?: string;
  };
  swap?: {
    tailStroke?: ReactNode;
    body?: ReactNode;
    ellipse2?: ReactNode;
    ellipse21?: ReactNode;
    vectorStroke?: ReactNode;
  };
}
/* @figmaId 2:119 */
export const Cat_MoodHappy: FC<Props> = memo(function Cat_MoodHappy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Body_MoodAwake
        className={classes.body}
        classes={{ body: props.classes?.body2 || '' }}
        swap={{
          tailStroke: props.swap?.tailStroke,
          body: props.swap?.body,
        }}
      />
      <Face_MoodHappy
        className={classes.face}
        classes={{ vectorStroke: props.classes?.vectorStroke || '', mouth: props.classes?.mouth || '' }}
        swap={{
          ellipse2: props.swap?.ellipse2,
          ellipse21: props.swap?.ellipse21,
          vectorStroke: props.swap?.vectorStroke,
        }}
      />
    </div>
  );
});

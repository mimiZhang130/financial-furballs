import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Body_MoodAwake } from '../Body_MoodAwake/Body_MoodAwake';
import { Face_MoodGrumpy } from '../Face_MoodGrumpy/Face_MoodGrumpy';
import { BodyIcon } from './BodyIcon';
import classes from './Cat_MoodGrumpy.module.css';
import { TailStrokeIcon } from './TailStrokeIcon';

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
    eyeLeft?: ReactNode;
    eyeRight?: ReactNode;
    vectorStroke?: ReactNode;
  };
}
/* @figmaId 2:130 */
export const Cat_MoodGrumpy: FC<Props> = memo(function Cat_MoodGrumpy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Body_MoodAwake
        className={classes.body}
        classes={{ body: props.classes?.body2 || '' }}
        swap={{
          tailStroke: props.swap?.tailStroke || <TailStrokeIcon className={classes.icon} />,
          body: props.swap?.body || <BodyIcon className={classes.icon2} />,
        }}
      />
      <Face_MoodGrumpy
        className={classes.face}
        classes={{ vectorStroke: props.classes?.vectorStroke || '', mouth: props.classes?.mouth || '' }}
        swap={{
          eyeLeft: props.swap?.eyeLeft,
          eyeRight: props.swap?.eyeRight,
          vectorStroke: props.swap?.vectorStroke,
        }}
      />
    </div>
  );
});

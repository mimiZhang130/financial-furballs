import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Mouth_TypeSleepy } from '../Mouth_TypeSleepy/Mouth_TypeSleepy';
import { Ellipse3StrokeIcon } from './Ellipse3StrokeIcon';
import { Ellipse4StrokeIcon } from './Ellipse4StrokeIcon';
import classes from './Face_MoodSleepy.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    mouth?: string;
  };
  swap?: {
    ellipse3Stroke?: ReactNode;
    ellipse4Stroke?: ReactNode;
    ellipse5?: ReactNode;
  };
}
/* @figmaId 2:102 */
export const Face_MoodSleepy: FC<Props> = memo(function Face_MoodSleepy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse3Stroke}>
        {props.swap?.ellipse3Stroke || <Ellipse3StrokeIcon className={classes.icon} />}
      </div>
      <div className={classes.ellipse4Stroke}>
        {props.swap?.ellipse4Stroke || <Ellipse4StrokeIcon className={classes.icon2} />}
      </div>
      <Mouth_TypeSleepy
        className={`${props.classes?.mouth || ''} ${classes.mouth}`}
        swap={{
          ellipse5: props.swap?.ellipse5,
        }}
      />
    </div>
  );
});

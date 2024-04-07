import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Mouth_TypeSmile } from '../Mouth_TypeSmile/Mouth_TypeSmile';
import { Ellipse2Icon } from './Ellipse2Icon';
import { Ellipse21Icon } from './Ellipse21Icon';
import classes from './Face_MoodHappy.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    vectorStroke?: string;
    mouth?: string;
  };
  swap?: {
    ellipse2?: ReactNode;
    ellipse21?: ReactNode;
    vectorStroke?: ReactNode;
  };
}
/* @figmaId 2:95 */
export const Face_MoodHappy: FC<Props> = memo(function Face_MoodHappy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse2}>{props.swap?.ellipse2 || <Ellipse2Icon className={classes.icon} />}</div>
      <div className={classes.ellipse21}>{props.swap?.ellipse21 || <Ellipse21Icon className={classes.icon2} />}</div>
      <Mouth_TypeSmile
        className={`${props.classes?.mouth || ''} ${classes.mouth}`}
        classes={{ vectorStroke: props.classes?.vectorStroke || '' }}
        swap={{
          vectorStroke: props.swap?.vectorStroke,
        }}
      />
    </div>
  );
});

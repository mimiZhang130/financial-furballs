import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Mouth_TypeFrown } from '../Mouth_TypeFrown/Mouth_TypeFrown';
import { EyeleftIcon } from './EyeleftIcon';
import { EyerightIcon } from './EyerightIcon';
import classes from './Face_MoodGrumpy.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    vectorStroke?: string;
    mouth?: string;
  };
  swap?: {
    eyeLeft?: ReactNode;
    eyeRight?: ReactNode;
    vectorStroke?: ReactNode;
  };
}
/* @figmaId 2:109 */
export const Face_MoodGrumpy: FC<Props> = memo(function Face_MoodGrumpy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.eyeLeft}>{props.swap?.eyeLeft || <EyeleftIcon className={classes.icon} />}</div>
      <div className={classes.eyeRight}>{props.swap?.eyeRight || <EyerightIcon className={classes.icon2} />}</div>
      <Mouth_TypeFrown
        className={`${props.classes?.mouth || ''} ${classes.mouth}`}
        classes={{ vectorStroke: props.classes?.vectorStroke || '' }}
        swap={{
          vectorStroke: props.swap?.vectorStroke,
        }}
      />
    </div>
  );
});

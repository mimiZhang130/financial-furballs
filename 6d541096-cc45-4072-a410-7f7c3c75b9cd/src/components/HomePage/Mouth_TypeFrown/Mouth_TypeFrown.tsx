import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Mouth_TypeFrown.module.css';
import { VectorStrokeIcon } from './VectorStrokeIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    vectorStroke?: string;
  };
  swap?: {
    vectorStroke?: ReactNode;
  };
}
/* @figmaId 2:90 */
export const Mouth_TypeFrown: FC<Props> = memo(function Mouth_TypeFrown(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vectorStroke || ''} ${classes.vectorStroke}`}>
        {props.swap?.vectorStroke || <VectorStrokeIcon className={classes.icon} />}
      </div>
    </div>
  );
});

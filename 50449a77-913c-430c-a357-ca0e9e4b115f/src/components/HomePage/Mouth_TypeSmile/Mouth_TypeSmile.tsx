import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Mouth_TypeSmile.module.css';
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
/* @figmaId 2:88 */
export const Mouth_TypeSmile: FC<Props> = memo(function Mouth_TypeSmile(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vectorStroke || ''} ${classes.vectorStroke}`}>
        {props.swap?.vectorStroke || <VectorStrokeIcon className={classes.icon} />}
      </div>
    </div>
  );
});

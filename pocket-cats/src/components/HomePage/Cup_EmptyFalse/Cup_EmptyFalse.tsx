import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Cup_EmptyFalse.module.css';
import { Group6Icon } from './Group6Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    group6?: string;
  };
  swap?: {
    group6?: ReactNode;
  };
}
/* @figmaId 5:212 */
export const Cup_EmptyFalse: FC<Props> = memo(function Cup_EmptyFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.group6 || ''} ${classes.group6}`}>
        {props.swap?.group6 || <Group6Icon className={classes.icon} />}
      </div>
    </div>
  );
});

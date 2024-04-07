import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Cat_MoodGrumpy } from '../Cat_MoodGrumpy/Cat_MoodGrumpy';
import { Cup_EmptyFalse } from '../Cup_EmptyFalse/Cup_EmptyFalse';
import classes from './CatInCup_MoodGrumpy.module.css';

interface Props {
  className?: string;
  classes?: {
    body?: string;
    vectorStroke?: string;
    mouth?: string;
    group6?: string;
    root?: string;
  };
  swap?: {
    tailStroke?: ReactNode;
    body?: ReactNode;
    eyeLeft?: ReactNode;
    eyeRight?: ReactNode;
    vectorStroke?: ReactNode;
    group6?: ReactNode;
  };
}
/* @figmaId 5:221 */
export const CatInCup_MoodGrumpy: FC<Props> = memo(function CatInCup_MoodGrumpy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Cat_MoodGrumpy
        className={classes.cat}
        classes={{
          body2: props.classes?.body || '',
          vectorStroke: props.classes?.vectorStroke || '',
          mouth: props.classes?.mouth || '',
        }}
        swap={{
          tailStroke: props.swap?.tailStroke,
          body: props.swap?.body,
          eyeLeft: props.swap?.eyeLeft,
          eyeRight: props.swap?.eyeRight,
          vectorStroke: props.swap?.vectorStroke,
        }}
      />
      <Cup_EmptyFalse
        className={classes.cup}
        classes={{ group6: props.classes?.group6 || '' }}
        swap={{
          group6: props.swap?.group6,
        }}
      />
    </div>
  );
});

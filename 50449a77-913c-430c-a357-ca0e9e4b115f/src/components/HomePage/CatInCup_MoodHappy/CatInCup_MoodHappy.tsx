import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Cat_MoodHappy } from '../Cat_MoodHappy/Cat_MoodHappy';
import { Cup_EmptyFalse } from '../Cup_EmptyFalse/Cup_EmptyFalse';
import classes from './CatInCup_MoodHappy.module.css';

interface Props {
  className?: string;
  classes?: {
    body?: string;
    vectorStroke?: string;
    mouth?: string;
    group6?: string;
    cup?: string;
    root?: string;
  };
  swap?: {
    tailStroke?: ReactNode;
    body?: ReactNode;
    ellipse2?: ReactNode;
    ellipse21?: ReactNode;
    vectorStroke?: ReactNode;
    group6?: ReactNode;
  };
}
/* @figmaId 5:218 */
export const CatInCup_MoodHappy: FC<Props> = memo(function CatInCup_MoodHappy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Cat_MoodHappy
        className={classes.cat}
        classes={{
          body2: props.classes?.body || '',
          vectorStroke: props.classes?.vectorStroke || '',
          mouth: props.classes?.mouth || '',
        }}
        swap={{
          tailStroke: props.swap?.tailStroke,
          body: props.swap?.body,
          ellipse2: props.swap?.ellipse2,
          ellipse21: props.swap?.ellipse21,
          vectorStroke: props.swap?.vectorStroke,
        }}
      />
      <Cup_EmptyFalse
        className={`${props.classes?.cup || ''} ${classes.cup}`}
        classes={{ group6: props.classes?.group6 || '' }}
        swap={{
          group6: props.swap?.group6,
        }}
      />
    </div>
  );
});

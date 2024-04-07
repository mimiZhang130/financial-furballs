import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AddButton } from './AddButton/AddButton';
import { Frame2 } from './Frame2/Frame2';
import classes from './Frame.module.css';
import { XIcon } from './XIcon';

interface Props {
  className?: string;
}
/* @figmaId 32:6082 */
export const SetGoalsPage: FC<Props> = memo(function Frame(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Frame2 className={classes.frame} />
      <div className={classes.setGoals}>Set Goals</div>
      <div className={classes.x}>
        <XIcon className={classes.icon} />
      </div>
      <div className={classes.savings20}>Savings (20%)</div>
      <div className={classes.noteBox}></div>
      <div className={classes.needs50}>Needs (50%)</div>
      <div className={classes.amountBox}></div>
      <div className={classes.wants30}>Wants (30%)</div>
      <div className={classes.amountBox2}></div>
      <AddButton
        className={classes.addButton}
        text={{
          add: <div className={classes.add}>Set!</div>,
        }}
      />
    </div>
  );
});

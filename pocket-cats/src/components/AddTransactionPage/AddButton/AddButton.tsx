import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AddButton.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 22:2944 */
export const AddButton: FC<Props> = memo(function AddButton(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.submitButton}></div>
      <div className={classes.add}>Add!</div>
    </button>
  );
});

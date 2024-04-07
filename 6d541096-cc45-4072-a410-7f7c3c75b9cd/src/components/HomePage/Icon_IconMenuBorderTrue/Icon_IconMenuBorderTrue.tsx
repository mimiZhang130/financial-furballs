import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Icon_IconMenuBorderTrue.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    vector?: boolean;
  };
}
/* @figmaId 5:505 */
export const Icon_IconMenuBorderTrue: FC<Props> = memo(function Icon_IconMenuBorderTrue(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.vector && (
        <div className={classes.vector}>
          <VectorIcon className={classes.icon} />
        </div>
      )}
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CatCare2.module.css';
import { CatCareIcon } from './CatCareIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 14:1596 */
export const CatCare2: FC<Props> = memo(function CatCare2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        <CatCareIcon className={classes.icon2} />
      </div>
    </div>
  );
});

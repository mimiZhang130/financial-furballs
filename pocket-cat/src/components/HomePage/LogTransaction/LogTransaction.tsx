import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Icon_IconCloseBorderFalse } from '../Icon_IconCloseBorderFalse/Icon_IconCloseBorderFalse';
import { Ellipse12Icon } from './Ellipse12Icon';
import classes from './LogTransaction.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 9:536 */
export const LogTransaction: FC<Props> = memo(function LogTransaction(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon3} />
      </div>
      <Icon_IconCloseBorderFalse
        className={classes.icon2}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});

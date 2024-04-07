import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CatCoin.module.css';
import { CatCoinIcon } from './CatCoinIcon';

interface Props {
  className?: string;
}
/* @figmaId 22:1599 */
export const CatCoin: FC<Props> = memo(function CatCoin(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.catCoins}></div>
      <div className={classes._57}>57</div>
      <div className={classes.catCoin}>
        <CatCoinIcon className={classes.icon} />
      </div>
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CatCare } from './CatCare/CatCare';
import { CatChow } from './CatChow/CatChow';
import { CatCoin } from './CatCoin/CatCoin';
import { Cats } from './Cats/Cats';
import classes from './HomePage.module.css';
import { LogTransaction } from './LogTransaction/LogTransaction';
import { SettingsButton } from './SettingsButton/SettingsButton';

interface Props {
  className?: string;
}
/* @figmaId 2:26 */
export const HomePage: FC<Props> = memo(function HomePage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.outerFrame}></div>
      <div className={classes.innerFrame}></div>
      <div className={classes.mimiSPocketCats}>Mimi’s Pocket Cats</div>
      <CatCoin />
      <CatChow />
      <CatCare />
      <SettingsButton />
      <LogTransaction />
      <Cats />
    </div>
  );
});

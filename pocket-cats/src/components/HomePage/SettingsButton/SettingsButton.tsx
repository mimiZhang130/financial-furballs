import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Icon_IconMenuBorderTrue } from '../Icon_IconMenuBorderTrue/Icon_IconMenuBorderTrue';
import { Group1Icon } from './Group1Icon';
import classes from './SettingsButton.module.css';

interface Props {
  className?: string;
  hide?: {
    vector?: boolean;
  };
}
/* @figmaId 2:531 */
export const SettingsButton: FC<Props> = memo(function SettingsButton(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <Icon_IconMenuBorderTrue
        className={classes.settingsIcon}
        hide={{
          vector: true,
        }}
      />
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
    </button>
  );
});

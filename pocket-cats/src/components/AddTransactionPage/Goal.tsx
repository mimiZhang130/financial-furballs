import React, { useState } from 'react';
import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AddButton } from './AddButton/AddButton';
import { Frame2 } from './Frame2/Frame2';
import classes from './Frame.module.css';
import { Polygon1Icon } from './Polygon1Icon';
import { XIcon } from './XIcon';

interface Props {
  className?: string;
  onClose: () => void;
}

const InputBox: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Enter text here..."
      className={classes.input} // Make sure this class is defined in your CSS
    />
  );
};

export const Frame: FC<Props> = memo(({ onClose }) => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Frame2 className={classes.frame} />
      <div className={classes.addTransaction}>Set Goals</div>
      <div className={classes.x} onClick={onClose}>
        <XIcon className={classes.icon} />
      </div>
      <div className={classes.note}>Savings (20%)</div>
      <div className={classes.noteBox}>
        <InputBox />
      </div>
      <div className={classes.amount}>Needs (50%)</div>
      <div className={classes.amountBox}>
        <InputBox />
      </div>
      <div className={classes.type}>Wants (30%)</div>
      <div className={classes.amountBox2}>
      <InputBox />
      </div>

      <AddButton className={classes.addButton} />
    </div>
  );
});
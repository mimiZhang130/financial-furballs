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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Frame2 className={classes.frame} />
      <div className={classes.addTransaction}>Add Transaction</div>
      <div className={classes.x} onClick={onClose}>
        <XIcon className={classes.icon} />
      </div>
      <div className={classes.note}>Note</div>
      <div className={classes.noteBox}>
        <InputBox />
      </div>
      <div className={classes.amount}>Amount ($)</div>
      <div className={classes.amountBox}>
        <InputBox />
      </div>
      <div className={classes.type}>Type</div>
      <div className={classes.amountBox2}></div>
      <div className={`${classes.polygon1} ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        <Polygon1Icon className={classes.icon2} />
      </div>
      {isDropdownOpen && (
      <ul className={`${classes.dropdownMenu} active`}> {/* Use "active" directly */}
        <li>Wants</li>
        <li>Needs</li>
      </ul>
      )}

      <AddButton className={classes.addButton} />
    </div>
  );
});
import React, { useState } from 'react';
import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AddButton } from './AddButton/AddButton';
import { Frame2 } from '../AddTransactionPage/Frame2/Frame2';
import classes from './Login.module.css';

interface Props {
  className?: string;
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
      className={classes.input} 
    />
  );
};

export const Login: FC<Props> = memo(() => {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Frame2 className={classes.frame} />
      <div className={classes.addTransaction}>Login</div>
      <div className={classes.note}>Username</div>
      <div className={classes.noteBox}>
        <InputBox />
      </div>
      <div className={classes.amount}>Password</div>
      <div className={classes.amountBox}>
        <InputBox />
      </div>
      <AddButton className={classes.addButton} />
    </div>
  );
});

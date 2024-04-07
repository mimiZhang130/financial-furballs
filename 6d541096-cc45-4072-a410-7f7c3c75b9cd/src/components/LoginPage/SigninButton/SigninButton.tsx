import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import classes from './SigninButton.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}

export const AddButton: FC<Props> = memo(function AddButton(props = {}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('home');
  };

  return (
    <button
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
      onClick={handleClick} // Adding onClick event handler
    >
      <div className={classes.submitButton}></div>
      <div className={classes.add}>AHHHHHHHHH</div>
    </button>
  );
});

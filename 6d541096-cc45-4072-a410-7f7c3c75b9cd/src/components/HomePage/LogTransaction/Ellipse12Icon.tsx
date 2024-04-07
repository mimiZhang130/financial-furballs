import { memo } from 'react';
import type { FC, SVGProps } from 'react'; // Import SVGProps for TypeScript

import resets from '../../_resets.module.css';
import { Icon_IconMenuBorderTrue } from '../Icon_IconMenuBorderTrue/Icon_IconMenuBorderTrue';
import { Group1Icon } from './Group1Icon';
import classes from '../SettingsButton/SettingsButton.module.css';

const Ellipse12Icon = (props: SVGProps<SVGSVGElement>) => {
  const handleClick = () => {
    // alert('Clicked');
    console.log("circle is clicked");
  };

  return (
    <button onClick={handleClick}>
      <svg preserveAspectRatio='none' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <circle cx={50} cy={50} r={50} fill='#F09191' stroke='#F09191' strokeOpacity={0.31} strokeWidth={6} />
      </svg>
    </button>
    // <svg preserveAspectRatio='none' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    //     <circle cx={50} cy={50} r={50} fill='#F09191' stroke='#F09191' strokeOpacity={0.31} strokeWidth={6} />
    // </svg>
  );
};
const Memo = memo(Ellipse12Icon);
export { Memo as Ellipse12Icon };

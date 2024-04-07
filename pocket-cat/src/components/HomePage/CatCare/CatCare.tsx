// import { memo } from 'react';
// import type { FC } from 'react';

// import resets from '../../_resets.module.css';
// import { CatCare2 } from '../CatCare2/CatCare2';
// import classes from './CatCare.module.css';

// interface Props {
//   className?: string;
// }
// /* @figmaId 22:1602 */
// export const CatCare: FC<Props> = memo(function CatCare(props = {}) {
//   return (
//     <div className={`${resets.clapyResets} ${classes.root}`}>
//       <div className={classes.catCares}></div>
//       <div className={classes._45}>4/5</div>
//       <CatCare2 className={classes.catCare} />
//     </div>
//   );
// });

import React, { useState, useEffect } from 'react';
import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CatCare2 } from '../CatCare2/CatCare2';
import classes from './CatCare.module.css';

interface Props {
  className?: string;
}

export const CatCare: FC<Props> = memo(function CatCare(props = {}) {
  const [catFood, setCatFood] = useState('Loading...');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/catfood')
      .then(response => response.json())
      .then(data => setCatFood(data.catFood))
      .catch(error => console.error("Failed to fetch data", error));
  }, []);

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.catCares}></div>
      <div className={classes._45}>{catFood}/5</div>
      <CatCare2 className={classes.catCare} />
    </div>
  );
});

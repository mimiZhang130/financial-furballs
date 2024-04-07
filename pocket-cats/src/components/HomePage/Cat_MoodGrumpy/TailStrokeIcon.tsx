import { memo, SVGProps } from 'react';

const TailStrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.02158 4.86789C4.48268 5.44271 4 6.42818 4 8.00004C4 9.10461 3.10457 10 2 10C0.89543 10 0 9.10461 0 8.00004C0 5.57187 0.767316 3.55732 2.10342 2.13213C3.42996 0.71715 5.21338 -8.34464e-07 7 0C8.78662 8.34466e-07 10.57 0.717154 11.8966 2.13214C13.2327 3.55733 14 5.57188 14 8.00005C14 9.10462 13.1046 10.0001 12 10.0001C10.8954 10.0001 10 9.10462 10 8.00005C10 6.42819 9.51732 5.44272 8.97842 4.86789C8.42996 4.28286 7.71338 4 7 4C6.28662 4 5.57004 4.28286 5.02158 4.86789Z'
      fill='#FF5353'
    />
  </svg>
);

const Memo = memo(TailStrokeIcon);
export { Memo as TailStrokeIcon };

import { memo, SVGProps } from 'react';

const Ellipse5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={1} cy={1} r={1} fill='black' />
  </svg>
);

const Memo = memo(Ellipse5Icon);
export { Memo as Ellipse5Icon };

import { memo, SVGProps } from 'react';

const Ellipse21Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2} cy={2} r={2} fill='black' />
  </svg>
);

const Memo = memo(Ellipse21Icon);
export { Memo as Ellipse21Icon };

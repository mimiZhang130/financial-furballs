import { memo, SVGProps } from 'react';

const Ellipse12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={50} cy={50} r={50} fill='#F09191' stroke='#F09191' strokeOpacity={0.31} strokeWidth={6} />
  </svg>
);

const Memo = memo(Ellipse12Icon);
export { Memo as Ellipse12Icon };

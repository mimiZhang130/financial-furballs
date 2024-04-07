import { memo, SVGProps } from 'react';

const Ellipse13Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 139 139' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={69.5} cy={69.5} r={69.5} fill='#F09191' fillOpacity={0.31} stroke='#FFC4C4' strokeWidth={6} />
  </svg>
);

const Memo = memo(Ellipse13Icon);
export { Memo as Ellipse13Icon };

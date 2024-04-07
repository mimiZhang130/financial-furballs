import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M25 50L3.34936 12.5L46.6506 12.5L25 50Z' fill='#F09191' fillOpacity={0.84} />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };

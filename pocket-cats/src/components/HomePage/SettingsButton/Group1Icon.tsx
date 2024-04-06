import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 53 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.283583 16.8661H52.3433' stroke='white' strokeWidth={6} />
    <path d='M0.283581 0.125H52.3433M0.283581 35.2812H52.3433' stroke='white' strokeWidth={6} />
  </svg>
);

const Memo = memo(Group1Icon);
export { Memo as Group1Icon };

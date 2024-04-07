import { memo, SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L50 50' stroke='white' strokeWidth={9} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M50 0L0 50' stroke='white' strokeWidth={9} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(XIcon);
export { Memo as XIcon };

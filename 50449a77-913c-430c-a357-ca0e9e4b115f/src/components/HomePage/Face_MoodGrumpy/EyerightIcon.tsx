import { memo, SVGProps } from 'react';

const EyerightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2} cy={2} r={2} fill='black' />
  </svg>
);

const Memo = memo(EyerightIcon);
export { Memo as EyerightIcon };

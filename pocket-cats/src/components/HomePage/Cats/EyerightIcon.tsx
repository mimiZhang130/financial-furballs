import { memo, SVGProps } from 'react';

const EyerightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={6.85715} cy={6.42857} rx={6.42857} ry={6.42857} fill='black' />
  </svg>
);

const Memo = memo(EyerightIcon);
export { Memo as EyerightIcon };

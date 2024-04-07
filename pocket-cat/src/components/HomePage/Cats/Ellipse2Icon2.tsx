import { memo, SVGProps } from 'react';

const Ellipse2Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={6.42857} cy={6.42857} rx={6.42857} ry={6.42857} fill='black' />
  </svg>
);

const Memo = memo(Ellipse2Icon2);
export { Memo as Ellipse2Icon2 };

import { memo, SVGProps } from 'react';

const Ellipse3StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.03572 0.821428C2.92332 0.821428 3.64286 1.54097 3.64286 2.42857C3.64286 4.20377 5.08195 5.64286 6.85715 5.64286C8.63235 5.64286 10.0714 4.20377 10.0714 2.42857C10.0714 1.54097 10.791 0.821428 11.6786 0.821428C12.5662 0.821428 13.2857 1.54097 13.2857 2.42857C13.2857 5.97897 10.4076 8.85714 6.85715 8.85714C3.30675 8.85714 0.428577 5.97897 0.428577 2.42857C0.428577 1.54097 1.14812 0.821428 2.03572 0.821428Z'
      fill='black'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(Ellipse3StrokeIcon);
export { Memo as Ellipse3StrokeIcon };

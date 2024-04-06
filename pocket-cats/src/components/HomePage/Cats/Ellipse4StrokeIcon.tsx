import { memo, SVGProps } from 'react';

const Ellipse4StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.60714 0.821428C2.49474 0.821428 3.21429 1.54097 3.21429 2.42857C3.21429 4.20377 4.65337 5.64286 6.42857 5.64286C8.20377 5.64286 9.64286 4.20377 9.64286 2.42857C9.64286 1.54097 10.3624 0.821428 11.25 0.821428C12.1376 0.821428 12.8571 1.54097 12.8571 2.42857C12.8571 5.97897 9.97897 8.85714 6.42857 8.85714C2.87817 8.85714 0 5.97897 0 2.42857C0 1.54097 0.719542 0.821428 1.60714 0.821428Z'
      fill='black'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(Ellipse4StrokeIcon);
export { Memo as Ellipse4StrokeIcon };

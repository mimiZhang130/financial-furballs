import { memo, SVGProps } from 'react';

const Ellipse3StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.5 0.5C0.776142 0.5 1 0.723858 1 1C1 1.55228 1.44772 2 2 2C2.55228 2 3 1.55228 3 1C3 0.723858 3.22386 0.5 3.5 0.5C3.77614 0.5 4 0.723858 4 1C4 2.10457 3.10457 3 2 3C0.89543 3 0 2.10457 0 1C0 0.723858 0.223858 0.5 0.5 0.5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Ellipse3StrokeIcon);
export { Memo as Ellipse3StrokeIcon };

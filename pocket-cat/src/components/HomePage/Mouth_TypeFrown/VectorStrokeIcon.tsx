import { memo, SVGProps } from 'react';

const VectorStrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 5C1.55228 5 2 4.55228 2 4C2 3.27136 2.2633 2.79836 2.60186 2.49741C2.95883 2.1801 3.46307 2 4 2C4.53693 2 5.04117 2.1801 5.39814 2.49741C5.7367 2.79836 6 3.27136 6 4C6 4.55228 6.44772 5 7 5C7.55228 5 8 4.55228 8 4C8 2.72864 7.5133 1.70164 6.72686 1.00259C5.95883 0.319897 4.96307 0 4 0C3.03693 0 2.04117 0.319897 1.27314 1.00259C0.486702 1.70164 0 2.72864 0 4C0 4.55228 0.447715 5 1 5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorStrokeIcon);
export { Memo as VectorStrokeIcon };

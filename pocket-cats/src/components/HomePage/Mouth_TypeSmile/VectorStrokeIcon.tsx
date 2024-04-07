import { memo, SVGProps } from 'react';

const VectorStrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7 0C6.44772 0 6 0.447715 6 1C6 1.72864 5.7367 2.20164 5.39814 2.50259C5.04117 2.8199 4.53693 3 4 3C3.46307 3 2.95883 2.8199 2.60186 2.50259C2.2633 2.20164 2 1.72864 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 2.27136 0.486701 3.29836 1.27314 3.99741C2.04117 4.6801 3.03693 5 4 5C4.96307 5 5.95883 4.6801 6.72686 3.99741C7.5133 3.29836 8 2.27136 8 1C8 0.447715 7.55228 0 7 0Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorStrokeIcon);
export { Memo as VectorStrokeIcon };

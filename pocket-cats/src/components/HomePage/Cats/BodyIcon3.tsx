import { memo, SVGProps } from 'react';

const BodyIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 103 103' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M87.7941 15.0631C78.4873 5.75634 65.6302 0 51.4286 0C37.227 0 24.3698 5.75634 15.0631 15.0631L0 0V51.4286C0 79.8318 23.0254 102.857 51.4286 102.857C79.8318 102.857 102.857 79.8318 102.857 51.4286V0L87.7941 15.0631Z'
      fill='#A29EB8'
    />
  </svg>
);

const Memo = memo(BodyIcon3);
export { Memo as BodyIcon3 };

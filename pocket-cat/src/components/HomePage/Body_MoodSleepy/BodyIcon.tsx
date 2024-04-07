import { memo, SVGProps } from 'react';

const BodyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M27.3137 4.68629C24.4183 1.79086 20.4183 0 16 0C11.5817 0 7.58172 1.79086 4.68629 4.68629L0 0V16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16V0L27.3137 4.68629Z'
      fill='#D5D1C8'
    />
  </svg>
);

const Memo = memo(BodyIcon);
export { Memo as BodyIcon };

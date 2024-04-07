import { memo, SVGProps } from 'react';

const VectorStrokeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.21429 16.0714C4.98949 16.0714 6.42857 14.6323 6.42857 12.8571C6.42857 10.5151 7.27489 8.99472 8.36313 8.02739C9.51054 7.00747 11.1313 6.42857 12.8571 6.42857C14.583 6.42857 16.2037 7.00747 17.3512 8.02739C18.4394 8.99472 19.2857 10.5151 19.2857 12.8571C19.2857 14.6323 20.7248 16.0714 22.5 16.0714C24.2752 16.0714 25.7143 14.6323 25.7143 12.8571C25.7143 8.77064 24.1499 5.46957 21.6221 3.22261C19.1534 1.02824 15.9527 -4.76837e-07 12.8571 -4.76837e-07C9.76156 -4.76837e-07 6.56089 1.02824 4.09222 3.22261C1.5644 5.46957 0 8.77064 0 12.8571C0 14.6323 1.43908 16.0714 3.21429 16.0714Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorStrokeIcon2);
export { Memo as VectorStrokeIcon2 };

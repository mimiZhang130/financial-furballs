import { memo, SVGProps } from 'react';

const VectorStrokeIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.5 0C20.7248 0 19.2857 1.43908 19.2857 3.21429C19.2857 5.55635 18.4394 7.07671 17.3512 8.04404C16.2037 9.06395 14.583 9.64286 12.8571 9.64286C11.1313 9.64286 9.51054 9.06395 8.36313 8.04404C7.27489 7.07671 6.42857 5.55635 6.42857 3.21429C6.42857 1.43908 4.98949 0 3.21429 0C1.43908 0 0 1.43908 0 3.21429C0 7.30079 1.5644 10.6019 4.09222 12.8488C6.56089 15.0432 9.76156 16.0714 12.8571 16.0714C15.9527 16.0714 19.1534 15.0432 21.6221 12.8488C24.1499 10.6019 25.7143 7.30079 25.7143 3.21429C25.7143 1.43908 24.2752 0 22.5 0Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorStrokeIcon4);
export { Memo as VectorStrokeIcon4 };

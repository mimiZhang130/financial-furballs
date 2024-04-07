import { memo, SVGProps } from 'react';

const TailStrokeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.1408 16.3611C14.4086 18.2087 12.8571 21.3763 12.8571 26.4287C12.8571 29.9791 9.97897 32.8573 6.42857 32.8573C2.87817 32.8573 0 29.9791 0 26.4287C0 18.6239 2.46637 12.1485 6.761 7.56756C11.0249 3.01941 16.7573 0.71428 22.5 0.714283C28.2427 0.714286 33.9751 3.01942 38.239 7.56758C42.5336 12.1485 45 18.6239 45 26.4287C45 29.9791 42.1218 32.8573 38.5714 32.8573C35.021 32.8573 32.1429 29.9791 32.1429 26.4287C32.1429 21.3763 30.5914 18.2087 28.8592 16.3611C27.0963 14.4806 24.793 13.5714 22.5 13.5714C20.207 13.5714 17.9037 14.4806 16.1408 16.3611Z'
      fill='#9C9C9C'
    />
  </svg>
);

const Memo = memo(TailStrokeIcon2);
export { Memo as TailStrokeIcon2 };

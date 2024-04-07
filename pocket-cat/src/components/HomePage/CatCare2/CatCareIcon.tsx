import { memo, SVGProps } from 'react';

const CatCareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.4 0C6.98438 0 0.666666 5.5448 0.666666 12.7461C0.666666 17.714 2.99292 21.8965 6.07597 25.3611C9.14843 28.8139 13.1124 31.712 16.6959 34.1377L22.8789 38.3229C23.556 38.7813 24.444 38.7813 25.1211 38.3229L31.3041 34.1377C34.8876 31.712 38.8516 28.8139 41.924 25.3611C45.0071 21.8965 47.3333 17.714 47.3333 12.7461C47.3333 5.5448 41.0156 0 33.6 0C29.7774 0 26.4138 1.79237 24 4.11155C21.5862 1.79237 18.2226 0 14.4 0Z'
      fill='#F09191'
      stroke='#FE7474'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CatCareIcon);
export { Memo as CatCareIcon };

import { memo, SVGProps } from 'react';

const Group6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={16} cy={24} rx={12} ry={2} fill='black' fillOpacity={0.1} />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.95503e-05 0H32C36.4183 0 40 3.58172 40 8C40 12.4183 36.4183 16 32 16H29.8595C27.093 20.7824 21.9223 24 16 24C7.16344 24 0 16.8366 0 8L1.95503e-05 0ZM31.5038 11.9695C31.6664 11.9896 31.832 12 32 12C34.2092 12 36 10.2091 36 8C36 5.79086 34.2092 4 32 4V8C32 9.37022 31.8278 10.7002 31.5038 11.9695Z'
      fill='#5C606F'
    />
  </svg>
);

const Memo = memo(Group6Icon);
export { Memo as Group6Icon };

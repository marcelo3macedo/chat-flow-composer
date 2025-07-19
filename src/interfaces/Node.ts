import type { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

export type IconComponent = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> &
    { title?: string; titleId?: string } &
    RefAttributes<SVGSVGElement>
>;

export const IconKeys = {
  MESSAGE: 'MESSAGE',
  REQUEST: 'REQUEST',
  VARIABLES: 'VARIABLES'
} as const;

export type IconKeys = keyof typeof IconKeys;
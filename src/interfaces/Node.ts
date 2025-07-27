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

export interface NodesMenuState {
  menu?: MenuState[];
  setMenu: (menu: MenuState[]) => void;
}

export interface MenuState {
  name: string;
  description: string;
  items: MenuItemState[];
}

export interface MenuItemState {
  name: string;
  description: string;
}
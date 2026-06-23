import type { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

export type IconComponent = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> &
    { title?: string; titleId?: string } &
    RefAttributes<SVGSVGElement>
>;

export const IconKeys = {
  MESSAGE: 'MESSAGE',
  REQUEST: 'REQUEST',
  VARIABLES: 'VARIABLES',
  QUESTION: 'QUESTION',
  CONDITION: 'CONDITION',
  TRANSFER_OPERATOR: 'TRANSFER_OPERATOR',
  MEDIA: 'MEDIA'
} as const;

export type IconKeys = keyof typeof IconKeys;

export interface NodesMenuState {
  menu?: MenuState[];
  activeGroup?: MenuState;
  setMenu: (menu: MenuState[]) => void;
  setActiveGroup: (activeGroup: MenuState | undefined) => void;
}

export interface MenuState {
  name: string;
  description: string;
  items: MenuItemState[];
}

export interface MenuItemState {
  name: string;
  description: string;
  type: string;
}
export interface IMenu {
  label: string;
  link: string;
}

export const menu: IMenu[] = [
  {
    label: 'Buy',
    link: '/property/buy',
  },
  {
    label: 'Rent',
    link: '/property/rent',
  },
];

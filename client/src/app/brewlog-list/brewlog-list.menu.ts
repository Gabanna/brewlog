import MenuItem from '@app/popovermenu/menu-item';

export function loadMenu(): Array<MenuItem> {
    return [
        {
          label: 'TITLE',
          icon: 'star'
        },
        {
          label: 'data',
          icon: 'star',
          langParam: {name: 'Kalle'}
        }
      ];
}
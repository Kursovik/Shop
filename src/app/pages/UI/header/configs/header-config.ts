import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

export function HEADER_MENU(router: Router): MenuItem[] {
  return [
    {
      label: 'Доставка и оплата',
      command: () => {
        router.navigate(['home']);
      },
    },
    {
      label: 'О компании',
      command: () => {
        router.navigate(['products']);
      },
    },
    {
      label: 'Контакты',
      command: () => {
        router.navigate(['about']);
      },
    },
    {
      label: 'Оптовым покупателям',
      command: () => {
        router.navigate(['']);
      },
    },
  ];
}

import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";


export function HEADER_MENU(router: Router): MenuItem[]
{
 return [
    {
      label: 'Главная',
      command: () => {
        router.navigate(['home']);
      }
    },
    {
      label: 'Товары',
      command: ()=>{
        router.navigate(['products'])
      }
    },
    {
      label: 'О нас',
      command: ()=>{
        router.navigate(['about']);
      }
    },
  ]
}

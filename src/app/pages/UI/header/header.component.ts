import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HEADER_MENU} from "./configs/header-config";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }
  public headerMenu = HEADER_MENU(this.router);
}

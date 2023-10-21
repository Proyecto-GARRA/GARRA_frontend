import { Component } from '@angular/core';

@Component({
  selector: 'options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent {
  public showSubMenu: boolean = false;

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }

  closeMenu() {
    this.showSubMenu = false;
    console.log('closeMenu called');

  }
}

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubmenuService } from 'src/app/services/submenu.service';

@Component({
    selector: 'options-menu',
    templateUrl: './options-menu.component.html',
    styleUrls: ['./options-menu.component.scss'],
})
export class OptionsMenuComponent {
    public showSubMenu: boolean = false;
    private closeAllSubmenusSubscription: Subscription;

    constructor(private menuService: SubmenuService) {
        this.closeAllSubmenusSubscription =
            this.menuService.closeAllSubmenus.subscribe(() => {
                this.showSubMenu = false;
            });
    }

    toggleSubMenu() {
        this.menuService.closeAllSubmenus.next();
        this.showSubMenu = !this.showSubMenu;
    }

    ngOnDestroy() {
        this.closeAllSubmenusSubscription.unsubscribe();
    }

    closeMenu() {
        this.showSubMenu = false;
    }
}

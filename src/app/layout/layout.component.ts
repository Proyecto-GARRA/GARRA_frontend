import { Component } from '@angular/core';
import { UsersService } from './../services/users.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
})
export class LayoutComponent {
    public userLoginOn: boolean = false;
    constructor(usersService: UsersService) {
        usersService.UserLoginOn.subscribe({
            next: userLoginOn => {
                this.userLoginOn = userLoginOn;
            },
        });
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

const components = [LoginComponent];

@NgModule({
    declarations: [components],
    exports: [components],
    imports: [
        CommonModule,
        AuthRoutingModule,
        PasswordModule,
        ButtonModule,
        FormsModule,
    ],
})
export class AuthModule {}

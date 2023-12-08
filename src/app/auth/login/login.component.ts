import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Credenciales } from 'src/app/interfaces/usuario';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public cred: Credenciales = new Credenciales();
    public formError = false;

    constructor(
        private usersService: UsersService,
        private router: Router
    ) {}

    login() {
        if (!this.cred.password || !this.cred.username) {
            this.formError = false;
            Swal.fire('Error', 'Error al ingresar los datos', 'error');
            return;
        }

        this.usersService.login(this.cred).subscribe({
            next: userData => {
                console.log(userData);
            },
            error: errorData => {
                console.error(errorData);
            },
            complete: () => {
                console.info('Login completo');
                this.router.navigateByUrl('/lista-clientes');
            },
        });
    }
}

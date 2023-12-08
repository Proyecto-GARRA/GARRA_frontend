import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import {
    BehaviorSubject,
    Observable,
    catchError,
    map,
    tap,
    throwError,
} from 'rxjs';
import { Credenciales } from '../interfaces/usuario';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private urlEndPoint: string = 'http://www.localhost:8080/auth/login';
    private HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );
    currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>('');

    constructor(private http: HttpClient) {
        this.currentUserLoginOn = new BehaviorSubject<boolean>(
            sessionStorage.getItem('token') != null
        );
        this.currentUserData = new BehaviorSubject<String>(
            sessionStorage.getItem('token') || ''
        );
    }

    login(credentials: Credenciales): Observable<any> {
        return this.http
            .post<any>(this.urlEndPoint, credentials, {
                headers: this.HttpHeaders,
            })
            .pipe(
                tap(userData => {
                    sessionStorage.setItem('token', userData.token);
                    this.currentUserData.next(userData.token);
                    this.currentUserLoginOn.next(true);
                }),
                map(userData => userData.token),
                catchError(this.handleError)
            );
    }

    logout(): void {
        sessionStorage.removeItem('token');
        this.currentUserLoginOn.next(false);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('Error: ' + error.error);
            throw Swal.fire('¡Error!', error.message, 'error');
        } else {
            console.error('Error del servidor: ' + error.status);
            if (error.status == 403) {
                throw Swal.fire(
                    '¡Error!',
                    'Usuario o contraseña incorrecta',
                    'error'
                );
            }
        }
        return throwError(() => new Error());
    }

    get UserData(): Observable<String> {
        return this.currentUserData.asObservable();
    }

    get UserLoginOn(): Observable<boolean> {
        return this.currentUserLoginOn.asObservable();
    }

    get UserToken(): String {
        return this.currentUserData.value;
    }
}

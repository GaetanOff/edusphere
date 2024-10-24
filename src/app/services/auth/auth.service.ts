import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {LocalstorageService} from "../storage/localstorage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _username: string = '';
  private _isLogged: boolean = false;

  constructor(private httpService: HttpService, private localStorage: LocalstorageService, private router: Router) {
  }

  public checkLogin(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/auth/login']);
      return;
    }

    //TODO: Check if token is still valid
    this._isLogged = true;
    this._username = localStorage.getItem('username') || '';
  }

  public async login(email: string, password: string): Promise<void> {
    this.httpService.postLogin(email, password).subscribe({
      next: (response: any): void => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', email);
          this.router.navigate(['/']);
          this._isLogged = true;
          this._username = email;
        }
      }
    });
  }


  public async disconnect(): Promise<void> {
    this._isLogged = false;
    this.localStorage.getLocalStorage.removeItem('token');
    this.localStorage.getLocalStorage.removeItem('username');
    this.router.navigate(['/auth/login']);
  }

  public isUserLogged(): boolean {
    return this._isLogged;
  }

  public getUsername(): string {
    return this._username;
  }
}

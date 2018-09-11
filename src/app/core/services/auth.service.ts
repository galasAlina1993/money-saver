import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public setToken(token): void {
    return localStorage.setItem('token', token);
  }
}
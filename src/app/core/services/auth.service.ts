import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public setToken(token): void {
    return localStorage.setItem('token', token);
  }

  public regiterUser(form) {
    return this.http
      .post<{login: string, password: string, token: string, name: string}>('http://localhost:3000/users', form);
  }
}

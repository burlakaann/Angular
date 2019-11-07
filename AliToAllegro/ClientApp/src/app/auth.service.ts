import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  bearer: string;


  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
    this.readCookie();
  }

  login() {
    window.location.href = 'https://allegro.pl/auth/oauth/authorize?response_type=code&client_id=1d8168cad3a7491ea39671b095c1244a&redirect_uri=http://localhost:57271&prompt=confirm';
  }

  logout() {
    this.bearer = null;
    this.router.navigate(['/']);
    this.writeCookie();
  }

  getToken(code) {
    this.http.post('http://localhost:8080/token', null, {
      params: {
        'code': code
      }
    }).subscribe(data => {
      this.bearer = data["access_token"];
      this.writeCookie();
    })
  }

  getBearerToken(): string {
    return this.bearer;
  }

  isLoggedIn() {
    return this.bearer != null;
  }

  writeCookie() {
    this.cookieService.set('bearer', this.bearer);
  }

  readCookie() {
    if (this.cookieService.check('bearer')) {
      this.bearer = this.cookieService.get('bearer');
    }
  }
}

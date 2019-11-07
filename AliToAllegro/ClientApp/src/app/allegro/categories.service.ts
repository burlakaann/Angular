import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCategories(id: string) {
    return this.http.post('http://localhost:8080/categories', null, {
      params: {
        'bearer': this.authService.getBearerToken(),
        'id': id
      }
    })
  }
}

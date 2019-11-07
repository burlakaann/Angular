import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient, private authService: AuthService ) { }

  uploadImage(image) {
    return this.http.post('http://localhost:8080/upload_image', {
      "url": image
    }, {
        params: {
          'bearer': this.authService.getBearerToken()
        }
      });
  }
}

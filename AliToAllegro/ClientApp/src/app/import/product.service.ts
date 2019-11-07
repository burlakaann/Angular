import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  productId: string;

  parseUrl(url: string) {
    var context = url.substr(0, url.indexOf("?"))
    var lastContext = context.substr(context.lastIndexOf("/"));
    this.productId = lastContext.substr(1, (lastContext.indexOf(".") - 1));

  }

  getProductHTMLDescription() {
    return this.httpClient.post('https://api.aliseeks.com/v1/products/description/html', {
      "productId": this.productId
    },
      {
        headers: {
          "X-API-CLIENT-ID": "UBBHMXOBBZYWNCOL",
          "Content-Type": "application/json"
        }
      });
  }

  getProductDetails() {

    return this.httpClient.post('https://api.aliseeks.com/v1/products/details', {
      "productId": this.productId,
      "currency": "PLN"
    },
      {
        headers: {
          "X-API-CLIENT-ID": "UBBHMXOBBZYWNCOL",
          "Content-Type": "application/json"
        }
      });

  }

  createDraft(body: any) {
    return this.httpClient.post('http://localhost:8080/draft', body,
      {
        params: {
          'bearer': this.authService.getBearerToken()
        }
      });
  }

}


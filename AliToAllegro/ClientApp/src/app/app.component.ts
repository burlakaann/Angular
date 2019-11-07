import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  constructor(private auth: AuthService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      var code = params['code'];
      if (code) {
        this.auth.getToken(code)
      }
    })
    
  }
  ngOnInit() {

  }



}

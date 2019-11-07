import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService) { }
  link: string;
  ngOnInit() {
  }

  import() {
    this.productService.parseUrl(this.link);
    this.router.navigate(['/import_form']);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoriesService } from 'src/app/allegro/categories.service';
import { GoogleService, GoogleObj } from 'src/app/google.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ImageService } from 'src/app/allegro/image.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-import-form',
  templateUrl: './import-form.component.html',
  styleUrls: ['./import-form.component.scss'],
  providers: [GoogleService]
})
export class ImportFormComponent implements OnInit {
  @ViewChild('descriptionView') descriptionView;

  public googleObj: GoogleObj = new GoogleObj();
  public key: string = "AIzaSyBehDcRXw1CmN-923sLFUDfHlIS9eLWcps";
  textLengthControl: FormControl;
  matcher: MyErrorStateMatcher;
  title: string;
  translated_title: string;
  translated: string;
  images = [];
  imagesCount: number;
  price: string;
  pieces: string;
  category: any;
  body: any;
  licytacja: boolean = false;
  kupteraz: boolean = false;
  EAN: string = "";
  podswietlenie: boolean = false;
  pogrubienie: boolean = false;
  wyroznienie: boolean = false;
  pakietPromo: boolean = false;
  promowanie: boolean = false;
  uploadImages: Array<{ [id: string]: string }>;

  constructor(private _google: GoogleService, private productService: ProductService, private categoriesService: CategoriesService, private imageServise: ImageService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.productService.getProductDetails().subscribe((data) => {
      this.title = data["title"];
      this.images = this.getImages(data["productImages"]);
      this.imagesCount = data["productImages"].length;
      this.price = data["prices"][0]["maxAmount"]["value"];
      this.pieces = data["promotions"][0]["stock"];
      this.googleObj.q = this.title;
      this.descriptionRequest();
    });
    this.textLengthControl = new FormControl('', Validators.maxLength(50));

    this.matcher = new MyErrorStateMatcher();
  }

  descriptionRequest() {
    this._google.translate(this.googleObj, this.key).subscribe(
      (res: any) => {
        this.translated = res.data.translations[0].translatedText;
        this.translated_title = this.translated;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteItem(link: string) {
    this.images.splice(this.images.indexOf(link),1);
  }

  onCategoryPicked(category: any) {
    this.category = category;
  }

  getCategory() {
    var category_id: { [id: string]: string; } = {
      "id": this.category.id
    };
    return category_id;
  }

  getName() {
    return this.translated_title;
  }

  getStock() {
    
    var stock: { } = { "available" : this.pieces , "unit" : "UNIT" };
    return stock;
  }

  getImages(image_list) {
    var array = Array<{ [id: string]: string }>();
    this.uploadImages = [];
    image_list.forEach((image) => {
      this.imageServise.uploadImage(image).subscribe((data: any) => {
        if (data.location != null && data.location != '') {
          this.uploadImages.push({ "url": data.location });
          array.push(data.location);
        } else {
          this.imagesCount -= 1;
        }
      });
      
    });
    return array;
  }

  getSellingMode() {
    var format: string;
    if (this.licytacja) {
      format = "AUCTION";
    }
    else {
      format = "BUY_NOW";
    }
    var price: { } = { "amount": this.price, "currency": "PLN" };
    
    var minimalPrice = price;
    var startingPrice = price;
    var sellingMode: {} = { "format": format, "price": price, "minimalPrice": minimalPrice, "startingPrice": startingPrice };
    
    return sellingMode;
  }

  getEAN() {
    return this.EAN;
  }

  getPromotion() {
    var promotion: {} = {
      "bold": this.pogrubienie,
      "highlight": this.podswietlenie,
      "emphasizedHighlightBoldPackage": this.pakietPromo,
      "emphasized": this.wyroznienie,
      "departmentPage": this.promowanie
    }
    return promotion;
  }

  getUrlImages() {
    return this.uploadImages;
  }

  offerDraftBody() {

    this.body = {
      "name": this.getName(),
      "category": this.getCategory(),
      "stock": this.getStock(),
      "images": this.getUrlImages(),
      "ean": this.getEAN(),
      "sellingMode": this.getSellingMode(),
      "promotion": this.getPromotion(),
      "description": this.descriptionView.getDescription()
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  submitOfferDraft() {
    this.offerDraftBody();
    this.productService.createDraft(this.body).subscribe((data) => {
      this.openSnackBar("Oferta jest zapisana do Allegro", "OK");
    },
    err => {
      this.openSnackBar(err, "OK");
    });

  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


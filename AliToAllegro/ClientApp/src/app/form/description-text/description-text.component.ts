import { Component, OnInit } from '@angular/core';
import { GoogleService, GoogleObj  } from 'src/app/google.service';
import { ProductService } from 'src/app/import/product.service';
import { element } from '@angular/core/src/render3';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-description-text',
  templateUrl: './description-text.component.html',
  styleUrls: ['./description-text.component.scss'],
  providers: [GoogleService]
})

export class DescriptionTextComponent implements OnInit {
  //AIzaSyBehDcRXw1CmN-923sLFUDfHlIS9eLWcps
  public googleObj: GoogleObj = new GoogleObj();
  public key: string = "AIzaSyBehDcRXw1CmN-923sLFUDfHlIS9eLWcps";
  public translatedDesc = '';
  descriptionHtml: string;
  descriptionText: string = "";
  descriptionContent: string;

  
  public domparser = new DOMParser();
  domdoc: Document;
  constructor(private _google: GoogleService, private productService: ProductService) {
  }

  

  ngOnInit() {
    this.productService.getProductHTMLDescription().subscribe((data) => {
      this.descriptionHtml = data["description"];
      this.domdoc = this.domparser.parseFromString(this.descriptionHtml, 'text/html');
      let elements = this.domdoc.getElementsByTagName("span");
      for (var i = 0; i < elements.length; i++) {
        this.descriptionText += elements[i].textContent + "\n\r" ;
      }
      this.googleObj.q = this.descriptionText;
      this.descriptionRequest();
    });
  }

  descriptionRequest() {
    var encoder = new TextEncoder();
    var decoder = new TextDecoder();
    this._google.translate(this.googleObj, this.key).subscribe(
      (res: any) => {
        this.translatedDesc = res.data.translations[0].translatedText;
        this.descriptionContent = this.translatedDesc.toString();
      },
      err => {
        console.log(err);
      }
    );
    
  }

  getContent() {
    return '<p>' + this.descriptionContent + '</p>';
  }

  editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "0",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": 'Dodaj opis tutaj...',
    "imageEndPoint": "",
    "toolbar": [
      ["bold", "italic"],
      ["orderedList", "unorderedList"]
    ]
  };

}

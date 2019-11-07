import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImagesDialogComponent } from '../images-dialog/images-dialog.component';

@Component({
  selector: 'app-description-image',
  templateUrl: './description-image.component.html',
  styleUrls: ['./description-image.component.scss']
})
export class DescriptionImageComponent implements OnInit {
  @Input() images: any;
  selectedImage: string;
  constructor(private matDialog: MatDialog ) { }

  ngOnInit() {
    this.selectedImage = 'http://excellance.com/wp-content/plugins/photonic/include/images/placeholder.png';
  }

  selectImage() {
    if (!(Object.keys(this.images).length === 0)) {
      let dialogRef = this.matDialog.open(ImagesDialogComponent, {
        data: { images: this.images }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result != null || result == '') {
          this.selectedImage = result;
        }
      });
    }
  }

  getUrlImage() {
    return this.selectedImage;
  }
}

import { Component, OnInit, Inject, Type, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-images-dialog',
  templateUrl: './images-dialog.component.html',
  styleUrls: ['./images-dialog.component.scss']
})
export class ImagesDialogComponent implements OnInit {
  images: any;
  constructor(public dialogRef: MatDialogRef<ImagesDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.images = data.images;
  }

  ngOnInit() {
  }

  selectedImage(image) {
    this.dialogRef.close(image);
  }

}

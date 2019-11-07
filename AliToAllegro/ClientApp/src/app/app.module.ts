import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { NgxEditorModule } from 'ngx-editor';
import { AppComponent } from './app.component';
import { DescriptionImageComponent } from './form/description-image/description-image.component';
import { ImagesDialogComponent } from './form/images-dialog/images-dialog.component';
import { MatInputModule } from '@angular/material';
import { TextImageItemsComponent } from './form/text-image-items/text-image-items.component';
import { ImageTextItemsComponent } from './form/image-text-items/image-text-items.component';
import { TextItemContainerComponent } from './form/text-item-container/text-item-container.component';
import { ImageItemContainerComponent } from './form/image-item-container/image-item-container.component';
import { TwoImageItemsComponent } from './form/two-image-items/two-image-items.component';
import { CategoriesService } from './allegro/categories.service';
import { CategorySelectorComponent } from './form/category-selector/category-selector.component';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    NgxEditorModule,
    MatInputModule,
    FormControl,
    FormGroupDirective,
    NgForm,
    Validators,
    ErrorStateMatcher,
    ReactiveFormsModule
  ],
  providers: [AuthService,
    CategoriesService,
    ErrorStateMatcher,
    CookieService
  ],
  bootstrap: [AppComponent],
  declarations: [DescriptionImageComponent, ImagesDialogComponent, TextImageItemsComponent, ImageTextItemsComponent, TextItemContainerComponent, ImageItemContainerComponent, TwoImageItemsComponent, CategorySelectorComponent]
})
export class AppModule {
 
}

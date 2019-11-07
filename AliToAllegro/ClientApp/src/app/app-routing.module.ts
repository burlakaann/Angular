import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatDialogModule, ErrorStateMatcher, MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { LoginComponent } from './toolbar/login/login.component';
import { ImportComponent } from './import/import/import.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ImportFormComponent } from './import/import-form/import-form.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { DescriptionContainerComponent } from './form/description-container/description-container.component';
import { DescriptionItemsComponent } from './form/description-items/description-items.component';
import { DescriptionTextComponent } from './form/description-text/description-text.component';
import { NgxEditorModule } from 'ngx-editor';
import { ItemDirective } from './form/description-items/item.directive';
import { DescriptionImageComponent } from './form/description-image/description-image.component';
import { ImagesDialogComponent } from './form/images-dialog/images-dialog.component';
import { ImageItemContainerComponent } from './form/image-item-container/image-item-container.component';
import { TextItemContainerComponent } from './form/text-item-container/text-item-container.component';
import { ImageTextItemsComponent } from './form/image-text-items/image-text-items.component';
import { TextImageItemsComponent } from './form/text-image-items/text-image-items.component';
import { TwoImageItemsComponent } from './form/two-image-items/two-image-items.component';
import { ItemsDirective } from './form/description-container/items.directive';
import { CategorySelectorComponent } from './form/category-selector/category-selector.component';
import { AuthGuard } from './auth.guard';
import { CookieService } from 'ngx-cookie-service';

const routes: Routes = [
  { path: 'import_form', component: ImportFormComponent, canActivate: [AuthGuard] },
  { path: '', component: ImportComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ImportFormComponent,
    ToolbarComponent,
    LoginComponent,
    ImportComponent,
    DescriptionContainerComponent,
    DescriptionItemsComponent,
    DescriptionTextComponent,
    DescriptionImageComponent,
    ItemDirective,
    ItemsDirective,
    ImagesDialogComponent,
    ImageItemContainerComponent,
    TextItemContainerComponent,
    ImageTextItemsComponent,
    TextImageItemsComponent,
    TwoImageItemsComponent,
    CategorySelectorComponent
  ],
  entryComponents: [
    DescriptionTextComponent,
    DescriptionImageComponent,
    ImagesDialogComponent,
    ImageItemContainerComponent,
    TextItemContainerComponent,
    ImageTextItemsComponent,
    TextImageItemsComponent,
    TwoImageItemsComponent,
    DescriptionItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    NgxEditorModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent],
  providers: [ErrorStateMatcher, CookieService]
})
export class AppRoutingModule { }

import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from 'src/app/allegro/categories.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  @Input() category: any;
  @ViewChild('childMenu') public childMenu;
  @Output() onCategoryPicked: EventEmitter<any> = new EventEmitter<any>();

  categories: any;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    let categoryId
    if (this.category == null) {
      categoryId = '';
    } else {
      categoryId = this.category.id;
    }

    this.categoriesService.getCategories(categoryId).subscribe((data: any) => {
      this.categories = data.categories;
    });
  }

  pickCategory(category: any) {
    if (this.category != null) {
      category.name = this.category.name + ' - ' + category.name;
    }

    this.onCategoryPicked.emit(category);
  }

  returnCategory(category: any) {
    if (this.category != null) {
      category.name = this.category.name + ' - ' + category.name;
    }

    this.onCategoryPicked.emit(category);
  }

}

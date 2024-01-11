import { Component, Input } from '@angular/core';
import {
  faFolderClosed,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-phonetic-category',
  templateUrl: './phonetic-category.component.html',
  styleUrls: [
    './phonetic-category.component.scss',
    '../phonetics.component.scss',
  ],
})
export class PhoneticCategoryComponent {
  @Input() categoryTitle: string = '';
  @Input() itemCount: number = 0;
  @Input() items: any[] = [];

  isSeen: boolean = false;

  faFolderClosed = faFolderClosed;
  faFolderOpen = faFolderOpen;

  toggleCategory() {
    this.isSeen = !this.isSeen;
  }
}

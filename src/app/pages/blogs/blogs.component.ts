import { Component } from '@angular/core';
import { TRANSLOCO_ALIAS_BLOGS } from './blogs-scope.transloco';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_BLOGS}.pages.blogs`;
}

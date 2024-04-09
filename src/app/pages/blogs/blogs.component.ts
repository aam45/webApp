import { Component, OnInit } from '@angular/core';
import {
  TRANSLOCO_ALIAS_BLOGS,
  TRANSLOCO_SCOPE_BLOGS_PROVIDER,
} from './blogs-scope.transloco';
import { Blog } from './blog';
import { TranslationsService } from '../../core/TransaltionService/translations.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [TRANSLOCO_SCOPE_BLOGS_PROVIDER],
})
export class BlogsComponent implements OnInit {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_BLOGS}.blogs`;

  public blogs!: Array<Blog>;

  constructor(private readonly transloco: TranslationsService) {}

  public ngOnInit(): void {
    setTimeout(() => {
      console.log(
        this.transloco.translateWithKey(this.i18nPath, 'article_1.title')
      );
    }, 1000);
  }
}

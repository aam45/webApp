import { Component, OnInit } from '@angular/core';
import {
  TRANSLOCO_ALIAS_BLOGS,
  TRANSLOCO_SCOPE_BLOGS_PROVIDER,
} from './blogs-scope.transloco';
import { Blog } from './blog';
import { TranslationsService } from '../../core/translations.service';

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
    this.blogs = this.buildUpBlogs();
  }

  private buildUpBlogs(): Array<Blog> {
    // const translated = (key: string) =>this.transloco.translateWithKeyAndParams(`${this.i18nPath}.${key}`);
    const trans = (key: string) =>
      this.transloco.translateWithKey(this.i18nPath, key);
    const webContent: string = 'articles.webContent';
    console.log(trans(`${webContent}.image.src`));
    return [
      {
        image: {
          src: trans(`${webContent}.image.src`),
          alt: trans(`${webContent}.image.alt`),
        },
        title: trans(`${webContent}.title`),
        content: trans(`${webContent}..content`),
      },
      {
        image: {
          src: trans('articles.Design.image.src'),
          alt: trans('projects.subtext'),
        },
        title: trans('projects.number-of-Projects'),
        content: trans('projects.text'),
      },
      {
        image: {
          src: trans('projects.subtext'),
          alt: trans('projects.subtext'),
        },
        title: trans('projects.number-of-Projects'),
        content: trans('projects.text'),
      },
      {
        image: {
          src: trans('projects.subtext'),
          alt: trans('projects.subtext'),
        },
        title: trans('projects.number-of-Projects'),
        content: trans('projects.text'),
      },
    ];
  }
}

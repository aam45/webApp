import { Component, Input } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-items',
  templateUrl: './blog-items.component.html',
  styleUrls: ['./blog-items.component.css'],
})
export class BlogItemsComponent {
  @Input() public blog!: Blog;
}

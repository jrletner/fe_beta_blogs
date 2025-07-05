import { Component } from '@angular/core';
import { Blog } from './shared/models/blog';
import { BlogService } from './core/services/blog.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fe_beta_blogs';

  blogs: Blog[] = [];
  constructor(private blogsService: BlogService) {}

  ngOnInit(): void {
    this.blogsService.getBlogs().subscribe({
      next: (blogs) => {
        this.blogs = blogs;
        console.log(this.blogs);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

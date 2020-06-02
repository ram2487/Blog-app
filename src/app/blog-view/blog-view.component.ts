import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  private route: ActivatedRoute;
  private router: Router;
  public blogId: String;
  
  //same blogname or field name shoud be given in the view to acess this item.
  public currentBlog;


  constructor(private blogService: BlogService,_route: ActivatedRoute, routerR: Router) {
    this.route = _route;
    this.router = routerR;
    console.log("constructor called");

  }

  ngOnInit(): void {
    console.log("init called");

    let blogId = this.route.snapshot.paramMap.get('blogId');
    console.log(blogId);

    this.currentBlog =  this.blogService.getBlogById(blogId);

  }

 

}

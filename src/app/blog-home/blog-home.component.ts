import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { BlogHttpService } from '../services/blog-http.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit, OnDestroy {

  public blogData: any;

  constructor(private service: BlogService,
    private httpService: BlogHttpService
  ) {

  }

  ngOnInit(): void {
    console.log("Home On it");
    let response = this.httpService.getAll()
      .subscribe(
        data => {
          console.log("getting data");

          console.log(data);

          this.blogData = data["data"]
        },
        error => {
          console.log("error" + error.error);

        }
      );


  }

  ngOnDestroy(): void {
    console.log("On destroyed");

  }
}

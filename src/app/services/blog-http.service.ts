import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {


  private blogData;
  private  edwisorUrl = 'http://blogapp.edwisor.com/api/v1/blogs/';
  
  constructor(private _http: HttpClient) {
    console.log("HTTP service running");
  }

  public getAll():any{
    let getAll = this.edwisorUrl+"/all?authToken=ZjFmOTU0OWE4NTFkMzRiNDZkMGY5MjUxZmNiYTE1N2U2MmU1MWJiM2ZiZjkzZTgwZmZlMTE4MTM1ZWFiZjI3YjM2NmNmMzIwODZjOTdjY2Y3MmNhMTE1ZGExYjJiM2RjODIzNDE3NjI5ZWVkNTk0ZmE4MTcxMzEzNjZhMmJiNmJlOQ"
   this.blogData = this._http.get(this.edwisorUrl);
    return this.blogData;
  }

  public getOne(blogId):any{
    let getOneUrl = this.edwisorUrl+"blogs/view/"+blogId+"?authToken=ZjFmOTU0OWE4NTFkMzRiNDZkMGY5MjUxZmNiYTE1N2U2MmU1MWJiM2ZiZjkzZTgwZmZlMTE4MTM1ZWFiZjI3YjM2NmNmMzIwODZjOTdjY2Y3MmNhMTE1ZGExYjJiM2RjODIzNDE3NjI5ZWVkNTk0ZmE4MTcxMzEzNjZhMmJiNmJlOQ"
    this.blogData = this._http.get(getOneUrl);
    return this.blogData;
  }

  public createBlog(blogData):any{
    let getOneUrl = this.edwisorUrl+"blogs/view/"+blogId+"?authToken=ZjFmOTU0OWE4NTFkMzRiNDZkMGY5MjUxZmNiYTE1N2U2MmU1MWJiM2ZiZjkzZTgwZmZlMTE4MTM1ZWFiZjI3YjM2NmNmMzIwODZjOTdjY2Y3MmNhMTE1ZGExYjJiM2RjODIzNDE3NjI5ZWVkNTk0ZmE4MTcxMzEzNjZhMmJiNmJlOQ"
    this.blogData = this._http.get(getOneUrl);
    return this.blogData;
  }
  public deleteBLog(blogId):any{
    let getOneUrl = this.edwisorUrl+"blogs/view/"+blogId+"?authToken=ZjFmOTU0OWE4NTFkMzRiNDZkMGY5MjUxZmNiYTE1N2U2MmU1MWJiM2ZiZjkzZTgwZmZlMTE4MTM1ZWFiZjI3YjM2NmNmMzIwODZjOTdjY2Y3MmNhMTE1ZGExYjJiM2RjODIzNDE3NjI5ZWVkNTk0ZmE4MTcxMzEzNjZhMmJiNmJlOQ"
    this.blogData = this._http.get(getOneUrl);
    return this.blogData;
  }
}

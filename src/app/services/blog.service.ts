import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;


  public blogData = [
    {
      "kind": "blogger#post",
      "id": "7706273476706534553",
      "blogId": "2399953",
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.947Z",
      "imageUrl": "https://www.telegraph.co.uk/content/dam/Travel/galleries/travel/destinations/europe/uk/london/Londons-lost-buildings/betjeman12_2915585a.jpg",
      "title": "The Lost Building",
      "tags":[],
      "category":"Fiction",
      "description": "Today, property and cultural heritage protection is paramount, meaning that the mere idea of ripping down a building of historical significance isn’t a fathomable.",
      "content": "<p class=\"mb-0 font-italic \">Today, property and cultural heritage protection is paramount, meaning that the mere idea of ripping down a building of historical significance isn’t a fathomable possibility. That landlords would tear down houses, politicians bulldoze gothic-spired churches or army officials blitz beautiful buildings isn’t something that threatens the architecture of today. Yet throughout history we see patterns of buildings subject to the whims of irrational landowners or the destruction of war with no protection in place to assure their reconstruction.</p>",    
      "author": {
        "id": "401465483996",
        "displayName": "John Willys",
        "url": "http://www.blogger.com/profile/01430672582309320414",
        "image": {
          "url": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
        }
      },
      "replies": {
        "totalItems": "0",
        "selfLink": "https://www.googleapis.com/blogger/v2/blogs/2399953/posts/7706273476706534553/comments"
      }
    },
    {
      "kind": "blogger#post",
      "id": "7706273476706534553",
      "blogId": "2399954",
      "published": "2011-09-01T19:58:00.000Z",
      "updated": "2011-09-01T19:58:51.947Z",
      "imageUrl": "https://i.thehoroscope.co/wp-content/uploads/2018/07/Seduce-Libra-man-Man-in-hotel-room.jpg",
      "title": "The Adamant Guy",
      "tags":[],
      "category":"Personal",
      "description": "\"The Man of Adamant\" is a short story written by Nathaniel Hawthorne, published in the 1837.Richard Digby, who believes his philosophy on life is the correct one, refuses to share his ideas with anyone else.",
      "content": "<p class=\"mb-0 font-italic\">\"The Man of Adamant\" is a short story written by Nathaniel Hawthorne, published in the 1837.Richard Digby, who believes his philosophy on life is the correct one, refuses to share his ideas with anyone else. His heart ails from accretions of calculous. He leaves his home, deciding to become a hermit. In the wilderness he discovers a cave and decides to make it his new home, a place where he can meditate. Water dripping from the roof, over time, has created forms of adamant within the cave. Digby decides not to drink from a nearby fountain; instead, he drinks the water dripping from the roof.</p>",
      "author": {
        "id": "401465483996",
        "displayName": "Brett Wiltshire",
        "url": "http://www.blogger.com/profile/01430672582309320414",
        "image": {
          "url": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
        }
      },
      "replies": {
        "totalItems": "0",
        "selfLink": "https://www.googleapis.com/blogger/v2/blogs/2399953/posts/7706273476706534553/comments"
      }
    }
  ];

  constructor() {
    console.log("Blog service running");
  }

  public getBlogById(id: any): any {

    for (let blog of this.blogData) {
      if (blog.blogId == id) {
        this.currentBlog = blog;

      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }

  public getAllBlogs():any{
    return this.blogData;
  }
}

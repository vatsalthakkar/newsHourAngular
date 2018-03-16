import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { newsApi } from '../configs/newsapiconfig';
import { App } from '../configs/appconfig';


@Injectable()
export class NewsService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});


  // Function to get search text and make service call to get movies fromnewsApi
  searchMovie(searchedText) {
    return this.http.get(newsApi.search_api1+searchedText+newsApi.search_api2)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   // Add favourite movie to database
  addArticle(article) {
   return this.http.post(App.apiUrl+"articles",article, {headers: this.headers});
  }

  getFavArticle(){
    return this.http.get(App.apiUrl+"db")
    .map(data => data.json(),
    (err) => {
      console.log("error encountered");
    });
  }

  deleteFav(article){
     return this.http.delete(App.apiUrl+"articles/"+article.source.id, {headers: this.headers});
  }

}
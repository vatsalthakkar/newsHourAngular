

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news-service.service'

@Component({
  selector: 'app-fav-articles',
  templateUrl: './fav-articles.component.html',
  styleUrls: ['./fav-articles.component.css'],
  providers: [NewsService]
})
export class FavArticlesComponent implements OnInit {
  articleList = [];
  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.newsService.getFavArticle().subscribe((res)=>{
      this.articleList=res.articles;
      console.log(this.articleList);
    },(err)=>{
      console.log("error encountered");
    }) ;
}
  }
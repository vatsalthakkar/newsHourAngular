
import { Component, OnInit,Input } from '@angular/core';
import { NewsService } from '../../../services/news-service.service'
@Component({
  selector: 'app-fav-article-list',
  templateUrl: './fav-article-list.component.html',
  styleUrls: ['./fav-article-list.component.css'],
  providers: [NewsService]
})
export class FavArticleListComponent implements OnInit {
  @Input() article;
  constructor(private newsService : NewsService) { }

  ngOnInit() {
  }

deleteFav(){
  this.newsService.deleteFav(this.article).subscribe((res)=>{
    alert(res);}
    ,(err)=>
  {
    alert(err);
  });
}

}

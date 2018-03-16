import { Component, OnInit ,Input} from '@angular/core';
import {NewsService} from '../../../../services/news-service.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[NewsService]
})
export class ArticleComponent implements OnInit {

	@Input() article:any;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  //add favourite movie to database
  addArticle(article){
  	this.newsService.addArticle(this.article).subscribe((res)=> {
  	}, (error)=>{

  	})
  }
}

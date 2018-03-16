import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../../../services/news-service.service'

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css'],
  providers:[NewsService]
})
export class NewsSearchComponent implements OnInit {

	public query:string='';
	@Output() success = new EventEmitter<any>();
	public articleList=[];
  
  constructor(private  newsService : NewsService) { }

  ngOnInit() {
  }

  //function to get the query and articles according to query from the newsService

  searchNews(){
  	this.newsService.searchMovie(this.query).subscribe((res) =>{
  	debugger;
    this.articleList = res.articles;
  	this.success.emit({
      'articleList': this.articleList
    });
  	}, (error) =>{

  	})
  }

}

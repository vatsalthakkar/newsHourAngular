import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

	public articles=[];
  constructor() { }

  ngOnInit() {
  }

  //update articles according to the query
  setArticleList(event){
  	debugger;
  	this.articles=event.articleList;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NewsSearchComponent } from './components/articles/news-search/news-search.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { ArticleComponent } from './components/articles/article-list/article/article.component';
import { FavArticlesComponent } from './components/fav-articles/fav-articles.component';
import { FavArticleListComponent } from './components/fav-articles/fav-article-list/fav-article-list.component';
import { FavArticleComponent } from './components/fav-articles/fav-article-list/fav-article/fav-article.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes:Routes=[
  {path:'articles',component:ArticlesComponent},
  {path:'',redirectTo:'/articles',pathMatch:'full'},
  {path:'fav-articles',component:FavArticlesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    NewsSearchComponent,
    ArticleListComponent,
    ArticleComponent,
    FavArticlesComponent,
    FavArticleListComponent,
    FavArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

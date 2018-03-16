import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavArticleListComponent } from './fav-article-list.component';

describe('FavArticleListComponent', () => {
  let component: FavArticleListComponent;
  let fixture: ComponentFixture<FavArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

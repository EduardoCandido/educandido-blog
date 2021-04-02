import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ArticleCardComponent } from './article-card/articleCard.component';



@NgModule({
  declarations: [HeaderComponent, ArticleCardComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HttpClientModule,
    HeaderComponent,
    ArticleCardComponent
  ]
})
export class SharedModule { }

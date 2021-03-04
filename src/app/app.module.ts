import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleCardComponent } from './components/article-card/articleCard.component';
import { SharedModule } from './shared/shared-module.module';


@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

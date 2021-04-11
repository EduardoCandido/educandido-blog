import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import routes from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './containers/home/home.module';
import { SharedModule } from './shared/shared-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    RouterModule.forRoot(routes)
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'articleCard',
  templateUrl: './articleCard.component.html',
  styleUrls: ['./articleCard.component.css']
})
export class ArticleCardComponent implements OnInit {
  public isBigger: boolean = false
    
  constructor() { }

  ngOnInit(): void {
  }

}

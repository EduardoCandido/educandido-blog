import { Component } from '@angular/core';
import {messages} from 'src/app/resources/messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  public messages = messages;
}

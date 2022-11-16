import { Component } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day3';


  constructor(private metaService:Meta, private titleService:Title) {

    const tag:MetaDefinition = {
      name:'Angular',
      content:'Angular 13 App'
    }
    this.metaService.addTag(tag);

    this.titleService.setTitle('App');
  }


}

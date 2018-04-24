import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  featureSelected: string = 'recipe';

  onNavigate(event){
    this.featureSelected = event;
  }
}

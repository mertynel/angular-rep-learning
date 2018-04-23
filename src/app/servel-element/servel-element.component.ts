import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servel-element',
  templateUrl: './servel-element.component.html',
  styleUrls: ['./servel-element.component.css']
})
export class ServelElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // by component
  //selector: '[app-servers]', //by atributes
  // selector: '.app-servers.', // by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';

  constructor() { 
    setTimeout(()=> {
        this.allowNewServer = true;
    }
    ,2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!:) yours server name is:' + this.serverName;
  }
  onUpdateServerName(event: Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

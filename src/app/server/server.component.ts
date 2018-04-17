import {Component} from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = '';
    randomNum: number = null

    constructor(){
        this.randomNum = Math.random();
    }

    getServerStatus() {
        return this.randomNum > 0.5 ? 'offline' : 'online';
    }

    getColor(){
        return this.randomNum > 0.5 ? 'red' : 'green';
    }
}
import {Component, EventEmitter, Output} from '@angular/core'
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})

export class HeaderComponent {
   @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        console.log('from header: ' + feature)
        this.featureSelected.emit(feature);
    }
}

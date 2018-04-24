import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-servel-element',
  templateUrl: './servel-element.component.html',
  styleUrls: ['./servel-element.component.css']
})
export class ServelElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { 
    console.log('constructor called')
  }

  ngOnInit() {
    console.log('ngOnInit called')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngDoCheck(){
    console.log('doCkeck called.')
  }

  ngAfterContentInit(){
    console.log('afterContentInit called.')
  }

  ngAfterContentChecked(){
    console.log('afterContentChecked called.')
  }

  ngAfterViewChecked(){
    console.log('afterViewChecked called.')    
  }

  ngOnDestroy(){
    console.log('onDestroy called.')    
    
  }

}

import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') bacgroundColor: string = 'black';
  
  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef) { }
    
    ngOnInit(){
      // this.renderer.setStyle(
      //   this.elRef.nativeElement,
      //   'background-color', 'blue'
      // );
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.bacgroundColor = 'blue'
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange');
      this.bacgroundColor = 'orange'
    }



}

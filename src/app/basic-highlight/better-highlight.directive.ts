import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') bacgroundColor: string = 'black';
  @Input() defaultColor: string = 'orange';
  @Input() highlightColor: string = 'blue'

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
      this.bacgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange');
      this.bacgroundColor = this.defaultColor;
    }



}

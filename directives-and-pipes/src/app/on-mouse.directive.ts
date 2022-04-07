import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnMouse]'
})
export class OnMouseDirective{
  @Input() defaultHoverColor = "gray";
  private originalColor = "";

  @HostListener('mouseenter') onMouseEnter(){
    const {style} = this.elementRef.nativeElement;
    this.originalColor = style.backgroundColor;
    style.backgroundColor = this.defaultHoverColor;

  }
  @HostListener('mouseleave') onMouseLeaver(){
    const {style} = this.elementRef.nativeElement;
    style.backgroundColor = this.originalColor;
  }
  constructor(private elementRef: ElementRef) { }
}

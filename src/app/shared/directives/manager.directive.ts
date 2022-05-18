import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appManager]'
})
export class ManagerDirective {
  @Input('appManager') highlightColor: string | undefined;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor || 'gold');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight("");
  }

  private highlight(color: string): void {
    if (this.el.nativeElement.innerHTML.toLocaleLowerCase() === 'developer') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }
  }
}

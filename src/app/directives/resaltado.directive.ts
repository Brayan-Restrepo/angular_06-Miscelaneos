import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appResaltado') nuevoColor: string;

  constructor( private elemento: ElementRef ) { }

  @HostListener('mouseenter')
  mouseEntro() {
    this.resaltar( this.nuevoColor || 'yellow' );
  }

  @HostListener('mouseleave')
  mouseSalio() {
    this.resaltar( null );
  }

  private resaltar(color: string) {
    this.elemento.nativeElement.style.backgroundColor = color;
  }

}

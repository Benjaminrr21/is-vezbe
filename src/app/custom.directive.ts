import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[malaslova]'
})
export class CustomDirective {

  constructor(private el:ElementRef) { }

  @HostListener('keyup') keyup(){
    let value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }
}

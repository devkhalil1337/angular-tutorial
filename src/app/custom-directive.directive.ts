import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef) { }

  @Input('format') format;


  @HostListener('type') onType(){
    console.log("on type")
  }


  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    if(this.format == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();
    console.log("on blur")
  }


}

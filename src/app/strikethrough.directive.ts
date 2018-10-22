import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem: ElementRef) { }


  @HostListener("click") onclicks() {
    this.lineThrough("line-through")
  }

  @HostListener("dbclick") onDoubleClicks() {
    this.lineThrough("None")
  }


  private lineThrough(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }
}


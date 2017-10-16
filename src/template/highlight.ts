import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    'selector': '[highlight]'
})
export class Highlight {

    constructor(el: ElementRef, renderer: Renderer) {
        // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'green');
        // renderer.setElementStyle(el.nativeElement, 'color', 'white');
        el.nativeElement.style.color = "orange";
        el.nativeElement.style.backgroundColor = "white";
    }
}
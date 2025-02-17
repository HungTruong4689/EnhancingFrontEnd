import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent implements AfterContentInit {
  
  label = input.required<string>();
  private el = inject(ElementRef);
  @ContentChild('input') control? : ElementRef<HTMLInputElement|HTMLTextAreaElement>;

  constructor(){
    afterRender(() => {
      console.log('after render');
    });

    afterNextRender(() => {
      console.log('after next render');
    });
  }

  ngAfterContentInit() {
    console.log('control after content init');
    console.log(this.control);
  }

  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control);
  }
}

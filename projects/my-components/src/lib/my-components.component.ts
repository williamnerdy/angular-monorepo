import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-components',
  template: `
    <p>
      my-components works!
    </p>
  `,
  styles: [
  ]
})
export class MyComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

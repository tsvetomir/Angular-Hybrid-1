import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="ng2">
        <kendo-grid></kendo-grid>
    </div>
  `,
})
export class AboutNg2Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

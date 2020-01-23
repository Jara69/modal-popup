import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {createElementCssSelector} from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ukolweb';
  private open = false;

  Clicked() {
    this.open = true;
  }

}





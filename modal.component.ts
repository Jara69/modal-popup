import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']

})
export class ModalComponent implements OnInit {
  private bodyText: string;

  @Input()
  hideapp = false;
  hideclose = true;

  hide() {
    this.hideclose = false;
    this.hideapp = false;
  }

  ngOnInit() {
  }

}

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {

  @Input() itext: any;

  constructor() { }

  ngOnInit(): void {
  }

}

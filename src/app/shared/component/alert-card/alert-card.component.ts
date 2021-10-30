import { Component, Input, OnInit } from '@angular/core';
import { DatabaseInfo2 } from '../../userDb';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.css']
})
export class AlertCardComponent implements OnInit {
  
  @Input() dataReceive?: DatabaseInfo2[];

  constructor() { }

  ngOnInit(): void {
  }

}

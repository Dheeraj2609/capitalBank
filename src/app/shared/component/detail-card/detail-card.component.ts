import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DatabaseInfo } from 'src/app/shared/userDb';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailCardComponent implements OnInit {

  cardText: string | undefined = "OK";
  acntNo: number | undefined = 1;

  @Input() dataRec?: DatabaseInfo[];

  constructor() { }

  ngOnInit(): void {
  }

}

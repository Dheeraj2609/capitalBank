import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailCardComponent implements OnInit {

  cardText: string | undefined = "OK";
  acntNo: number | undefined = 1;

  @Input() firstdata:any;
  @Input() seconddata:any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  db1: any;
  db2: any;

  constructor(private userdb: DbService) { }
  
  getuser1() {
    this.userdb.getDb().subscribe(data => {
      console.log(data);
      this.db1 = data;
    });
  }

  getuser2() {
    this.userdb.getDb1().subscribe(data1 => {
      console.log(data1);
      this.db2 = data1;
    });
  }

  ngOnInit(): void {
  }

}

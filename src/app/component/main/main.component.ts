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
  db3: any;
  db4: any;

  constructor(private userdb: DbService) { 
    this.getuser1();
    this.getuser2();
    this.getuser3();
    this.getuser4();
  }
  
  getuser1() {
    this.userdb.getDb("/Loans").subscribe(data => {
      this.db1 = data;
      console.log(this.db1);
    });
  }

  getuser2() {
    this.userdb.getDb("/Deposits").subscribe(data1 => {
      this.db2 = data1;
    });
  }

  getuser3() {
    this.userdb.getDb("/Emails").subscribe(data1 => {
      this.db3 = data1;
    });
  }

  getuser4() {
    this.userdb.getDb("/IncompleteTrans").subscribe(data1 => {
      this.db4 = data1;
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Serv1Service } from 'src/app/services/serv1.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  displayedColumns: string[] = ['id','employee_name', 'employee_salary', 'employee_age', 'profile_image','company'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  arr: any = [];

  constructor(public ser: Serv1Service) { }

  ngOnInit() {
    this.ser.getTabData().subscribe(res=>{
      console.log(res);
      this.arr = res;
      console.log(this.arr)

      this.arr.forEach(x=>{
        x["company"] = "miracle";
        return x;
      })
      setTimeout(() => this.dataSource.paginator = this.paginator);
      this.dataSource = new MatTableDataSource(this.arr)
   
    });
    //console.log(this.arr)
    //this.dataSource = new MatTableDataSource(this.arr)
  }

}
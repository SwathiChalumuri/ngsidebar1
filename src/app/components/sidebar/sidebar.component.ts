import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  displayedColumns: string[] = ['button','position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  opened = false;
  animate: boolean = true;
  value1;
  value2;
  value3;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  obj = {};
  arr = [];
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  openSidebar(ele){
    console.log(ele);
    this.obj = ele;
    console.log(this.obj['position']);
    this.opened = !this.opened;
    this.arr = ELEMENT_DATA;
    console.log(this.arr);
    //console.log(this.opened);
  
  }
   toggleOpened(): void {
    this.opened = !this.opened;
  }
  ok(){
  
    // console.log(this.value3)
    this.arr.forEach(x=>{
      if(x.position === this.obj['position']){
        // x.name = this.obj['name'];
        // x.weight = this.obj['weight'];
        // x.symbol = this.obj['symbol'];
        if(this.value1){
          x.name = this.value1;

        }
        if(this.value2){
          x.weight = this.value2;
        }
        if(this.value3){
        x.symbol = this.value3;        

        }
      }
    })
   this.dataSource = new MatTableDataSource(this.arr);
  }
  oninputChange(ev){
    console.log("oninputChange",ev.target.value);
    if(ev.target.value){
    this.value1 = ev.target.value;
    }
  }
  oninputChange1(ev){
    console.log("oninputChange1",ev.target.value);
    if(ev.target.value){
      this.value2 = ev.target.value;
      }
  }
  oninputChange2(ev){
    console.log("oninputChange2",ev.target.value);
    if(ev.target.value){
      this.value3 = ev.target.value;
      }
  }
}
  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
   
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];



import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

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
];

@Component({
  templateUrl: './material-components-page.component.html',
  styleUrls: ['./material-components-page.component.scss']
})
export class MaterialComponentsPageComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource!:MatTableDataSource<PeriodicElement>;




  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  clicked = false;

  constructor() { }

  ngOnInit(): void {

    // MatTableDataSource nense tanımlamışlar.
    // data set ettik
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    

  }


  ngAfterViewInit() {
    // table paginator olarak set etiyoruz
    // yanbi table component doma yüklendikten sonra sayfalamayı aktif hale getiriyoruz

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // burada datasource üzerinden filtreleme yapıyor
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // eğer pagination varsa
    if (this.dataSource.paginator) {
      // filtrelenmiş sonuçları ilk sayfa göster
      this.dataSource.paginator.firstPage();
    }
  }

}

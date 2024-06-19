import { Component,ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-quanlydangky-kltn',
  templateUrl: './quanlydangky-kltn.component.html',
  styleUrl: './quanlydangky-kltn.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatPaginator],
})
export class QuanlydangkyKltnComponent {
  displayedColumns: string[] = ['studentId', 'fullName', 'email', 'phone', 'major'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  studentId: number;
  fullName: string;
  email: string;
  phone: string;
  major: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {studentId: 653242, fullName: 'a', email: 'acb@gmail.com', phone: '022345678', major:'Công Nghệ Thông Tin'},
  {studentId: 645342, fullName: 'b', email: 'b@gmail.com', phone: '012345678', major:'Công Nghệ Phần Mềm'},
  {studentId: 653453, fullName: 'c', email: 'c@gmail.com', phone: '011345678', major:'Công Nghệ Thông Tin'},
  {studentId: 653774, fullName: 'd', email: 'ab@gmail.com', phone: '012335678', major:'An Toàn Thông Tin'},
  {studentId: 6634225, fullName: 'e', email: 'cb@gmail.com', phone: '012344678', major:'Công Nghệ Thông Tin'},
  {studentId: 652231, fullName: 'Hy', email: 'ac@gmail.com', phone: '012345578', major:'Công Nghệ Thông Tin'},
  {studentId: 657885, fullName: 'drogen', email: 'aacb@gmail.com', phone: '032349678', major:'Công Nghệ Thông Tin'},
  {studentId: 658323, fullName: 'droge', email: 'acacb@gmail.com', phone: '032395678', major:'Công Nghệ Thông Tin'},
  {studentId: 6696768, fullName: 'drogn', email: 'aaccb@gmail.com', phone: '032945678', major:'Công Nghệ Thông Tin'},
  {studentId: 641015, fullName: 'drgen', email: 'caacb@gmail.com', phone: '092345678', major:'Công Nghệ Thông Tin'},
  {studentId: 641112, fullName: 'rogen', email: 'aacbc@gmail.com', phone: '032945678', major:'Công Nghệ Phần Mềm'},
  {studentId: 631221, fullName: 'dogen', email: 'accacb@gmail.com', phone: '032945678', major:'An Toàn Thông Tin'},
  {studentId: 651331, fullName: 'droen', email: 'aaccb@gmail.com', phone: '032345978', major:'Công Nghệ Thông Tin'},
  {studentId: 651412, fullName: 'drogn', email: 'cacacb@gmail.com', phone: '032349678', major:'Công Nghệ Phần Mềm'},
  {studentId: 661425, fullName: 'dron', email: 'aacbv@gmail.com', phone: '032345698', major:'Công Nghệ Thông Tin'},
  {studentId: 652533, fullName: 'Nguyễn Thế Danh', email: 'danhnguyen@gmail.com', phone: '0384702474', major:'Công Nghệ Phần Mềm'},
];
